// /app/components/SpecialtyCard.tsx - VERSÃO COM PONTOS ALINHADOS

'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Specialty } from '@/app/data/specialties';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const emojiMap: { [key: string]: React.ReactNode } = {
  'Cestas Gourmet': <span className='text-4xl'>🧺</span>,
  'Chocolates Artesanais': <span className='text-4xl'>🍫</span>,
  'Ovos de Páscoa': <span className='text-4xl'>🥚</span>,
  Panetones: <span className='text-4xl'>🍰</span>,
};

type SpecialtyCardProps = {
  specialty: Specialty;
};

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ specialty }) => {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000 + Math.random() * 1000, stopOnInteraction: false, playOnInit: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      autoplay.current.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      autoplay.current.reset();
    }
  }, [emblaApi]);

  const whatsappNumber = '5541991392377';
  const whatsappMessage = `Olá! Tenho interesse em '${specialty.title}'. Gostaria de fazer uma encomenda.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage,
  )}`;
  const buttonClass = 'bg-[#F06292] hover:bg-[#E91E63]';

  return (
    <div className='bg-white/70 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center backdrop-blur-sm h-full'>
      <div className='flex flex-col items-center gap-2 mb-4'>
        {emojiMap[specialty.title]}
        <FaHeart size={20} className='text-pink-400' />
      </div>

      <h3 className='text-2xl font-bold text-[#5D4037]'>{specialty.title}</h3>
      <p className='text-[#795548] mt-2 text-sm flex-grow font-semibold '>{specialty.description}</p>

      <ul className='text-left text-sm text-[#795548] mt-4 space-y-2 w-full font-semibold'>
        {specialty.features.map((feature: string) => (
          <li key={feature} className='flex items-center'>
            {/* O 'mt-1' foi removido do span pois não é mais necessário */}
            <span className='text-pink-400 mr-2'>&#9679;</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className='relative w-full h-64 my-8 overflow-hidden rounded-lg group/carousel' ref={emblaRef}>
        <div className='flex h-full'>
          {specialty.images.map((imgSrc: string, index: number) => (
            <div className='relative flex-none w-full h-full' key={index}>
              <Image
                src={imgSrc}
                alt={`${specialty.title} - imagem ${index + 1}`}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>
          ))}
        </div>

        <button
          onClick={scrollPrev}
          className='absolute top-1/2 left-2 -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-opacity opacity-0 group-hover/carousel:opacity-100'
          aria-label='Slide anterior'
        >
          <FaChevronLeft className='text-[#5D4037]' />
        </button>
        <button
          onClick={scrollNext}
          className='absolute top-1/2 right-2 -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-opacity opacity-0 group-hover/carousel:opacity-100'
          aria-label='Próximo slide'
        >
          <FaChevronRight className='text-[#5D4037]' />
        </button>
      </div>

      <a
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        className={`w-full block mt-auto py-3 rounded-lg text-white font-semibold transition-colors duration-300 ${buttonClass}`}
      >
        Encomendar Agora
      </a>
    </div>
  );
};

export default SpecialtyCard;
