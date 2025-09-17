export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  popular?: boolean
}

export const menuCategories = [
  "Sandwiches", 
  "Appetizer", 
  "Pho - Beef Soup",
  "Soup",
  "Noodle Soup",
  "Rice Plates",
  "Vermicelli Bowl",
  "Steam Rice Sheet",
  "Pearl Drinks",
  "Blended Pearl Drinks",
  "Beverages"
]

export const menuItems: MenuItem[] = [
  // Sandwiches
  {
    id: "1",
    name: "Ham & Headcheese Pate",
    description: "Bánh Mì Thịt Nguội - Traditional Vietnamese sandwich with ham, headcheese, and pate",
    price: 7.49,
    image: "",
    category: "Sandwiches",
    popular: true
  },
  {
    id: "2", 
    name: "Steam Pork",
    description: "Bánh Mì Chả Lụa - Fresh baguette with steamed pork roll",
    price: 7.49,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "3",
    name: "Meat Ball",
    description: "Bánh Mì Xíu Mại - Vietnamese meatball sandwich",
    price: 7.49,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "4",
    name: "B.B.Q Chicken",
    description: "Bánh Mì Gà Xá Xíu - BBQ chicken sandwich",
    price: 7.49,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "5",
    name: "B.B.Q Pork",
    description: "Bánh Mì Xá Xíu - BBQ pork sandwich",
    price: 7.49,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "6",
    name: "Shredded Pork & Pork Skin",
    description: "Bánh Mì Bì - Shredded pork and pork skin sandwich",
    price: 7.99,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "7",
    name: "Grilled Pork",
    description: "Bánh Mì Thịt Nướng - Grilled pork sandwich",
    price: 7.99,
    image: "",
    category: "Sandwiches",
    popular: true
  },
  {
    id: "8",
    name: "Sardine",
    description: "Bánh Mì Cá Mòi - Sardine sandwich",
    price: 7.99,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "9",
    name: "Shredded Chicken",
    description: "Bánh Mì Gà Chà Bông - Shredded chicken sandwich",
    price: 7.99,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "10",
    name: "Fish Patties",
    description: "Bánh Mì Chả Cá - Fish patties sandwich",
    price: 7.99,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "11",
    name: "Special Gio Bo",
    description: "Bánh Mì Giờ Bỏ - Special Vietnamese cold cuts sandwich",
    price: 7.99,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "12",
    name: "Special #1 & #2",
    description: "Bánh Mì Đặc Biệt - Special combination sandwich",
    price: 7.99,
    image: "",
    category: "Sandwiches",
    popular: true
  },
  {
    id: "13",
    name: "Vegetarian",
    description: "Bánh Mì Bị Cháy - Vegetarian sandwich",
    price: 7.99,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "14",
    name: "Chicken Teriyaki",
    description: "Bánh Mì Gà Teriyaki - Chicken teriyaki sandwich",
    price: 7.99,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "15",
    name: "Beef Teriyaki",
    description: "Bánh Mì Bò Teriyaki - Beef teriyaki sandwich",
    price: 8.50,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "16",
    name: "Egg, Ham, Headcheese & Pate",
    description: "Bánh Mì Ốp La - Fried egg with ham, headcheese and pate",
    price: 13.75,
    image: "",
    category: "Sandwiches"
  },
  {
    id: "17",
    name: "Beef Stew With French Bread",
    description: "Bánh Mì Bò Kho - Beef stew with French bread",
    price: 14.75,
    image: "",
    category: "Sandwiches"
  },

  // Appetizer
  {
    id: "18",
    name: "Shrimp & Onion Eggrolls",
    description: "Crispy eggrolls filled with shrimp and onion",
    price: 7.99,
    image: "",
    category: "Appetizer",
    popular: true
  },
  {
    id: "19",
    name: "Crispy Small Eggrolls",
    description: "Small crispy Vietnamese eggrolls",
    price: 8.50,
    image: "",
    category: "Appetizer"
  },
  {
    id: "20",
    name: "Crispy Large Eggrolls",
    description: "Large crispy Vietnamese eggrolls",
    price: 8.50,
    image: "",
    category: "Appetizer"
  },
  {
    id: "21",
    name: "Spring Rolls - Shrimp & Pork",
    description: "Fresh spring rolls with shrimp and pork",
    price: 8.50,
    image: "",
    category: "Appetizer",
    popular: true
  },
  {
    id: "21A",
    name: "Shrimp Spring Rolls - Shrimp Avocado",
    description: "Fresh spring rolls with shrimp and avocado",
    price: 8.50,
    image: "",
    category: "Appetizer"
  },
  {
    id: "22",
    name: "Spring Rolls - Pork Ball",
    description: "Fresh spring rolls with pork ball",
    price: 8.50,
    image: "",
    category: "Appetizer"
  },
  {
    id: "23",
    name: "Spring Rolls - Shredded Pork",
    description: "Fresh spring rolls with shredded pork",
    price: 8.50,
    image: "",
    category: "Appetizer"
  },

  // Pho - Beef Soup
  {
    id: "24",
    name: "Tenderlion + Combo Noodle Soup",
    description: "Tenderloin with combination noodle soup",
    price: 18.99,
    image: "",
    category: "Pho - Beef Soup"
  },
  {
    id: "25",
    name: "Tenderlion Rare Steak",
    description: "Tenderloin rare steak pho",
    price: 18.99,
    image: "",
    category: "Pho - Beef Soup"
  },
  {
    id: "26",
    name: "Vegetarian Noodle Soup",
    description: "Vegetarian pho noodle soup",
    price: 14.99,
    image: "",
    category: "Pho - Beef Soup"
  },
  {
    id: "27",
    name: "Seafood Noodle Soup",
    description: "Pho with fresh seafood (Mini-$11.99 Small-$14.99 Large-$15.99)",
    price: 14.99,
    image: "",
    category: "Pho - Beef Soup",
    popular: true
  },
  {
    id: "28",
    name: "Special Combo Noodle Soup",
    description: "Special combination pho (Mini-$11.99 Small-$14.99 Large-$15.99)",
    price: 14.99,
    image: "",
    category: "Pho - Beef Soup"
  },
  {
    id: "29",
    name: "Rare Steak",
    description: "Rare steak pho (Mini-$11.99 Small-$14.99 Large-$15.99)",
    price: 14.99,
    image: "",
    category: "Pho - Beef Soup"
  },
  {
    id: "30",
    name: "Rare Steak & Flank",
    description: "Rare steak and flank pho (Mini-$11.99 Small-$14.99 Large-$15.99)",
    price: 14.99,
    image: "",
    category: "Pho - Beef Soup"
  },
  {
    id: "31",
    name: "Rare Steak, Flank & Tendon",
    description: "Rare steak, flank and tendon pho (Mini-$11.99 Small-$14.99 Large-$15.99)",
    price: 14.99,
    image: "",
    category: "Pho - Beef Soup"
  },
  {
    id: "32",
    name: "Rare Steak, Flank & Tripe",
    description: "Rare steak, flank and tripe pho (Mini-$11.99 Small-$14.99 Large-$15.99)",
    price: 14.99,
    image: "",
    category: "Pho - Beef Soup"
  },
  {
    id: "33",
    name: "Rare Steak, Flank & Fat Brisket",
    description: "Rare steak, flank and fat brisket pho (Mini-$11.99 Small-$14.99 Large-$15.99)",
    price: 14.99,
    image: "",
    category: "Pho - Beef Soup"
  },
  {
    id: "34",
    name: "Beef Balls Noodle Soup",
    description: "Beef balls pho (Mini-$11.99 Small-$14.99 Large-$15.99)",
    price: 14.99,
    image: "",
    category: "Pho - Beef Soup"
  },
  {
    id: "34A",
    name: "Pho Noodle Soup",
    description: "Traditional pho noodle soup (Mini-$5.00 Small-$7.00 Large-$9.00)",
    price: 7.00,
    image: "",
    category: "Pho - Beef Soup",
    popular: true
  },

  // Soup
  {
    id: "35",
    name: "Wonton Soup",
    description: "Hoành Thánh - Traditional wonton soup",
    price: 11.00,
    image: "",
    category: "Soup"
  },
  {
    id: "36",
    name: "Beef Ball Soup",
    description: "Bò Viên - Vietnamese beef ball soup",
    price: 11.00,
    image: "",
    category: "Soup"
  },
  {
    id: "37",
    name: "Combination Porridge",
    description: "Cháo Thập Cẩm - Combination rice porridge",
    price: 11.00,
    image: "",
    category: "Soup"
  },

  // Noodle Soup
  {
    id: "38",
    name: "Combination Noodle Soup",
    description: "Hủ Tiếu - Combination noodle soup",
    price: 13.50,
    image: "",
    category: "Noodle Soup"
  },
  {
    id: "39",
    name: "Combination Wonton Noodle Soup",
    description: "Hủ Tiếu Hoành Thánh - Combination wonton noodle soup",
    price: 13.99,
    image: "",
    category: "Noodle Soup"
  },
  {
    id: "40",
    name: "Beef Ball Noodle Soup",
    description: "Hủ Tiếu Bò Viên - Beef ball noodle soup",
    price: 13.99,
    image: "",
    category: "Noodle Soup"
  },
  {
    id: "41",
    name: "Beef Stew Noodle Soup",
    description: "Hủ Tiếu Bò Kho - Beef stew noodle soup",
    price: 13.99,
    image: "",
    category: "Noodle Soup"
  },
  {
    id: "42",
    name: "Chicken Noodle Soup",
    description: "Hủ Tiếu Gà - Chicken noodle soup",
    price: 13.99,
    image: "",
    category: "Noodle Soup"
  },
  {
    id: "43",
    name: "Seafood Noodle Soup",
    description: "Hủ Tiếu Đó Diễn - Seafood noodle soup",
    price: 13.99,
    image: "",
    category: "Noodle Soup"
  },
  {
    id: "44",
    name: "Grilled Pork Noodle Soup",
    description: "Hủ Tiếu Thịt Nướng - Grilled pork noodle soup",
    price: 13.99,
    image: "",
    category: "Noodle Soup"
  },
  {
    id: "45",
    name: "BBQ Pork Noodle Soup",
    description: "Hủ Tiếu Xá Xíu - BBQ pork noodle soup",
    price: 13.99,
    image: "",
    category: "Noodle Soup"
  },
  {
    id: "45A",
    name: "Spicy Noodle Soup",
    description: "Bún bò Huế - Spicy beef noodle soup",
    price: 15.99,
    image: "",
    category: "Noodle Soup",
    popular: true
  },

  // Rice Plates
  {
    id: "46",
    name: "Combination Fried Rice",
    description: "Cơm Chiên - Combination fried rice",
    price: 13.99,
    image: "",
    category: "Rice Plates"
  },
  {
    id: "47",
    name: "Shrimp Fried Rice",
    description: "Cơm Chiên Tôm - Shrimp fried rice",
    price: 14.99,
    image: "",
    category: "Rice Plates"
  },
  {
    id: "48",
    name: "Chicken Fried Rice",
    description: "Cơm Chiên Gà - Chicken fried rice",
    price: 13.99,
    image: "",
    category: "Rice Plates"
  },
  {
    id: "49",
    name: "Thai Fried Rice / Spice",
    description: "Cơm Chiên Thái - Thai style fried rice",
    price: 14.50,
    image: "",
    category: "Rice Plates"
  },
  {
    id: "50",
    name: "Combination over Rice",
    description: "Cốm Xào Thập Cẩm - Combination stir-fry over rice",
    price: 14.99,
    image: "",
    category: "Rice Plates"
  },
  {
    id: "51",
    name: "Soy Sauce Shrimp over Rice",
    description: "Cơm Trắng Xào Tôm - Soy sauce shrimp over rice",
    price: 14.99,
    image: "",
    category: "Rice Plates"
  },
  {
    id: "52",
    name: "Soy Sauce Pork over Rice",
    description: "Cốm Xào Thịt Heo - Soy sauce pork over rice",
    price: 13.99,
    image: "",
    category: "Rice Plates"
  },
  {
    id: "53",
    name: "Shaking Beef over Rice",
    description: "Cơm Bò Lúc Lắc - Shaking beef over rice",
    price: 18.99,
    image: "",
    category: "Rice Plates",
    popular: true
  },
  {
    id: "54",
    name: "Korean Short Rib over Rice",
    description: "Korean style short rib over rice",
    price: 17.99,
    image: "",
    category: "Rice Plates"
  },
  {
    id: "62",
    name: "Rice Grilled Pork",
    description: "Cơm Thịt Nướng - Grilled pork over rice",
    price: 14.99,
    image: "",
    category: "Rice Plates",
    popular: true
  },
  {
    id: "63",
    name: "Rice Grilled Pork W/ Egg",
    description: "Cơm Thịt Nướng/ Ốp La - Grilled pork with fried egg over rice",
    price: 15.99,
    image: "",
    category: "Rice Plates"
  },
  {
    id: "64",
    name: "Rice Pork Chop",
    description: "Cơm Sườn Nướng - Grilled pork chop over rice",
    price: 14.99,
    image: "",
    category: "Rice Plates"
  },
  {
    id: "65",
    name: "Rice Pork Chop W/ Egg",
    description: "Cơm Sườn Nướng/ Ốp La - Grilled pork chop with fried egg over rice",
    price: 15.99,
    image: "",
    category: "Rice Plates"
  },
  {
    id: "66",
    name: "Huong Lan Special Rice",
    description: "Cơm Sườn Bì Chả - Huong Lan special rice with pork chop, shredded pork and eggroll",
    price: 16.99,
    image: "",
    category: "Rice Plates",
    popular: true
  },
  {
    id: "67",
    name: "Huong Lan Special Rice/Shrimp Tofu Wrapper",
    description: "Cơm Sườn Bì Chả Tàu Hủ Ky - Special rice with shrimp tofu wrapper",
    price: 18.99,
    image: "",
    category: "Rice Plates"
  },
  {
    id: "68",
    name: "Grilled Chicken Over Rice",
    description: "Cơm Gà Nướng - Grilled chicken over rice",
    price: 14.99,
    image: "",
    category: "Rice Plates"
  },

  // Vermicelli Bowl
  {
    id: "69",
    name: "Vermicelli Noodle Grilled Pork",
    description: "Bún Thịt Nướng - Grilled pork vermicelli bowl",
    price: 14.99,
    image: "",
    category: "Vermicelli Bowl",
    popular: true
  },
  {
    id: "70",
    name: "Vermicelli Noodle Grilled Pork & Eggroll",
    description: "Bún Thịt Nướng Chả Giò - Grilled pork and eggroll vermicelli bowl",
    price: 15.50,
    image: "",
    category: "Vermicelli Bowl"
  },
  {
    id: "71",
    name: "Vermicelli Noodle Grilled Pork & Shrimp",
    description: "Bún Tôm Thịt Nướng - Grilled pork and shrimp vermicelli bowl",
    price: 15.99,
    image: "",
    category: "Vermicelli Bowl"
  },
  {
    id: "72",
    name: "Vermicelli Noodle Grilled Pork & Shrimp & Eggroll",
    description: "Bún Tôm Thịt Nướng Chả Giò - Grilled pork, shrimp and eggroll vermicelli bowl",
    price: 16.99,
    image: "",
    category: "Vermicelli Bowl"
  },
  {
    id: "73",
    name: "Fine Vermicelli Noodle Shrimp Patties",
    description: "Bánh Hỏi Chạo Tôm - Fine vermicelli with shrimp patties",
    price: 16.99,
    image: "",
    category: "Vermicelli Bowl"
  },
  {
    id: "74",
    name: "Fine Vermicelli Noodle Grilled Pork",
    description: "Bánh Hỏi Thịt Nướng - Fine vermicelli with grilled pork",
    price: 16.99,
    image: "",
    category: "Vermicelli Bowl"
  },
  {
    id: "75",
    name: "Fine Vermicelli Noodle Grilled Pork & Shrimp Patties",
    description: "Bánh Hỏi Thịt Nướng Chạo Tôm - Fine vermicelli with grilled pork and shrimp patties",
    price: 17.99,
    image: "",
    category: "Vermicelli Bowl"
  },

  // Steam Rice Sheet
  {
    id: "76",
    name: "Steam Rice Sheet W/ Steam Pork & Eggroll",
    description: "Bánh Ướt Chả Lụa Chả Giò - Steam rice sheet with steamed pork and eggroll",
    price: 15.99,
    image: "",
    category: "Steam Rice Sheet",
    popular: true
  },
  {
    id: "77",
    name: "Steam Rice Sheet W/ Pork, Steam Pork & Eggroll",
    description: "Bánh Cuốn Chả Lụa Chả Giò - Steam rice sheet with pork, steamed pork and eggroll",
    price: 15.99,
    image: "",
    category: "Steam Rice Sheet"
  },

  // Pearl Drinks
  {
    id: "A1",
    name: "Mocha W/ Pearl",
    description: "Mocha Sửa - Mocha with pearl",
    price: 6.00,
    image: "",
    category: "Pearl Drinks"
  },
  {
    id: "A2",
    name: "Thai Tea",
    description: "Trà Thái - Traditional Thai tea",
    price: 6.00,
    image: "",
    category: "Pearl Drinks",
    popular: true
  },
  {
    id: "A3",
    name: "Milk Tea W/ Pearl",
    description: "Trà Sữa - Milk tea with pearl",
    price: 6.00,
    image: "",
    category: "Pearl Drinks"
  },
  {
    id: "A4",
    name: "Green Tea W/ Pearl",
    description: "Trà Xanh Sữa - Green milk tea with pearl",
    price: 6.00,
    image: "",
    category: "Pearl Drinks"
  },
  {
    id: "A5",
    name: "Red Bean W/ Pearl",
    description: "Đậu Đỏ Sữa - Red bean milk with pearl",
    price: 6.00,
    image: "",
    category: "Pearl Drinks"
  },
  {
    id: "A6",
    name: "Grass Jelly & Basil Seed W/ Pearl",
    description: "Sương Sáo Hột É - Grass jelly and basil seed with pearl",
    price: 6.00,
    image: "",
    category: "Pearl Drinks"
  },
  {
    id: "A7",
    name: "Taro Milk W/ Pearl",
    description: "Khoai Môn - Taro milk with pearl",
    price: 6.00,
    image: "",
    category: "Pearl Drinks"
  },
  {
    id: "A8",
    name: "Coconut W/ Pearl",
    description: "Nước Dừa - Coconut drink with pearl",
    price: 6.00,
    image: "",
    category: "Pearl Drinks"
  },
  {
    id: "A9",
    name: "Lychee W/ Pearl",
    description: "Trái Vải - Lychee drink with pearl",
    price: 6.00,
    image: "",
    category: "Pearl Drinks"
  },
  {
    id: "B9",
    name: "Sugarcane Drink",
    description: "Nước Mía - Fresh sugarcane juice",
    price: 6.00,
    image: "",
    category: "Pearl Drinks"
  },

  // Blended Pearl Drinks
  {
    id: "A10",
    name: "Avocado W/ Pearl",
    description: "Sinh Tố Bơ - Avocado smoothie with pearl",
    price: 7.50,
    image: "",
    category: "Blended Pearl Drinks"
  },
  {
    id: "A11",
    name: "Mocha Shake W/ Pearl",
    description: "Sinh tố Mocha - Mocha shake with pearl",
    price: 7.50,
    image: "",
    category: "Blended Pearl Drinks"
  },
  {
    id: "A12",
    name: "Thai Tea Shake W/ Pearl",
    description: "Sinh tố Trà Thái - Thai tea shake with pearl",
    price: 7.50,
    image: "",
    category: "Blended Pearl Drinks"
  },
  {
    id: "A13",
    name: "Taro W/ Pearl",
    description: "Sinh tố Khoai Môn - Taro smoothie with pearl",
    price: 7.50,
    image: "",
    category: "Blended Pearl Drinks"
  },
  {
    id: "A14",
    name: "Red Bean W/ Pearl",
    description: "Sinh tố Đậu Đỏ - Red bean smoothie with pearl",
    price: 7.50,
    image: "",
    category: "Blended Pearl Drinks"
  },
  {
    id: "A15",
    name: "Coconut W/ Pearl",
    description: "Sinh tố Dâu - Coconut smoothie with pearl",
    price: 7.50,
    image: "",
    category: "Blended Pearl Drinks"
  },
  {
    id: "A16",
    name: "Strawberry W/ Pearl",
    description: "Sinh tố Dâu - Strawberry smoothie with pearl",
    price: 7.50,
    image: "",
    category: "Blended Pearl Drinks"
  },
  {
    id: "A17",
    name: "Lychee W/ Pearl",
    description: "Sinh tố Trái Vải - Lychee smoothie with pearl",
    price: 7.50,
    image: "",
    category: "Blended Pearl Drinks"
  },
  {
    id: "A18",
    name: "Durian W/ Pearl",
    description: "Sinh tố Sầu Riêng - Durian smoothie with pearl",
    price: 7.50,
    image: "",
    category: "Blended Pearl Drinks"
  },
  {
    id: "A19",
    name: "Jackfruit W/ Pearl",
    description: "Sinh tố Mít - Jackfruit smoothie with pearl",
    price: 7.50,
    image: "",
    category: "Blended Pearl Drinks"
  },
  {
    id: "A20",
    name: "Honey Dew W/ Pearl",
    description: "Sinh tố Dưa Gang - Honeydew smoothie with pearl",
    price: 7.50,
    image: "",
    category: "Blended Pearl Drinks"
  },
  {
    id: "A21",
    name: "Mango W/ Pearl",
    description: "Sinh tố Xoài - Mango smoothie with pearl",
    price: 7.50,
    image: "",
    category: "Blended Pearl Drinks",
    popular: true
  },

  // Beverages
  {
    id: "A22",
    name: "Ice Coffee",
    description: "Cà Phê Đen Đá - Vietnamese iced black coffee",
    price: 5.50,
    image: "",
    category: "Beverages",
    popular: true
  },
  {
    id: "A23",
    name: "Hot Black Coffee",
    description: "Cà Phê Đen Nóng - Hot black coffee",
    price: 5.50,
    image: "",
    category: "Beverages"
  },
  {
    id: "A24",
    name: "Ice Milk Coffee",
    description: "Cà Phê Sữa Đá - Vietnamese iced milk coffee",
    price: 5.50,
    image: "",
    category: "Beverages",
    popular: true
  },
  {
    id: "A25",
    name: "Hot Milk Coffee",
    description: "Cà Phê Sữa Nóng - Hot milk coffee",
    price: 5.50,
    image: "",
    category: "Beverages"
  },
  {
    id: "A26",
    name: "Fresh Ice Lemonade",
    description: "Đá Chanh - Fresh iced lemonade",
    price: 5.50,
    image: "",
    category: "Beverages"
  },
  {
    id: "A27",
    name: "Fresh Orange Juice",
    description: "Cam Vắt - Fresh orange juice",
    price: 5.50,
    image: "",
    category: "Beverages"
  },
  {
    id: "A28",
    name: "Coke/Pepsi/7Up/Sprite/Dr. Pepper",
    description: "Soft drinks - Coke, Pepsi, 7Up, Sprite, Dr. Pepper",
    price: 2.50,
    image: "",
    category: "Beverages"
  }
]
