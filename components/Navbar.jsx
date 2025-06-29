"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Search, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Categorías", href: "/categorias" },
    { name: "Conocenos", href: "/conocenos" },
  ]

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-[#191919] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y iconos */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-8 h-8 bg-[#f4c944] rounded-full flex items-center justify-center hover:bg-[#f4c944]/90 transition-colors"
              >
                <Search className="w-4 h-4 text-black" />
              </button>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-6 ml-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-[#f4c944] ${
                    isActive(item.href) ? "text-[#f4c944]" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Profile y menú móvil */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#d9d9d9] flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none"
                  e.target.parentElement.style.backgroundColor = "#d9d9d9"
                }}
              />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative max-w-md">
              <Input
                placeholder="Buscar productos..."
                className="bg-[#f4c944] text-black placeholder:text-black/70 border-none rounded-full pl-10"
              />
              <Search className="w-4 h-4 text-black absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-[#f4c944] ${
                    isActive(item.href) ? "text-[#f4c944]" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
