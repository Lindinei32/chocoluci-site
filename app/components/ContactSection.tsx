// /app/components/ContactSection.tsx - VERSÃO RESPONSIVA

import Image from 'next/image';
import { FaComments, FaClock, FaMotorcycle } from 'react-icons/fa';

export default function ContactSection() {
  const whatsappNumber = "5541991392377";
  const whatsappMessage = "Olá! Vi o site da Chocoluci e gostaria de mais informações sobre as encomendas.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
  const instagramUrl = "https://www.instagram.com/chocoluci2024/";

  return (
    <section className="bg-[#F9EBEB] w-full pt-20 pb-10"> {/* Diminuído o padding inferior */}
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-bold text-[#5D4037]">Pronto para Sua Encomenda?</h2>
        <p className="text-lg text-[#795548] mt-4 max-w-2xl mx-auto">
          Entre em contato conosco e criaremos algo especial sob medida para você. Cada encomenda é única e personalizada.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          
          <div className="bg-white/70 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center justify-center backdrop-blur-sm">
            <FaComments size={32} className="text-[#5D4037]" />
            <h3 className="text-xl md:text-2xl font-semibold text-[#5D4037] mt-4">Atendimento Personalizado</h3>
            <p className="text-[#795548] mt-2">Criamos sua encomenda via chat</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 bg-[#F06292] text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 w-full">
              <FaComments />
              Iniciar Conversa
            </a>
          </div>

          <div className="bg-white/70 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center justify-center backdrop-blur-sm">
            <Image src="/Instagram.svg" alt="Ícone do Instagram" width={56} height={56} />
            <h3 className="text-xl md:text-2xl font-semibold text-[#5D4037] mt-4">Acompanhe Nossos Trabalhos</h3>
            <p className="text-[#795548] mt-2">Veja nossas novidades no Instagram</p>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 w-full">
              Visitar Perfil
            </a>
          </div>

        </div>
        
        {/* A MUDANÇA ESTÁ AQUI: Ajustes de fonte e espaçamento para mobile */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 mt-12 text-base text-[#795548] font-semibold">
          <div className="flex items-center gap-3">
            <FaClock size={20} />
            <span>Atendimento: Seg-Sex 8h às 18h</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMotorcycle size={20} />
            <span>Entregamos para Curitiba e Região</span>
          </div>
        </div>

      </div>
    </section>
  );
}