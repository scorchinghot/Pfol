import '../styles/globals.scss';
import { Metadata } from 'next';
import NavBar from './home/NavBar';

export const metadata: Metadata = {
  metadataBase: new URL("https://pfol.vercel.app"),
  title: "Pfol | Portfolio of Creative Work & Web Projects",
  description:
    "Pfol is the digital portfolio showcasing projects and creative solutions in modern web development and design.",
  applicationName: "Pfol",
  robots: "index, follow",
  authors: [{ name: "Pfol" }],
  creator: "Pfol Studio",
  publisher: "Pfol",
  alternates: {
    canonical: "https://pfol.vercel.app",
  },
  keywords:
    "portfolio website, web developer portfolio, creative portfolio, personal site, frontend developer, Next.js portfolio, UI/UX design, modern web design, interactive portfolio, digital design",
  openGraph: {
    title: "Pfol | Portfolio of Creative Work & Web Projects",
    description:
      "Explore web development projects, design work, and creative experiments.",
    url: "https://pfol.vercel.app",
    siteName: "Pfol",
    images: [
      {
        url: "/og.png", 
        width: 1200,
        height: 630,
        alt: "Pfol – Creative Portfolio of Web Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pfol | Personal Portfolio of a Web Developer",
    description:
      "Showcasing creative coding projects, responsive UI design, and modern web development. Built with Next.js and love for detail.",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black border-8 md:border-[30px] border-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
