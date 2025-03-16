# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Portfolio Website

A personal portfolio website built with React and React Router.

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── placeholder.jpg
│   │   └── projects/
│   │       ├── project1/
│   │       │   ├── cover.jpg
│   │       │   ├── image1.jpg
│   │       │   ├── image2.jpg
│   │       │   └── image3.jpg
│   │       ├── project2/
│   │       └── ...
├── src/
│   ├── components/
│   │   ├── Project.jsx
│   │   └── ProjectPage.jsx
│   ├── App.jsx
│   ├── App.css
│   └── ...
└── scripts/
    └── create-project-folders.sh
```

## Managing Images

### Image Structure

Each project has:
- A cover image: Used on the home page
- Multiple project images: Displayed in the gallery section of project pages

### Adding Real Images

1. Replace placeholder files in the `public/images/projects/project{id}/` folders with your actual images
2. Maintain the same file names (cover.jpg, image1.jpg, etc.) or update the references in the code
3. Make sure your images are optimized for the web (compress them to reduce file size)

### Image Optimization

For best performance on GitHub Pages:
- Keep image sizes under 500KB
- Use JPG for photos, PNG for graphics with transparency
- Consider using tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images

## Deploying to GitHub Pages

### Setup

1. Install gh-pages:
   ```bash
   npm install --save gh-pages
   ```

2. Add these fields to your package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update your vite.config.js (if using Vite):
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // Replace with your repo name
     // ...other config
   })
   ```

### Deploy

Run the deploy command:
```bash
npm run deploy
```

### Custom Domain Setup

1. Purchase a domain from a domain registrar
2. Create a file named `CNAME` in the `public/` folder with your domain:
   ```
   yourwebsite.com
   ```
3. Set up DNS with your domain provider:
   - Add an A record pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `yourusername.github.io`
4. Enable custom domain in your GitHub repository settings

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Create project folders and placeholders
./scripts/create-project-folders.sh

# Build for production
npm run build
```
