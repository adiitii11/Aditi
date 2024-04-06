export default function manifest() {
  return {
    name: "Aditi Gupta",
    short_name: "Aditi Gupta",
    description: "Aditi Gupta",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "128x128",
        type: "image/x-icon",
      },
      {
        src: "/favicon-sqaure.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/favicon-circle.ico",
        sizes: "128x128",
        type: "image/x-icon",
      },
    ],
  };
}
