"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Share2, ArrowLeft, Plus, Minus } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { getProductById, products } from "@/data/products"

export default function ProductoPage() {
  const params = useParams()
  const product = getProductById(params.id)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
            <Link href="/productos">
              <Button className="bg-[#f4c944] text-black hover:bg-[#f4c944]/90">Volver a productos</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const handleComprar = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1", "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/productos" className="flex items-center gap-2 text-gray-600 hover:text-[#f4c944]">
            <ArrowLeft className="w-4 h-4" />
            Volver a productos
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Imágenes del producto */}
          <div className="space-y-4">
            <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg?height=384&width=384"}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.originalPrice > product.price && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 bg-gray-100 rounded-lg overflow-hidden border-2 ${
                    selectedImage === i ? "border-[#f4c944]" : "border-transparent"
                  }`}
                >
                  <Image
                    src={product.image || "/placeholder.svg?height=80&width=80"}
                    alt={`${product.name} ${i + 1}`}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            <div>
              <div className="flex gap-2 mb-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-[#f4c944] text-black">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-gray-600">({product.reviews} reseñas)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Ingredientes */}
            <div>
              <h3 className="font-semibold mb-2">Ingredientes principales:</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient) => (
                  <Badge key={ingredient} variant="outline">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Cantidad y botones */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold">Cantidad:</span>
                <div className="flex items-center border rounded-lg">
                  <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(1)}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleComprar}
                  className="flex-1 bg-[#f4c944] text-black hover:bg-[#f4c944]/90"
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Comprar Ahora" : "Agotado"}
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Estado del stock */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}></div>
              <span className="text-sm text-gray-600">{product.inStock ? "En stock" : "Agotado"}</span>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-4">
                    <div className="relative w-full h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg?height=160&width=200"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex gap-1 mb-2">{renderStars(relatedProduct.rating)}</div>
                    <h3 className="font-medium mb-2 line-clamp-2 text-sm">{relatedProduct.name}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold">${relatedProduct.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={handleComprar}
                        size="sm"
                        className="flex-1 bg-[#f4c944] text-black hover:bg-[#f4c944]/90"
                      >
                        Comprar
                      </Button>
                      <Link href={`/producto/${relatedProduct.id}`}>
                        <Button size="sm" variant="outline">
                          Ver
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
