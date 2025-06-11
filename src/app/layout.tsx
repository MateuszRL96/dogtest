import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hodowla Psów",
  description: "Profesjonalna hodowla psów rasowych",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-warm-gradient">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-gray-900 text-white py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-center md:text-left">
                  <p className="text-sm text-gray-300">
                    © {new Date().getFullYear()} Hodowla Psów. Wszelkie prawa zastrzeżone.
                  </p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm text-gray-300">
                    Strona stworzona przez{' '}
                    <Link 
                      href="https://mkcup2.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300 transition duration-200"
                    >
                      Mateusz Kulec
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
