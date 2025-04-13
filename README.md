# SvelteKit Supabase Bootstrap Template

A modern, responsive web application template built with SvelteKit 5, Supabase, and Bootstrap. This template provides a solid foundation for building web applications with authentication, dashboard layouts, and responsive design.

![Version](https://img.shields.io/badge/version-0.0.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Svelte](https://img.shields.io/badge/SvelteKit-5.0.0-orange)

## 🚀 Features

- **SvelteKit 5**: Utilizes the latest SvelteKit with runes for state management
- **Supabase Integration**: Ready-to-use authentication flow with Supabase (commented out for template use)
- **Bootstrap UI**: Beautiful responsive UI based on Bootstrap
- **Authentication**: Complete sign-in flow with loading states and toast notifications
- **Dashboard Layout**: Pre-built dashboard layout with header, sidebar, and footer components
- **Toast Notifications**: Integrated toast notifications using svelte-french-toast
- **TypeScript**: Full TypeScript support for better development experience
- **Form Handling**: Server actions for form submissions with proper loading states
- **Modular Structure**: Well-organized project structure for scalability

## 📋 Prerequisites

- Node.js (v18 or newer)
- pnpm (recommended) or npm

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sveltekit-supabase-bootstrap-temp.git
cd sveltekit-supabase-bootstrap-temp
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```text
sveltekit-supabase-bootstrap-temp/
├── src/
│   ├── lib/
│   │   ├── images/          # Image assets
│   │   └── sections/        # Layout sections (header, aside, footer)
│   ├── routes/
│   │   ├── (app)/           # Protected routes (requires authentication)
│   │   │   └── dashboard/   # Dashboard page
│   │   └── (auth)/          # Authentication routes
│   │       ├── sign-in/     # Login page
│   │       └── sign-out/    # Logout functionality
│   └── app.html             # Main HTML template
├── static/                  # Static assets (CSS, JS, images)
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## 🔐 Authentication

The template includes a complete authentication flow using Supabase (commented out for template purposes). The authentication system includes:

1. Email/password login
2. Form validation
3. Loading states during authentication
4. Toast notifications for success/error states
5. Remember me functionality
6. Server-side form handling using SvelteKit actions

To implement Supabase authentication:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Add your Supabase URL and anon key to `.env` file:

```env
PUBLIC_SUPABASE_URL=your-supabase-url
PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

3. Uncomment the Supabase authentication code in the sign-in page server action.

## 🖥️ Dashboard

The template includes a pre-built dashboard layout with:

- Responsive header with notifications and user profile
- Sidebar navigation
- Main content area
- Footer
- Various card components and widgets

## 🎨 Customization

### Styling

The template uses Bootstrap for styling. You can customize the appearance by:

1. Modifying the Bootstrap variables in the SCSS files
2. Adding custom CSS in the static/css directory
3. Updating component styles directly in the Svelte files

### Components

The template is built with modularity in mind. You can:

1. Add new components in the `src/lib/components` directory
2. Modify existing layout sections in `src/lib/sections`
3. Create new routes in the `src/routes` directory

## 🚀 Deployment

To build the application for production:

```bash
pnpm build
```

You can preview the production build with:

```bash
pnpm preview
```

For deployment, SvelteKit supports various adapters:

- Vercel: `@sveltejs/adapter-vercel`
- Netlify: `@sveltejs/adapter-netlify`
- Node.js: `@sveltejs/adapter-node`
- Static: `@sveltejs/adapter-static`

Install the appropriate adapter and update the `svelte.config.js` file accordingly.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [SvelteKit](https://kit.svelte.dev/)
- [Supabase](https://supabase.com/)
- [Bootstrap](https://getbootstrap.com/)
- [svelte-french-toast](https://github.com/kbrgl/svelte-french-toast)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
