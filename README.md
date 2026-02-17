# 🌌 Anti Portfolio - Tabish Arshad

A premium 3D portfolio website built with Next.js, featuring an immersive space theme, glassmorphism UI, and a powerful admin panel for project management.

## ✨ Features

- 🎨 **Modern Design**: Glassmorphism UI with custom scrollbar
- 🌟 **3D Background**: Interactive Three.js starfield animation
- 📱 **Fully Responsive**: Optimized for all devices
- ⚡ **High Performance**: Optimized rendering and smooth animations
- 🔐 **Admin Panel**: Manage projects, personal info, and achievements
- 📄 **CV Download**: Integrated resume download functionality
- 🎭 **Smooth Animations**: GSAP and Framer Motion powered

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.6 with Turbopack
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP, Framer Motion
- **3D Graphics**: Three.js
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/anti-portfolio.git

# Navigate to project directory
cd anti-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🔑 Admin Panel

Access the admin panel at `/admin`

**Default Password**: `Mabish@155`

### Admin Features:
- ✏️ Edit personal information (name, bio, CV link, social links)
- 📁 Add, edit, and delete projects
- 🏷️ Manage project technologies and features
- 🔗 Update project links and metadata
- 💾 Real-time data persistence

## 📁 Project Structure

```
anti-portfolio/
├── app/
│   ├── admin/           # Admin panel page
│   ├── api/             # API routes
│   ├── projects/        # Project detail pages
│   ├── globals.css      # Global styles
│   └── layout.tsx       # Root layout
├── components/
│   ├── sections/        # Page sections
│   ├── Background.tsx   # 3D background
│   └── ScrollAnimations.tsx
├── data/
│   └── portfolio.json   # Portfolio data
├── lib/
│   └── data.ts         # Data utilities
└── public/             # Static assets (CV, images)
```

## 🎨 Customization

### Update Personal Info:
1. Go to `/admin`
2. Open "Identity Core" section
3. Update your details
4. Click "Sync"

### Add Projects:
1. Go to `/admin`
2. Click "New" button
3. Fill in project details
4. Click "Sync" to save

### Update CV:
1. Place your PDF in `public/` folder
2. Update CV URL in Admin Panel → Identity Core
3. Click "Sync"

## 🌐 Deployment

This project is optimized for **Vercel** deployment.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

Quick deploy:
```bash
vercel
```

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 👤 Author

**Tabish Arshad**
- GitHub: [@tabish-arshad](https://github.com/tabish-arshad)
- LinkedIn: [Tabish Arshad](https://www.linkedin.com/in/tabish-arshad-061535281/)
- Email: tabish.arshad14@gmail.com

---

Built with ❤️ using Next.js and Three.js
