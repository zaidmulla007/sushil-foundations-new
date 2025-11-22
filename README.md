# Sushil Foundation Website

A beautiful, modern, and fully animated website for the Sushil Foundation - "Recharge Your Life"

## Features

- **Modern Design**: Clean and professional UI with a gradient color scheme (Blue, Golden, Red)
- **Smooth Animations**: Eye-catching animations using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Sections**:
  - Home (Hero Section with statistics)
  - About (Mission, values, and foundation information)
  - Our Services (5 core services with images)
  - Benefits (Why choose us section)
  - Donations (Multiple donation options and payment methods)
  - Careers (Current job openings)
  - Contact (Contact form and information)
  - Footer (Quick links and social media)

## Tech Stack

- **Framework**: Next.js 16.0.3 with Turbopack
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Unsplash (beautiful stock photos)

## Getting Started

1. Install dependencies (if not already done):
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Logo

Your logo is located at `/public/images/sushil.png` and features the blue, golden, and red colors throughout the website theme.

## Navigation

The navbar includes smooth scrolling to all sections:
- Home
- About
- Our Services
- Benefits
- Donations
- Careers
- Contact

## Customization

### Colors
The website uses a gradient color scheme based on your logo:
- Blue: `#2563eb` to `#0ea5e9`
- Amber/Golden: `#f59e0b` to `#fbbf24`
- Red: `#dc2626` to `#ec4899`

### Images
All images are sourced from Unsplash. To replace with your own:
1. Add images to `/public/images/`
2. Update the `src` attributes in the component files

### Content
Edit the component files in `/app/components/` to update:
- Services descriptions
- Contact information
- Donation amounts
- Job openings
- And more...

## Build for Production

```bash
npm run build
npm start
```

## Features Implemented

✅ Animated navbar with smooth scrolling
✅ Hero section with gradient background and floating animations
✅ Statistics cards with icons
✅ About section with mission and values
✅ Services grid with hover effects
✅ Benefits section with multiple feature cards
✅ Donation cards with popular option highlight
✅ Custom donation form with payment methods
✅ Careers section with job listings
✅ Contact form with social media links
✅ Footer with quick links and information
✅ Smooth scroll behavior
✅ Custom scrollbar with gradient colors
✅ Fully responsive design
✅ Framer Motion animations throughout

## License

© 2025 Sushil Foundation. All rights reserved.