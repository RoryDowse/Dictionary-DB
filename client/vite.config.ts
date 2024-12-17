import { defineConfig } from "vite"; // import function to define and validate configuration options
import react from "@vitejs/plugin-react"; // plugin to enable React and JSX/TSX support

// https://vitejs.dev/config/
export default defineConfig({ // configuration is exported to be used by Vite to apply setting
  plugins: [react()], // adds React plugin
  build: {
    outDir: "dist", // specifies the output directory - running vite build will generate files in this directory
  },
  server: { // customizes the development server
    port: 3000, // specifies the dev server port
    open: true, // automatically opens the browser when the server starts
    proxy: { // sets up proxy for API requests
      "/graphql": { // redirects requests to the GraphQL endpoint
        target: "http://localhost:3001", // specifies the target URL
        secure: false, // allows requests to be sent to HTTP instead of HTTPS
        changeOrigin: true, // changes the origin of the request
      },
    },
  },
});
