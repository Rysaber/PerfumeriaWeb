import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { categories } from "@/data/categories"

export default function CategoriasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Categorías</h1>
          <p className="text-gray-600">Explora nuestras diferentes categorías de productos</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/productos?categoria=${category.slug}`}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={category.image || "/placeholder.svg?height=192&width=384"}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <h2 className="text-white text-2xl font-bold">{category.name}</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{category.productCount} productos</span>
                      <span className="text-[#f4c944] font-semibold hover:underline">Ver productos →</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
