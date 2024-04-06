import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aditi Gupta",
  description:
    "Explore the captivating world of Aditi, a passionate sophomore studying Mechanical Engineering at NSUT. Delve into a fusion of engineering, dance, painting, and fashion, where innovation meets artistic expression. Join her journey in unraveling the mechanics of the world, all while dancing to the rhythm of creativity and painting vibrant stories on the canvas of life.",
  themeColor: "black",
  category: "portfolio",
  keywords:
    "Aditi Gupta, Student, LinkedIn, GitHub, Website, Education, B.Tech (Mechanical), Netaji Subhas University of Technology, Class XII (CBSE), Sri Venkateshwar International School, Class X (CBSE), Leadership, Activities, Resonanz, Sponsorship Department, Enactus, SM, Social Media, Project Lead, Projects, Nalum, Marketing Head, Sniffdog, Technical, C++, Algorithm Optimization, SEO, Search Engine Optimization, SMO, Social Media Optimization, Extra-curricular, Skipping, Delhi State Rope Skipping Championship, Fine Arts, Camlin Certification",
  icons: {
    icon: "/favicon-sqaure.png",
    shortcut: "/favicon-sqaure.png",
    apple: "/favicon-sqaure.png",
  },
  openGraph: {
    title: "Aditi Gupta",
    description:
      "Explore the captivating world of Aditi, a passionate sophomore studying Mechanical Engineering at NSUT. Delve into a fusion of engineering, dance, painting, and fashion, where innovation meets artistic expression. Join her journey in unraveling the mechanics of the world, all while dancing to the rhythm of creativity and painting vibrant stories on the canvas of life.",
    url: "https://www.aditi-gupta.co.in/",
    siteName: "Aditi Gupta",
    images: [
      {
        url: "https://www.aditi-gupta.co.in/_next/image?url=%2Fhome-page.jpg&w=640&q=75",
        width: 480,
        height: 600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="nav-parent">
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <p
              style={{ color: "white", fontWeight: "bold", marginLeft: 15 }}
              className="whole"
            >
              Aditi Gupta
            </p>
            <p
              style={{ color: "white", fontWeight: "bold", marginLeft: 15 }}
              className="small"
            >
              Aditi
            </p>
            <p style={{ flex: 1, textAlign: "right", marginRight: 10 }}>
              <a className="link" href="#home">
                Home
              </a>
              <a className="link" href="#about">
                About
              </a>
              <a className="link" href="#resume">
                Resume
              </a>
            </p>
          </nav>
        </div>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
