import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Navigation } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get in touch with us for reservations, questions, or just to say hello. 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  We're here to help! Whether you have questions about our menu, 
                  want to make a reservation, or have special dietary requirements, 
                  don't hesitate to reach out to us.
                </p>
              </div>

              <div className="space-y-6">
                {/* Huong Lan 9 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Huong Lan 9</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          4965 N Fresno St<br />
                          Fresno, CA 93726
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          <a href="tel:+15592218000" className="hover:text-orange-600 transition-colors">
                            (559) 221-8000
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Monday-Sunday: 8am-9pm | Online Ordering Available
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Huong Lan 10 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Huong Lan 10</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          5669 E Kings Canyon Rd #102<br />
                          Fresno, CA 93727
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          <a href="tel:+15592515000" className="hover:text-orange-600 transition-colors">
                            (559) 251-5000
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Monday-Sunday: 8am-8pm | No Online Ordering
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Pho Or Banh Mi */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Pho Or Banh Mi</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          3757 W Shaw Ave<br />
                          Fresno, CA 93711
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          <a href="tel:+15592719998" className="hover:text-orange-600 transition-colors">
                            (559) 271-9998
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Monday-Sunday: 10am-8pm | No Online Ordering
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          <a href="mailto:info@huonglanfresno.com" className="hover:text-orange-600 transition-colors">
                            info@huonglanfresno.com
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Find Us</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  We have three convenient locations throughout Fresno. Select a location below to see the map and get directions.
                </p>
              </div>

              {/* Location Tabs */}
              <Tabs defaultValue="huong-lan-9" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-200 dark:bg-gray-700 p-1 rounded-lg">
                  <TabsTrigger 
                    value="huong-lan-9" 
                    className="text-sm data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white rounded-md"
                  >
                    Huong Lan 9
                  </TabsTrigger>
                  <TabsTrigger 
                    value="huong-lan-10" 
                    className="text-sm data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white rounded-md"
                  >
                    Huong Lan 10
                  </TabsTrigger>
                  <TabsTrigger 
                    value="pho-banh-mi" 
                    className="text-sm data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white rounded-md"
                  >
                    Pho Or Banh Mi
                  </TabsTrigger>
                </TabsList>

                {/* Huong Lan 9 Map */}
                <TabsContent value="huong-lan-9" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-orange-600" />
                        Huong Lan 9
                      </CardTitle>
                      <CardDescription>
                        4965 N Fresno St, Fresno, CA 93726 | (559) 221-8000
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.604061093978!2d-119.78796568471212!3d36.73723297996258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945e26d4f5cb43%3A0x3240422fad511807!2s4965%20N%20Fresno%20St%2C%20Fresno%2C%20CA%2093726!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Huong Lan 9 Location"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <a href="https://maps.google.com/?q=4965+N+Fresno+St,+Fresno,+CA+93726" target="_blank" rel="noopener noreferrer">
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href="tel:+15592218000">Call Now</a>
                    </Button>
                  </div>
                </TabsContent>

                {/* Huong Lan 10 Map */}
                <TabsContent value="huong-lan-10" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-orange-600" />
                        Huong Lan 10
                      </CardTitle>
                      <CardDescription>
                        5669 E Kings Canyon Rd #102, Fresno, CA 93727 | (559) 251-5000
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.604061093978!2d-119.78796568471212!3d36.73723297996258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945e26d4f5cb43%3A0x3240422fad511807!2s5669%20E%20Kings%20Canyon%20Rd%20%23102%2C%20Fresno%2C%20CA%2093727!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Huong Lan 10 Location"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <a href="https://maps.google.com/?q=5669+E+Kings+Canyon+Rd+%23102,+Fresno,+CA+93727" target="_blank" rel="noopener noreferrer">
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href="tel:+15592515000">Call Now</a>
                    </Button>
                  </div>
                </TabsContent>

                {/* Pho Or Banh Mi Map */}
                <TabsContent value="pho-banh-mi" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-orange-600" />
                        Pho Or Banh Mi
                      </CardTitle>
                      <CardDescription>
                        3757 W Shaw Ave, Fresno, CA 93711 | (559) 271-9998
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.604061093978!2d-119.78796568471212!3d36.73723297996258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945e26d4f5cb43%3A0x3240422fad511807!2s3757%20W%20Shaw%20Ave%2C%20Fresno%2C%20CA%2093711!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Pho Or Banh Mi Location"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <a href="https://maps.google.com/?q=3757+W+Shaw+Ave,+Fresno,+CA+93711" target="_blank" rel="noopener noreferrer">
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href="tel:+15592719998">Call Now</a>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <Button asChild size="lg" className="w-full">
                  <a href="/reservations">Make a Reservation</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href="/locations">View All Locations</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Parking</CardTitle>
                <CardDescription>
                  Free parking available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  We have a dedicated parking lot in front of the restaurant. 
                  Additional street parking is available on Main Street.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility</CardTitle>
                <CardDescription>
                  Wheelchair accessible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Our restaurant is fully wheelchair accessible with ramps and 
                  accessible restrooms. We're committed to welcoming all guests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group Events</CardTitle>
                <CardDescription>
                  Private dining available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Planning a special event? We offer private dining options for 
                  groups of 20 or more. Contact us for custom menu arrangements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
