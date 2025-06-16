# 🎨 PIXEL - Design System & Component Library

> A comprehensive design system showcasing modern UI components, color palettes, typography, and interactive elements with pixel-perfect precision.

![Design System](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.18.1-purple?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify)

**Created by [Priyanshu Chawda](https://priyanshutech.xyz)**

## 🚀 Live Demo & Repository
🌐 **Live Design System**: [Deployed on Netlify](https://pixel-design-system.netlify.app)
📱 **GitHub Repository**: [https://github.com/priyanshuchawda/pixel.git](https://github.com/priyanshuchawda/pixel.git)

## ✨ Features

### 🎨 **Design System Components**
- **Color Palette Manager** - Comprehensive color system with accessibility checks
- **Typography Playground** - Interactive font and text styling tools
- **Component Library** - Modern UI components with Shadcn/ui
- **Motion Rules** - Animation patterns and micro-interactions
- **Interactive Elements** - Buttons, forms, and navigation components

### 🛠️ **Developer Experience**
- **Export Tokens** - CSS variables and design tokens export
- **Component Playground** - Live component testing environment
- **Do's & Don'ts** - Design best practices and guidelines
- **Dark/Light Mode** - Theme switching capabilities
- **Custom Cursor** - Enhanced interaction feedback

### 🎭 **Interactive Features**
- **Glitch Effects** - Creative visual distortions
- **Scroll Animations** - Parallax and transform effects
- **Toast Notifications** - User feedback system
- **Responsive Design** - Mobile-first approach

## 🛠️ Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Shadcn/ui Components  
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Netlify (Auto-deploy from GitHub)
- **Version Control**: Git + GitHub

## 🏗️ Installation & Setup

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Local Development
```bash
# Clone the repository
git clone https://github.com/priyanshuchawda/pixel.git
cd pixel

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:8080 in your browser
```

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🚀 Deployment Guide

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Shadcn/ui Components
- **Animations**: Framer Motion
- **Deployment**: Netlify (Auto-deploy from GitHub)

### Automatic Deployment via Netlify

This project is configured for automatic deployment to Netlify via GitHub integration:

1. **GitHub Repository**: [https://github.com/priyanshuchawda/pixel.git](https://github.com/priyanshuchawda/pixel.git)
2. **Auto-deploy**: Every push to the `main` branch triggers automatic deployment
3. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

### Manual Netlify Deployment

If you want to deploy manually:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository for automatic deployments

### Environment Configuration

The project includes a `netlify.toml` file with:
- Build settings and Node.js version
- Redirect rules for SPA routing
- Environment variables configuration

### Other Deployment Options

**Vercel**:
```bash
npm install -g vercel
vercel --prod
```

**GitHub Pages**:
```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

## 🎨 Design System Components

### Color Palette
- Primary, secondary, and accent colors
- Semantic colors (success, warning, error)
- Neutral grays and backgrounds
- Accessibility-compliant contrast ratios

### Typography
- Font families and weights
- Heading hierarchy (H1-H6)
- Body text variations
- Code and monospace fonts

### Interactive Components
- Buttons with multiple variants
- Form inputs and controls
- Navigation and menu systems
- Cards and data display

### Animation System
- Page transitions
- Hover and focus states
- Loading animations
- Scroll-triggered effects

## 🎯 Use Cases

- **Design System Documentation**
- **Component Library Showcase**
- **Brand Guidelines Reference**
- **Developer Handoff Tool**
- **Design Token Management**
- **Prototyping and Testing**

## 🔧 Customization

The design system is built with customization in mind:

- **CSS Variables**: Easily modify colors and spacing
- **Tailwind Config**: Extend the design system
- **Component Props**: Configurable component variants
- **Theme System**: Dark/light mode support

## 📱 Responsive Design

- **Mobile First**: Optimized for all screen sizes
- **Breakpoint System**: Consistent responsive behavior
- **Touch Friendly**: Optimized for mobile interactions
- **Performance**: Optimized loading and animations

## 🧪 Testing & Quality

- **TypeScript**: Type safety and better DX
- **ESLint**: Code quality and consistency
- **Responsive Testing**: Cross-device compatibility
- **Accessibility**: WCAG compliant components

---

Built with ❤️ by [Priyanshu Chawda](https://priyanshutech.xyz) | Design systems that pixel-perfect!