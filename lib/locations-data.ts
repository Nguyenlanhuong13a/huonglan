export interface Location {
  id: string
  name: string
  address: string
  phone: string
  hours: string
  hasOnlineOrdering: boolean
  onlineOrderingUrl?: string
  description?: string
}

export const locations: Location[] = [
  {
    id: "1",
    name: "Huong Lan 9",
    address: "4965 N Fresno St, Fresno, CA 93726",
    phone: "(559) 221-8000",
    hours: "Monday-Sunday: 8am-9pm",
    hasOnlineOrdering: true,
    onlineOrderingUrl: "https://www.clover.com/online-ordering/huong-lan-9-fresno",
    description: "Our flagship location with full menu and online ordering available."
  },
  {
    id: "2", 
    name: "Huong Lan 10",
    address: "5669 E Kings Canyon Rd #102, Fresno, CA 93727",
    phone: "(559) 251-5000",
    hours: "Monday-Sunday: 8am-8pm",
    hasOnlineOrdering: false,
    description: "Convenient location with dine-in and takeout options."
  },
  {
    id: "3",
    name: "Pho Or Banh Mi",
    address: "3757 W Shaw Ave, Fresno, CA 93711", 
    phone: "(559) 271-9998",
    hours: "Monday-Sunday: 10am-8pm",
    hasOnlineOrdering: false,
    description: "Specializing in pho and banh mi with authentic Vietnamese flavors."
  }
]
