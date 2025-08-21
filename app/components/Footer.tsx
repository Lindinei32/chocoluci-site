// /app/components/Footer.tsx - VERSÃO FINAL COM CORES AJUSTADAS

import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // 1. A cor de texto principal agora é 'text-stone-200' para todo o footer
    <footer className="bg-[#93501f] w-full pt-16 pb-8 text-stone-200">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">

        <div className="mb-4">
          <Image
            src="/logo.png"
            alt="Chocoluci Logo"
            width={120}
            height={120}
            className="rounded-full bg-white p-2 shadow-lg"
          />
        </div>

        {/* O texto 'Chocoluci' e o slogan herdam a cor 'text-stone-200' */}
        <h3 className="text-3xl font-bold">Chocoluci</h3>
        <p className="mt-2 text-lg">
          Doces artesanais feitos com Amor
        </p>

        <hr className="w-full max-w-lg my-8 border-white/20" />

        <div className="text-sm">
          <p className="flex items-center justify-center gap-2">
            Desenvolvido  
            {/* 2. O ícone de coração agora tem a classe 'text-red-500' */}
            <FaHeart className="text-red-500" /> 
             
            <a 
              href="https://github.com/Lindinei32" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              por Lindinei Sales
            </a>
          </p>
          <p className="mt-2">
            &copy; {currentYear} Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}



































  
