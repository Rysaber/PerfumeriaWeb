"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Filter } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { products } from "@/data/products"
import { categories } from "@/data/categories"

export default function ProductosPage() {
  const searchParams = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("categoria") || "todas")
  const [sortBy, setSortBy] = useState("nombre")
  const [priceRange, setPriceRange] = useState("todas")

  useEffect(() => {
    let filtered = [...products]

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filtrar por categoría
    if (selectedCategory !== "todas") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filtrar por rango de precio
    if (priceRange !== "todas") {
      switch (priceRange) {
        case "0-25":
          filtered = filtered.filter((product) => product.price <= 25)
          break
        case "25-50":
          filtered = filtered.filter((product) => product.price > 25 && product.price <= 50)
          break
        case "50+":
          filtered = filtered.filter((product) => product.price > 50)
          break
      }
    }

    // Ordenar
    switch (sortBy) {
      case "precio-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "precio-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name))
    }

    setFilteredProducts(filtered)
  }, [searchTerm, selectedCategory, sortBy, priceRange])

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  const handleComprar = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1", "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Productos</h1>
          <p className="text-gray-600">Descubre nuestra colección completa de productos</p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold">Filtros</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Búsqueda */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <Input
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categoría */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas las categorías</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.slug}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Rango de precio */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Precio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todos los precios</SelectItem>
                <SelectItem value="0-25">$0 - $25</SelectItem>
                <SelectItem value="25-50">$25 - $50</SelectItem>
                <SelectItem value="50+">$50+</SelectItem>
              </SelectContent>
            </Select>

            {/* Ordenar */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nombre">Nombre A-Z</SelectItem>
                <SelectItem value="precio-asc">Precio: Menor a Mayor</SelectItem>
                <SelectItem value="precio-desc">Precio: Mayor a Menor</SelectItem>
                <SelectItem value="rating">Mejor Valorados</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {filteredProducts.length} de {products.length} productos
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-4">
                <div className="relative w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg?height=192&width=256"}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                  {product.originalPrice > product.price && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold">Agotado</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-1 mb-2">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                </div>

                <h3 className="font-medium mb-2 line-clamp-2 text-sm">{product.name}</h3>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={handleComprar}
                    size="sm"
                    className="flex-1 bg-[#f4c944] text-black hover:bg-[#f4c944]/90"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? "Comprar" : "Agotado"}
                  </Button>
                  <Link href={`/producto/${product.id}`}>
                    <Button size="sm" variant="outline">
                      Ver
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos con los filtros seleccionados.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
