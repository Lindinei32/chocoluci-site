// /app/components/Header.tsx - VERSÃO CORRIGIDA

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    /*
      AS MUDANÇAS ESTÃO AQUI:
      - sticky top-0 z-50: Faz o header ficar "grudado" no topo da tela.
      - bg-opacity-80 backdrop-blur-sm: Cria o efeito de vidro fosco semi-transparente.
      - py-1: Diminui a altura do header para ficar mais delicado.
    */
    <header className="bg-[#5D4037] bg-opacity-80 backdrop-blur-sm shadow-lg sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 flex justify-center items-center py-1">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Chocoluci Chocolates Logo"
            width={100} // Tamanho ajustado para um header mais compacto
            height={100}
            style={{ objectFit: 'contain' }}
            priority 
          />
        </Link>
      </div>
    </header>
  );
}