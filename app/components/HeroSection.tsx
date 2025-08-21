// /app/components/HeroSection.tsx - VERSÃO FINAL (COM LOGO MAIOR)

import Image from 'next/image';
import { FaShoppingBasket } from 'react-icons/fa';

export default function HeroSection() {
  const whatsappNumber = "5541991392377";
  const whatsappMessage = "Olá! Gostaria de fazer uma encomenda.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="bg-[#F9EBEB] w-full py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">

        {/* Logo da Chocoluci (AGORA MAIOR) */}
        <div className="mb-8"> {/* Margem inferior aumentada para mb-8 */}
          <Image
            src="/logo.png"
            alt="Chocoluci Logo"
            width={220}  // <-- TAMANHO AUMENTADO DE 160 PARA 220
            height={220} // <-- TAMANHO AUMENTADO DE 160 PARA 220
            className="rounded-full shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-[#5D4037] max-w-3xl leading-tight">
          Doces Artesanais que Encantam o Coração
        </h1>

        <p className="text-lg text-[#795548] mt-4 max-w-2xl">
          Chocolates exclusivos, cestas personalizadas e doces especiais para tornar seus momentos ainda mais doces.
        </p>

        <div className="flex justify-center mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5D4037] text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <FaShoppingBasket />
            Faça Sua Encomenda
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-12 text-[#795548]">
          <span className="flex items-center gap-2 font-bold">
            <span className="h-2 w-2 bg-[#5D4037] rounded-full "></span>
            Produtos Artesanais
          </span>
          <span className="flex items-center gap-2 font-bold">
            <span className="h-2 w-2 bg-[#5D4037] rounded-full"></span>
            Encomendas Personalizadas
          </span>
          <span className="flex items-center gap-2 font-bold">
            <span className="h-2 w-2 bg-[#5D4037] rounded-full"></span>
            Entrega para  Curitiba e toda Região Metropolitana 
          </span>
        </div>
        
      </div>
    </section>
  );
}