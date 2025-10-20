# AskNova - Next.js + Aceternity UI

A modern Next.js application integrated with Aceternity UI components, featuring smooth animations and beautiful UI elements.

## 🚀 Features

- ✅ **Next.js 15** - Latest version with App Router
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Aceternity UI Components** - Beautiful, pre-built components
- ✅ **Framer Motion** - Smooth animations
- ✅ **Dark Mode Ready** - Built-in dark mode support

## 📦 Installed Dependencies

```json
{
  "next": "^15.5.6",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "typescript": "^5.9.3",
  "tailwindcss": "^4.1.14",
  "framer-motion": "^12.23.24",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.1"
}
```

## 🛠️ Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
AskNova/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── components/
│   │   └── ui/
│   │       └── moving-border.tsx # Aceternity UI component
│   └── lib/
│       └── utils.ts             # Utility functions (cn helper)
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies
```

## 🎨 Adding More Aceternity UI Components

To add more components from [Aceternity UI](https://ui.aceternity.com):

1. Visit the [Aceternity UI Components](https://ui.aceternity.com/components) page
2. Choose a component you like
3. Copy the component code
4. Create a new file in `src/components/ui/`
5. Paste the component code
6. Import and use it in your pages

### Example: Adding a New Component

```typescript
// src/components/ui/your-component.tsx
"use client";
import { cn } from "@/lib/utils";
// ... paste component code here

// src/app/page.tsx
import { YourComponent } from "@/components/ui/your-component";
```

## 🎯 Utility Helper

The `cn()` utility function in `src/lib/utils.ts` helps merge Tailwind classes efficiently:

```typescript
import { cn } from "@/lib/utils";

<div className={cn("base-class", condition && "conditional-class")} />
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Aceternity UI Components](https://ui.aceternity.com/components)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)

## 🎨 Customization

### Tailwind Configuration

Edit `tailwind.config.ts` to customize colors, animations, and more:

```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    },
    animation: {
      // Add custom animations
    }
  }
}
```

### Dark Mode

Dark mode is enabled by default. Toggle it by adding the `dark` class to the `<html>` element.

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Built with ❤️ using Next.js and Aceternity UI
