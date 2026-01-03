# Native Tray Website

A cultural, warm, and elegant website for the Native Tray restaurant brand, built with React, TypeScript, and Tailwind CSS.

## Features
- **Responsive Design**: Optimized for Mobile, Tablet, and Desktop.
- **Routing**: Client-side routing with React Router.
- **Data Driven**: Menus, Locations, and Events powered by JSON files in `src/data`.
- **SEO Ready**: Basic SEO metadata for each page using `react-helmet-async`.
- **Contact Form**: Functional contact form with validation.

## Tech Stack
- React 18
- Vite
- TypeScript
- Tailwind CSS
- React Router DOM
- Vitest (Testing)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Run Tests**
   ```bash
   npm test
   ```

## Project Structure
- `src/components`: UI and Layout components.
- `src/data`: JSON data files for dynamic content.
- `src/pages`: Page components.
- `src/App.tsx`: Main router configuration.

## Customization
- **Colors**: Edit `tailwind.config.js` to change the `primary`, `secondary`, and `accent` colors.
- **Content**: Update the JSON files in `src/data` to modify the menu, locations, or events.
