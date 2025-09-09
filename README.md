# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Ridr - Motorcycle Odometer Tracker

Track your motorcycle rides and odometer readings with this React application.

## Deployment

This app is deployed to GitHub Pages at: https://alexzaharia24.github.io/ridr/

### Automatic Deployment

The app automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### Manual Deployment

To manually deploy the app:

1. Install dependencies: `npm install`
2. Build and deploy: `npm run deploy`

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
