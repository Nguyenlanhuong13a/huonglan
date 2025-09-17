import Link from "next/link"
import Image from "next/image"
import { menuItems } from "@/lib/menu-data"
import { locations } from "@/lib/locations-data"
import { ScrollAnimation } from "@/components/scroll-animation"
import { FoodGallery } from "@/components/food-gallery"

export default function HomePage() {
  const featuredItems = menuItems.filter(item => item.popular).slice(0, 3)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 text-center restaurant-gradient-soft overflow-hidden">
        
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight fade-in-down">
            <span className="text-reveal">
              <span className="stagger-1">Huong</span> <span className="stagger-2">Lan</span> <span className="stagger-3">Restaurant</span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-gray-900 dark:text-white max-w-4xl mx-auto font-medium fade-in-up stagger-2">
            Serving The Central Valley For Over 10 Years
          </p>
          <p className="text-base sm:text-lg mb-8 sm:mb-10 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up stagger-3 px-2">
            Our passion for food is only matched by our love for our community. We believe that food brings people together and we're proud to share a piece of our culture with everyone who visits us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center fade-in-up stagger-4 px-4">
            <Link 
              href="/menu" 
              className="w-full sm:w-auto bg-restaurant-orange-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl hover:bg-restaurant-orange-600 transition-all duration-300 font-semibold text-base sm:text-lg restaurant-shadow hover:scale-105 hover:pulse-glow min-h-[44px] flex items-center justify-center"
            >
              View Menu
            </Link>
            <Link 
              href="/locations" 
              className="w-full sm:w-auto bg-white dark:bg-gray-800 text-restaurant-orange-500 dark:text-orange-400 border-2 border-restaurant-orange-500 dark:border-orange-400 px-8 sm:px-10 py-3 sm:py-4 rounded-2xl hover:bg-restaurant-orange-50 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-base sm:text-lg restaurant-shadow hover:scale-105 min-h-[44px] flex items-center justify-center"
            >
              Find Locations
            </Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animationType="text-slide-in" className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-restaurant-orange-100 dark:bg-orange-900 text-restaurant-orange-600 dark:text-orange-200 rounded-full text-sm font-semibold mb-6 scale-in stagger-1">
                Our Story
              </div>
              <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200 fade-in-up stagger-2">
                About <span className="text-gradient">Huong Lan</span>
              </h2>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed fade-in-up stagger-3">
                Our passion for food is only matched by our love for our community. We believe that food brings people together and we're proud to share a piece of our culture with everyone who orders from us.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed fade-in-up stagger-4">
                Whether you're craving a delicious Banh Mi sandwich or want to try one of our other menu items, we invite you to order online or call ahead for pickup and experience the taste of Vietnam at Huong Lan.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-restaurant-orange-500 text-white px-8 py-4 rounded-2xl hover:bg-restaurant-orange-600 transition-all duration-300 font-semibold restaurant-shadow hover:scale-105 hover:pulse-glow fade-in-up stagger-5 button-press"
              >
                Learn More About Us
              </Link>
            </ScrollAnimation>
            <ScrollAnimation animationType="image-reveal" className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/IMG_1773.png"
                  alt="Huong Lan family at their traditional Vietnamese market stall - the humble beginnings of our restaurant"
                  width={600}
                  height={400}
                  className="rounded-3xl restaurant-shadow-lg hover:scale-105 transition-transform duration-500 smooth-rotate"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-20 px-4 restaurant-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationType="content-fade-in" className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-restaurant-orange-100 dark:bg-orange-900 text-restaurant-orange-600 dark:text-orange-200 rounded-full text-sm font-semibold mb-6 scale-in stagger-1">
              Our Specialties
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200 fade-in-up stagger-2">
              Popular <span className="text-gradient">Dishes</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto fade-in-up stagger-3">
              Discover our most loved Vietnamese specialties crafted with authentic flavors and fresh ingredients
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <ScrollAnimation 
                key={item.id} 
                animationType="gentle-scale" 
                delay={index * 100}
                className={`bg-white dark:bg-gray-800 rounded-3xl p-8 restaurant-shadow card-hover group fade-in-up stagger-${index + 1} card-lift`}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-restaurant-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 subtle-float">
                    <span className="text-2xl">🍜</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-restaurant-orange-500 transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed text-center">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-gradient">${item.price}</span>
                  <Link 
                    href="/menu" 
                    className="text-restaurant-orange-500 border-b-2 border-restaurant-orange-500 hover:border-transparent text-sm font-semibold transition-colors hover:scale-105 button-press"
                  >
                    View Menu →
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation animationType="gentle-slide-up" className="text-center mt-16">
            <Link 
              href="/menu" 
              className="bg-restaurant-orange-500 text-white px-10 py-4 rounded-2xl hover:bg-restaurant-orange-600 transition-all duration-300 font-semibold text-lg restaurant-shadow hover:scale-105 hover:pulse-glow button-press"
            >
              View Full Menu
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Food Gallery */}
      <FoodGallery />

      {/* Locations Preview */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationType="content-fade-in" className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-restaurant-orange-100 dark:bg-orange-900 text-restaurant-orange-600 dark:text-orange-200 rounded-full text-sm font-semibold mb-6 scale-in stagger-1">
              Find Us
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200 fade-in-up stagger-2">
              Our <span className="text-gradient">Locations</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto fade-in-up stagger-3">
              Visit us at any of our three convenient locations in Fresno
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <ScrollAnimation 
                key={location.id} 
                animationType="gentle-scale" 
                delay={index * 150}
                className={`bg-white dark:bg-gray-800 border-2 border-restaurant-cream-200 dark:border-gray-700 rounded-3xl p-8 hover:border-restaurant-orange-300 card-hover group fade-in-up stagger-${index + 1} card-lift border-glow`}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-restaurant-orange-500 transition-colors">
                    {location.name}
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      {location.address}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {location.phone}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {location.hours}
                    </p>
                  </div>
                </div>
                {location.hasOnlineOrdering && (
                  <div className="mb-4">
                    <span className="inline-block bg-restaurant-orange-100 dark:bg-orange-900 text-restaurant-orange-600 dark:text-orange-200 text-xs px-3 py-2 rounded-full font-semibold shimmer">
                      Online Ordering Available
                    </span>
                  </div>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{location.description}</p>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation animationType="gentle-slide-up" className="text-center mt-16">
            <Link 
              href="/locations" 
              className="bg-restaurant-orange-500 text-white px-10 py-4 rounded-2xl hover:bg-restaurant-orange-600 transition-all duration-300 font-semibold text-lg restaurant-shadow hover:scale-105 hover:pulse-glow button-press"
            >
              View All Locations
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-4 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-200">
        
        <ScrollAnimation animationType="content-fade-in" className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-black dark:text-white leading-tight fade-in-down">
            <span className="text-reveal">
              <span className="stagger-1">Ready</span> <span className="stagger-2">to</span> <span className="stagger-3">Experience</span> <span className="stagger-4">Authentic</span> <span className="stagger-5">Vietnamese</span> <span className="stagger-1">Cuisine?</span>
            </span>
          </h2>
          <p className="text-xl mb-12 text-black/80 dark:text-white/90 max-w-3xl mx-auto leading-relaxed fade-in-up stagger-2">
            Join us for an unforgettable dining experience with traditional flavors and fresh ingredients
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up stagger-3">
            <Link 
              href="/contact" 
              className="bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-semibold text-lg restaurant-shadow hover:scale-105 hover:pulse-glow button-press"
            >
              Contact Us
            </Link>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  )
}
