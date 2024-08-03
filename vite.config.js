import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'





const manifestForPlugin = {
   registerTypes: "prompt",
   includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable-icon.png'],
   manifest: {
      name: "FlyoFiles",
      short_name: "FlyoFiles",
      description: "File Sharing App",
      icons: [
         {
            src: "/logo192.png",
            sizes: "192x192",
            type: "image/png",
         },
         {
            src: "/logo512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "favicon"
         },
         {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon"
         },
         {
            src: "/logo144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any"
         },
         {
            src: "/logo256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "icon"
         },
         {
            src: "/logo384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable"
         }
      ],
      theme_color: "#2196f3",
      background_color: "#2196f3",
      display: "standalone",
      scope: "/",
      start_url: "/"
   }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
})