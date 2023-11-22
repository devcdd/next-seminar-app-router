import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js App",
    short_name: "Next.js App",
    description: "Next.js App",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      // {
      //   src: "/icons/pwa/android-chrome-192x192.png",
      //   sizes: "192x192",
      //   type: "image/png",
      // },
      // {
      //   src: "/icons/pwa/android-chrome-512x512.png",
      //   sizes: "512x512",
      //   type: "image/png",
      // },
      // {
      //   src: "/icons/pwa/apple-touch-icon.png",
      //   sizes: "180x180",
      //   type: "image/png",
      // },
      // {
      //   src: "/icons/pwa/mstile-150x150.png",
      //   sizes: "150x150",
      //   type: "image/png",
      // },
      {
        src: "/icons/pwa/icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icons/pwa/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/icons/pwa/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/icons/pwa/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/icons/pwa/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/icons/pwa/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "/icons/pwa/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/pwa/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icons/pwa/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
