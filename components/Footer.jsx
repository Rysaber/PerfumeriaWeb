import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#191919] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#f4c944] rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">Lociones</span>
            </div>
            <p className="text-gray-400 text-sm">
              Tu tienda de confianza para productos de belleza y cuidado personal. Calidad garantizada en cada producto.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#f4c944] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f4c944] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f4c944] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#f4c944] transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-gray-400 hover:text-[#f4c944] transition-colors text-sm">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="text-gray-400 hover:text-[#f4c944] transition-colors text-sm">
                  Categorías
                </Link>
              </li>
              <li>
                <Link href="/conocenos" className="text-gray-400 hover:text-[#f4c944] transition-colors text-sm">
                  Conocenos
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorías */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/productos?categoria=femenino"
                  className="text-gray-400 hover:text-[#f4c944] transition-colors text-sm"
                >
                  Femenino
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?categoria=masculino"
                  className="text-gray-400 hover:text-[#f4c944] transition-colors text-sm"
                >
                  Masculino
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?categoria=arabe"
                  className="text-gray-400 hover:text-[#f4c944] transition-colors text-sm"
                >
                  Árabe
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?categoria=unisex"
                  className="text-gray-400 hover:text-[#f4c944] transition-colors text-sm"
                >
                  Unisex
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#f4c944]" />
                <span className="text-gray-400 text-sm">info@lociones.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#f4c944]" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#f4c944]" />
                <span className="text-gray-400 text-sm">123 Beauty St, Ciudad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {currentYear} Lociones. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/privacidad" className="text-gray-400 hover:text-[#f4c944] transition-colors text-sm">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-400 hover:text-[#f4c944] transition-colors text-sm">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
