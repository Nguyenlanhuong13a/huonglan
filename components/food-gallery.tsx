"use client"

import { useState } from "react"
import Image from "next/image"
import { ScrollAnimation } from "./scroll-animation"

interface FoodImage {
  src: string
  alt: string
  category: string
}

const foodImages: FoodImage[] = [
  {
    src: "/2.png",
    alt: "Fresh Banh Mi Sandwich with crispy bread and fresh vegetables",
    category: "Sandwiches"
  },
  {
    src: "/3.png", 
    alt: "Com Tam - Vietnamese broken rice with grilled pork and fried eggs",
    category: "Rice Dishes"
  },
  {
    src: "/4.png",
    alt: "Premium beef tenderloin rare steak with fresh herbs",
    category: "Meat"
  },
  {
    src: "/5.png",
    alt: "Crispy Vietnamese spring rolls with fresh lettuce and dipping sauce",
    category: "Appetizers"
  },
  {
    src: "/6.png",
    alt: "Bun vermicelli bowl with grilled meat and fresh vegetables",
    category: "Noodles"
  },
  {
    src: "/7.png",
    alt: "Traditional Vietnamese pho with rare beef and fresh herbs",
    category: "Soup"
  },
  {
    src: "/9.png",
    alt: "Fresh Banh Mi with colorful vegetables and herbs",
    category: "Sandwiches"
  },
  {
    src: "/10.png",
    alt: "Vietnamese vermicelli bowl with spring rolls and fresh toppings",
    category: "Noodles"
  },
  {
    src: "/11.png",
    alt: "Fresh Vietnamese spring rolls with shrimp and herbs",
    category: "Appetizers"
  },
  {
    src: "/o.png",
    alt: "Traditional Vietnamese pho with rare beef and fresh garnishes",
    category: "Soup"
  },
  {
    src: "/Spring Roll - Shrimp & Pork.png",
    alt: "Fresh Vietnamese spring rolls with shrimp and pork filling",
    category: "Appetizers"
  },
  {
    src: "/Tenderloin Rare Steak.png",
    alt: "Premium beef tenderloin with fresh herbs and onions",
    category: "Meat"
  }
]

export function FoodGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(foodImages.map(img => img.category)))]
  const filteredImages = selectedCategory === "All" 
    ? foodImages 
    : foodImages.filter(img => img.category === selectedCategory)

  return (
    <>
      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationType="content-fade-in" className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 text-orange-600 dark:text-orange-200 rounded-full text-sm font-bold mb-6 scale-in stagger-1 shadow-lg">
              ✨ Our Delicious Creations
            </div>
            <h2 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-200 fade-in-up stagger-2">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Food Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto fade-in-up stagger-3 leading-relaxed">
              Feast your eyes on our authentic Vietnamese dishes. Each plate tells a story of tradition, 
              fresh ingredients, and culinary passion that will make your mouth water.
            </p>
          </ScrollAnimation>

          {/* Category Filter */}
          <ScrollAnimation animationType="gentle-slide-up" className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900 hover:text-orange-600 border border-gray-200 dark:border-gray-700"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollAnimation>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <ScrollAnimation 
                key={image.src}
                animationType="gentle-scale" 
                delay={index * 100}
                className="group cursor-pointer"
              >
                <div 
                  className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <p className="text-white text-sm font-semibold bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                        {image.category}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Call to Action */}
          <ScrollAnimation animationType="gentle-slide-up" className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Hungry Yet? 😋</h3>
              <p className="text-lg mb-6 opacity-90">
                These mouth-watering dishes are just a click away. Order now and taste the authentic flavors of Vietnam!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.clover.com/online-ordering/huong-lan-9-fresno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🛒 Order Online Now
                </a>
                <a
                  href="/locations"
                  className="bg-orange-600 text-white border-2 border-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  📍 Find Us
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Modal for Full Size Images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Full size food image"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                style={{ maxHeight: '80vh', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
