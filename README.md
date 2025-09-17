# Huong Lan Restaurant Website

A modern, responsive restaurant website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Built with shadcn/ui components for a polished look
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized with Next.js 14 App Router
- **Accessibility**: WCAG compliant components and navigation

## Pages

- **Homepage**: Hero section, about us, and featured menu items
- **Menu**: Filterable menu with categories (Appetizers, Main Courses, Desserts, Drinks)
- **Reservations**: Online reservation form with date/time selection
- **Gallery**: Photo gallery with food, interior, and exterior images
- **Contact**: Contact information and embedded Google Maps

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Images**: Next.js Image component with Unsplash integration

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navbar and footer
│   ├── page.tsx           # Homepage
│   ├── menu/page.tsx      # Menu page
│   ├── reservations/page.tsx # Reservations page
│   ├── gallery/page.tsx   # Gallery page
│   └── contact/page.tsx   # Contact page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   └── footer.tsx        # Footer component
├── lib/                  # Utilities and data
│   ├── utils.ts          # Utility functions
│   ├── menu-data.ts      # Menu items data
│   └── gallery-data.ts   # Gallery images data
└── public/               # Static assets
```

## Key Features

### Menu System
- Categorized menu items (Appetizers, Main Courses, Desserts, Drinks)
- Popular item indicators
- Responsive card layout with images
- Filterable by category using tabs

### Reservation System
- Form validation with React Hook Form
- Date picker with calendar component
- Time slot selection
- Guest count selection
- Special requests field
- Toast notifications for success/error

### Gallery
- Responsive grid layout
- Image dialog for full-size viewing
- Categorized images (Food, Interior, Exterior)
- Hover effects and smooth transitions

### Contact Page
- Contact information cards
- Embedded Google Maps
- Social media links
- Accessibility information
- Quick action buttons

## Customization

### Menu Items
Edit `lib/menu-data.ts` to add, remove, or modify menu items:

```typescript
export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Item Name",
    description: "Item description",
    price: 12.95,
    image: "image-url",
    category: "Appetizers",
    popular: true
  }
]
```

### Gallery Images
Edit `lib/gallery-data.ts` to manage gallery images:

```typescript
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Image Title",
    description: "Image description",
    image: "image-url",
    category: "food" // "food" | "interior" | "exterior"
  }
]
```

### Styling
The project uses Tailwind CSS with custom color scheme. Main colors:
- Primary: Orange/Red gradient theme
- Background: Light gray (#f9fafb)
- Text: Dark gray (#111827)

## Deployment

The project is ready for deployment on Vercel, Netlify, or any platform that supports Next.js.

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## License

This project is created for demonstration purposes. Feel free to use and modify as needed.
