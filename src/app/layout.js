import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "../../components/Navigation";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Aditi Gupta",
  description:
    "A Mechanical Engineer at Netaji Subhas University of Technology, exploring my interest in various fields.",
  generator: "Next.js",
  applicationName: "Aditi Gupta",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Aditi",
    "NSUT",
    "Engineer",
    "Gupta",
    "Netaji Subhas University of Technology",
    "DIT",
    "NSIT",
  ],
  authors: [{ name: "Aditi Gupta", url: "https://www.aditi-gupta.co.in" }],
  creator: "Aditi Gupta",
  publisher: "Aditi Gupta",
  openGraph: {
    title: "Aditi Gupta",
    description:
      "A Mechanical Engineer at Netaji Subhas University of Technology, exploring my interest in various fields.",
    url: "https://www.aditi-gupta.co.in",
    siteName: "Aditi Gupta",
    images: [
      {
        url: "/static/logo-square.svg",
        width: 500,
        height: 500,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditi Gupta",
    description:
      "A Mechanical Engineer at Netaji Subhas University of Technology, exploring my interest in various fields.",
    images: ["https://www.aditi-gupta.co.in/static/logo-square.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  );
}
