import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Award, Users, Heart, Leaf } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ConocenosPage() {
  const valores = [
    {
      icon: <Heart className="w-8 h-8 text-[#f4c944]" />,
      title: "Pasión por la Belleza",
      description: "Nos apasiona ayudarte a sentirte y verte mejor cada día con productos de la más alta calidad.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#f4c944]" />,
      title: "Ingredientes Naturales",
      description: "Priorizamos ingredientes naturales y sostenibles en todos nuestros productos.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#f4c944]" />,
      title: "Calidad Garantizada",
      description: "Cada producto pasa por rigurosos controles de calidad antes de llegar a ti.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#f4c944]" />,
      title: "Atención Personalizada",
      description: "Nuestro equipo está siempre disponible para brindarte la mejor experiencia de compra.",
    },
  ]

  const equipo = [
    {
      name: "María González",
      position: "Fundadora & CEO",
      image: "/placeholder.svg?height=200&width=200",
      description: "Con más de 15 años de experiencia en la industria de la belleza.",
    },
    {
      name: "Carlos Rodríguez",
      position: "Director de Productos",
      image: "/placeholder.svg?height=200&width=200",
      description: "Experto en formulación y desarrollo de productos cosméticos.",
    },
    {
      name: "Ana Martínez",
      position: "Especialista en Atención al Cliente",
      image: "/placeholder.svg?height=200&width=200",
      description: "Dedicada a brindar la mejor experiencia a nuestros clientes.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-[#191919] to-gray-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Conoce Nuestra Historia</h1>
            <p className="text-xl text-gray-300">Más de una década creando belleza y confianza</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Nuestra Historia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Nuestra Historia</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fundada en 2010, <strong>Lociones</strong> nació de la pasión por crear productos de belleza y cuidado
                personal que realmente marquen la diferencia en la vida de nuestros clientes.
              </p>
              <p>
                Lo que comenzó como un pequeño laboratorio artesanal, hoy se ha convertido en una marca reconocida por
                la calidad de sus productos y el compromiso con la satisfacción del cliente.
              </p>
              <p>
                Nos especializamos en fragancias únicas, lociones hidratantes y productos de cuidado personal para todos
                los géneros y edades, siempre utilizando los mejores ingredientes naturales.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/placeholder.svg?height=384&width=500" alt="Nuestra historia" fill className="object-cover" />
          </div>
        </div>

        {/* Nuestros Valores */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{valor.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{valor.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{valor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nuestro Equipo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipo.map((miembro, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    <Image src={miembro.image || "/placeholder.svg"} alt={miembro.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{miembro.name}</h3>
                  <p className="text-[#f4c944] font-medium mb-3">{miembro.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{miembro.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <div className="bg-[#191919] rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold text-[#f4c944] mb-2">10,000+</div>
              <div className="text-gray-300">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#f4c944] mb-2">50+</div>
              <div className="text-gray-300">Productos Únicos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#f4c944] mb-2">13</div>
              <div className="text-gray-300">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#f4c944] mb-2">99%</div>
              <div className="text-gray-300">Satisfacción del Cliente</div>
            </div>
          </div>
        </div>

        {/* Información de Contacto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contáctanos</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f4c944] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dirección</h3>
                  <p className="text-gray-600">Av. Belleza 123, Centro Comercial Plaza Norte, Local 45</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f4c944] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Teléfono</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f4c944] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@lociones.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f4c944] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Horarios</h3>
                  <p className="text-gray-600">Lun - Vie: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sáb - Dom: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f4c944] focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f4c944] focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f4c944] focus:border-transparent"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <Button className="w-full bg-[#f4c944] text-black hover:bg-[#f4c944]/90">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
