export const categories = [
  {
    id: 1,
    name: "Femenino",
    slug: "femenino",
    image: "/images/categories/femenino.jpg",
    description: "Productos de belleza y cuidado personal para mujeres",
    productCount: 2,
  },
  {
    id: 2,
    name: "Árabe",
    slug: "arabe",
    image: "/images/categories/arabe.jpg",
    description: "Fragancias y productos orientales tradicionales",
    productCount: 1,
  },
  {
    id: 3,
    name: "Masculino",
    slug: "masculino",
    image: "/images/categories/masculino.jpg",
    description: "Productos de cuidado personal para hombres",
    productCount: 2,
  },
  {
    id: 4,
    name: "Destacado",
    slug: "destacado",
    image: "/images/categories/destacado.jpg",
    description: "Nuestros productos más populares y recomendados",
    productCount: 4,
  },
  {
    id: 5,
    name: "Unisex",
    slug: "unisex",
    image: "/images/categories/unisex.jpg",
    description: "Productos para todos los géneros",
    productCount: 1,
  },
]

export const getCategoryBySlug = (slug) => {
  return categories.find((category) => category.slug === slug)
}
