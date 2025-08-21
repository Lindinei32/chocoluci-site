// /app/components/WhyUsSection.tsx - VERSÃO RESPONSIVA

import { FaCheck, FaHeart, FaStar, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const features = [
  'Produtos 100% artesanais',
  'Ingredientes premium selecionados',
  'Personalização completa disponível',
  'Entrega para todo o Brasil',
  'Embalagens exclusivas e elegantes',
];

const stats = [
  { icon: <FaHeart />, value: '1000+', label: 'Clientes Satisfeitos' },
  { icon: <FaStar />, value: '15+', label: 'Sabores Exclusivos' },
  { icon: <FaUsers />, value: '500+', label: 'Eventos Especiais' },
  { icon: <FaCalendarAlt />, value: '10', label: 'Anos de Experiência' },
];

export default function WhyUsSection() {
  return (
    <section className="bg-[#F9EBEB] w-full py-20">
      {/* Adicionado padding horizontal (px-4) para garantir espaço nas bordas em telas pequenas */}
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-[#5D4037]">
              Por que Escolher a Chocoluci?
            </h2>
            <p className="text-[#795548] mt-4">
              Há mais de 10 anos criando momentos especiais através de doces únicos e personalizados. Cada produto é feito com ingredientes selecionados e muito carinho.
            </p>
            
            
            <ul className="mt-6 space-y-3 max-w-md mx-auto lg:mx-0">
              {features.map((feature) => (
                // 'justify-start' garante que o texto e o ícone fiquem alinhados à esquerda.
                <li key={feature} className="flex items-center justify-start text-left">
                  <FaCheck className="text-pink-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-[#795548]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/70 rounded-2xl shadow-lg p-4 text-center backdrop-blur-sm">
                <div className="text-3xl md:text-4xl text-[#5D4037] inline-block mb-2 text-pink-500">
                  {stat.icon}
                </div>
                {/* Tamanho da fonte ajustado para telas pequenas e grandes */}
                <p className="text-3xl md:text-4xl font-bold text-[#5D4037]">{stat.value}</p>
                <p className="text-xs md:text-sm text-[#795548] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}