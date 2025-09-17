"use client"

import { useState } from "react"
import Image from "next/image"
import { menuItems, menuCategories } from "@/lib/menu-data"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("Sandwiches")

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <section className="py-16 px-4 text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Menu</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Authentic Vietnamese dishes with fresh ingredients and traditional recipes passed down through generations.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900 hover:text-orange-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems
              .filter(item => item.category === selectedCategory)
              .map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                    {item.popular && (
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">${item.price}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Special Note */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Special Dietary Needs?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We're happy to accommodate vegetarian, vegan, and gluten-free dietary requirements. 
            Please inform our staff when placing your order, and we'll make sure to prepare 
            your meal according to your needs.
          </p>
          <div className="bg-orange-50 dark:bg-orange-900 border border-orange-200 dark:border-orange-700 rounded-lg p-6">
            <p className="text-orange-800 dark:text-orange-200 font-medium">
              💡 All our dishes are made fresh to order. Please allow 15-20 minutes for preparation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
