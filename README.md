# ALX Listing App

A foundational Airbnb clone listing page built with Next.js, TypeScript, and Tailwind CSS. This project serves as the starting point for building a clean, scalable, and responsive property listing interface.



## 🧾 Project Description

The **ALX Listing App** is the first milestone in developing a full Airbnb-style property listing page. The goal of this milestone is to scaffold the project with:

- A properly structured Next.js app (using the Pages Router)
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for consistent code quality

This setup prepares the app to scale efficiently as more components and features are added.

> **Figma Reference:**  
> The designs and assets for this project are based on this Figma file:  
> [Project Airbnb on Figma](https://www.figma.com/design/E2BRqdPcKkrnX6hLGPto8Z/Project-Airbnb?node-id=0-1&p=f&t=EPwyLbNijs95vDKm-0)



## 📁 Project Structure

The project is organized as follows:

``` bash
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx        # Reusable UI component to display property information
│       └── Button.tsx      # Reusable button used across the app for interactions
├── constants/
│   └── index.ts            # Centralized constants such as config, URLs, and UI text
├── interfaces/
│   └── index.ts            # TypeScript interfaces (e.g., CardProps, ButtonProps)
├── pages/
│   ├── _app.tsx            # Global wrapper, imports styles/globals.css
│   └── index.tsx           # Home page entry point
├── public/
│   └── assets/             # Static assets (images, SVGs, etc.)
├── styles/
│   └── globals.css         # Tailwind CSS directives only
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.mjs      # PostCSS configuration
```

## How to Run the Project Locally
**1. Clone the Repository**

``` bash
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app
```

**2. Install Dependencies**
``` bash
npm install
```

**3. Start the development server**
``` bash
npm run dev
```
Visit http://localhost:3000 in your browser to view the app.