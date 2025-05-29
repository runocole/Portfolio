# Portfolio Website - Naomi Cole

A modern, responsive portfolio website built with React and Tailwind CSS. This portfolio features smooth animations, a horizontal project carousel, and a beautiful baby pink and white color palette on a black background.

## Features

- Responsive design that works on all device sizes
- Beautiful animations using Framer Motion
- Interactive UI elements with hover effects
- Project carousel with horizontal swipe functionality
- Contact form with validation
- Dark theme with baby pink accents

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone <your-repo-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Customization

### Personal Information

To personalize this portfolio:

1. Replace the placeholder text in each component with your own information.
2. Update the links to your social media profiles and projects.
3. Replace the placeholder image (`src/assets/placeholder-profile.jpg`) with your own photo.

### Styling

The portfolio uses Tailwind CSS for styling. You can customize colors and styles in:

- `tailwind.config.js` - For theme settings like colors and fonts
- `src/index.css` - For global styles and custom CSS classes
- `src/App.css` - For additional custom animations and effects

### Projects

Update the projects in the `Projects.js` component by modifying the `projects` array with your own project information.

## Deployment

This portfolio can be deployed to platforms like GitHub Pages, Netlify, or Vercel.

### Deploy to Netlify

1. Create an account on [Netlify](https://www.netlify.com/).
2. Push your project to a GitHub repository.
3. In Netlify, click "New site from Git" and select your repository.
4. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click "Deploy site" and wait for the deployment to finish.

### Deploy to GitHub Pages

1. Add the GitHub Pages dependency:
   ```
   npm install --save gh-pages
   ```

2. Add the following scripts to your `package.json` file:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

3. Add a homepage property to your `package.json` file:
   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```

4. Deploy the site:
   ```
   npm run deploy
   ```

## License

This project is licensed under the MIT License.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Slick](https://react-slick.neostack.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
