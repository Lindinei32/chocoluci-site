// /app/components/Carousel.tsx - VERSÃO FINAL ATUALIZADA

"use client";

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// 1. ATUALIZE A LISTA DE BANNERS com os nomes dos novos arquivos.
const banners = [
  { src: '/banner.png', alt: 'Mesa de café da manhã' },
  { src: '/banner1.png', alt: 'Croissant e café da manhã' },
];

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [ Autoplay({ delay: 4000 }) ]);

  return (
    <div className="relative w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {banners.map((banner, index) => (
          <div className="relative flex-none w-full h-[50vh] bg-white" key={index}>
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              quality={95}
              /*
                2. GARANTIR QUE A IMAGEM APAREÇA COMPLETA:
                Trocamos 'object-cover' por 'object-contain'.
                'object-contain' garante que a imagem inteira caiba no espaço, sem cortar as bordas.
              */
              className="object-contain object-center"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}