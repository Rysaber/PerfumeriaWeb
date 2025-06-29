"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { getFeaturedProducts, getNewProducts, getOffersProducts } from "@/data/products"
import { categories } from "@/data/categories"

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("destacados")

  const getFilteredProducts = () => {
    switch (activeFilter) {
      case "nuevos":
        return getNewProducts()
      case "oferta":
        return getOffersProducts()
      default:
        return getFeaturedProducts()
    }
  }

  const filteredProducts = getFilteredProducts()

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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Profile Section */}
      <div className="bg-[#191919] px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="w-48 h-48 rounded-full mx-auto overflow-hidden bg-[#d9d9d9] flex items-center justify-center">
            <img
              src="/images/profile-logo.png"
              alt="Profile Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none"
                e.target.parentElement.style.backgroundColor = "#d9d9d9"
              }}
            />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Productos</h2>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveFilter("destacados")}
              className={`rounded-full px-6 ${
                activeFilter === "destacados"
                  ? "bg-[#f4c944] text-black hover:bg-[#f4c944]/90"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Destacados
            </Button>
            <Button
              onClick={() => setActiveFilter("nuevos")}
              className={`rounded-full px-6 ${
                activeFilter === "nuevos"
                  ? "bg-[#f4c944] text-black hover:bg-[#f4c944]/90"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Nuevos
            </Button>
            <Button
              onClick={() => setActiveFilter("oferta")}
              className={`rounded-full px-6 ${
                activeFilter === "oferta"
                  ? "bg-[#f4c944] text-black hover:bg-[#f4c944]/90"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Oferta
            </Button>
          </div>

          {/* Product Carousel */}
          <div className="relative">
            <div className="flex items-center justify-center">
              <Button variant="ghost" size="icon" className="absolute left-0 z-10 bg-white shadow-lg hover:bg-gray-50">
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                {filteredProducts.slice(0, 3).map((product) => (
                  <Card key={product.id} className="w-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="relative w-full h-40 bg-[#d9d9d9] rounded-lg mb-4 overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg?height=160&width=240"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        {product.originalPrice > product.price && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                          </div>
                        )}
                      </div>
                      <div className="flex gap-1 mb-2">
                        {renderStars(product.rating)}
                        <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                      <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-lg">${product.price}</span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={handleComprar}
                            size="sm"
                            className="bg-[#f4c944] text-black hover:bg-[#f4c944]/90"
                          >
                            Comprar
                          </Button>
                          <Link href={`/producto/${product.id}`}>
                            <Button size="sm" variant="outline">
                              Ver
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="ghost" size="icon" className="absolute right-0 z-10 bg-white shadow-lg hover:bg-gray-50">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Ver todos los productos */}
          <div className="text-center mt-8">
            <Link href="/productos">
              <Button className="bg-[#f4c944] text-black hover:bg-[#f4c944]/90 rounded-full px-8">
                Ver todos los productos
              </Button>
            </Link>
          </div>

          {/* Category Buttons */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Categorías</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {categories.map((category) => (
                <Link key={category.id} href={`/productos?categoria=${category.slug}`}>
                  <div className="relative group cursor-pointer">
                    <div className="w-36 h-24 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={category.image || "/placeholder.svg?height=96&width=144"}
                        alt={category.name}
                        width={144}
                        height={96}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-3 group-hover:from-black/50 transition-all duration-300">
                        <span className="text-white text-sm font-semibold drop-shadow-lg">{category.name}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image src="/hero-image.png" alt="Couple wearing sunglasses" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">
                Descubre nuestros
                <br />
                productos y novedades
              </h2>
              <Link href="/productos">
                <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-3">ver mas</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
