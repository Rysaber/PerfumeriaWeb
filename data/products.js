export const products = [
  {
    id: 1,
    name: "Loción Hidratante Premium",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.5,
    reviews: 128,
    category: "femenino",
    tags: ["destacado", "nuevo"],
    image: "/images/products/locion-1.jpg",
    description: "Loción hidratante con ingredientes naturales para todo tipo de piel.",
    ingredients: ["Aloe Vera", "Vitamina E", "Aceite de Jojoba"],
    inStock: true,
  },
  {
    id: 2,
    name: "Perfume Árabe Exclusivo",
    price: 89.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 89,
    category: "arabe",
    tags: ["destacado", "oferta"],
    image: "/images/products/perfume-1.jpg",
    description: "Fragancia oriental con notas de oud y especias.",
    ingredients: ["Oud", "Rosa", "Sándalo"],
    inStock: true,
  },
  {
    id: 3,
    name: "Colonia Masculina Sport",
    price: 34.99,
    originalPrice: 39.99,
    rating: 4.3,
    reviews: 67,
    category: "masculino",
    tags: ["nuevo"],
    image: "/images/products/colonia-1.jpg",
    description: "Fragancia fresca y deportiva para el hombre moderno.",
    ingredients: ["Bergamota", "Lavanda", "Cedro"],
    inStock: true,
  },
  {
    id: 4,
    name: "Aceite Esencial Unisex",
    price: 19.99,
    originalPrice: 24.99,
    rating: 4.6,
    reviews: 156,
    category: "unisex",
    tags: ["destacado", "oferta"],
    image: "/images/products/aceite-1.jpg",
    description: "Aceite esencial natural para aromaterapia y relajación.",
    ingredients: ["Lavanda", "Eucalipto", "Menta"],
    inStock: true,
  },
  {
    id: 5,
    name: "Crema Anti-edad",
    price: 45.99,
    originalPrice: 55.99,
    rating: 4.7,
    reviews: 203,
    category: "femenino",
    tags: ["nuevo", "oferta"],
    image: "/images/products/crema-1.jpg",
    description: "Crema anti-edad con colágeno y ácido hialurónico.",
    ingredients: ["Colágeno", "Ácido Hialurónico", "Retinol"],
    inStock: false,
  },
  {
    id: 6,
    name: "Bálsamo Aftershave",
    price: 16.99,
    originalPrice: 19.99,
    rating: 4.2,
    reviews: 94,
    category: "masculino",
    tags: ["destacado"],
    image: "/images/products/balsamo-1.jpg",
    description: "Bálsamo calmante para después del afeitado.",
    ingredients: ["Aloe Vera", "Mentol", "Vitamina B5"],
    inStock: true,
  },
]

export const getProductById = (id) => {
  return products.find((product) => product.id === Number.parseInt(id))
}

export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category)
}

export const getProductsByTag = (tag) => {
  return products.filter((product) => product.tags.includes(tag))
}

export const getFeaturedProducts = () => {
  return products.filter((product) => product.tags.includes("destacado"))
}

export const getNewProducts = () => {
  return products.filter((product) => product.tags.includes("nuevo"))
}

export const getOffersProducts = () => {
  return products.filter((product) => product.tags.includes("oferta"))
}
