import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import {lora} from './lora_font'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alamny - Technology Services',
  description: 'Empowering businesses and students with innovative technology solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lora.className}>
      <body className={`font-lora min-h-screen transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
