// /app/layout.tsx - VERSÃO CORRIGIDA

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'] 
});

export const metadata = {
  title: 'Chocoluci Chocolates',
  description: 'Cestas, Chocolates e Panetones Artesanais',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* 
        A MUDANÇA ESTÁ AQUI:
        - bg-[#F9EBEB]: Define o fundo rosa claro para TODA a página.
        - text-[#5D4037]: Define a cor de texto padrão como o marrom escuro.
      */}
      <body className={`${montserrat.className} bg-[#F9EBEB] text-[#5D4037]`}>
        <main>{children}</main>
      </body>
    </html>
  );
}