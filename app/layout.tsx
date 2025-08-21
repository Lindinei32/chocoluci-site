// /app/layout.tsx

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google'; // Fonte correta
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'] 
});

export const metadata = {
  title: 'Chocoluci Chocolates',
  description: 'Cestas, Chocolates e Panetones Artesanais',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR">
      {/* Classe da fonte e cor de fundo corretas */}
      <body className={`${montserrat.className} bg-[#F9EBEB] text-[#5D4037]`}>
        <main>{children}</main>
      </body>
    </html>
  );
}