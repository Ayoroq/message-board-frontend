# Notice Board Frontend

![Notice Board App](/public/NoticeBoard.jpeg)

A modern React frontend for the notice board application, built with Vite and featuring smooth animations.

🔗 **[Live Demo](https://notice-boards.vercel.app/)**

> **Note:** This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum, focusing on full-stack web development with React and Node.js.

⚠️ **Important:** This is only the frontend part of the application. You'll also need to set up and run the backend server for full functionality. Make sure to configure the backend API and connect it to this frontend using the `VITE_API_URL` environment variable.

## Features

- **React 19** with modern hooks and components
- **React Router** for client-side navigation
- **GSAP animations** for smooth interactions
- **Lenis** for enhanced smooth scrolling
- **Vite** for fast development and building
- **ESLint** for code quality

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.jsx        # Notice card component
│   ├── ErrorPage.jsx   # Error handling component
│   ├── Footer.jsx      # Footer component
│   └── Navbar.jsx      # Navigation component
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   └── New.jsx         # Create new notice page
├── routes/             # Routing configuration
│   └── Route.jsx       # Route definitions
└── styles/             # CSS modules and styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your backend API URL:
   ```
   VITE_API_URL=http://localhost:4000
   ```

4. **Backend Setup Required:**
   - This frontend requires a backend API to function
   - Set up the backend server (separate repository/directory)
   - Ensure the backend is running before starting the frontend
   - Update `VITE_API_URL` to match your backend server URL

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Dependencies

### Core
- **React 19** - UI library
- **React DOM** - DOM rendering
- **React Router** - Client-side routing

### Animation & UX
- **GSAP** - High-performance animations
- **Lenis** - Smooth scrolling library

### Development
- **Vite** - Build tool and dev server
- **ESLint** - Code linting and formatting

## Contributing

1. Follow the existing code style
2. Test your changes thoroughly
3. Update documentation as needed