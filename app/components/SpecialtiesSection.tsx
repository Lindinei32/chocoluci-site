// /app/components/SpecialtiesSection.tsx - VERSÃO COM GRADE DE 3 COLUNAS

import { specialties } from '@/app/data/specialties';
import SpecialtyCard from './SpecialtyCard';

export default function SpecialtiesSection() {
  return (
    <section id="especialidades" className="bg-[#F9EBEB] w-full py-20">
      <div className="container mx-auto px-4 max-w-screen-xl text-center">
        
        <h2 className="text-4xl font-bold text-[#5D4037]">Nossas Especialidades</h2>
        <p className="text-lg text-[#795548] mt-4 max-w-2xl mx-auto">
          Cada produto é cuidadosamente preparado para proporcionar uma experiência única de sabor
        </p>

        {/* 
          A MUDANÇA ESTÁ AQUI:
          - Trocamos 'lg:grid-cols-4' por 'lg:grid-cols-3'.
          - Em telas grandes (lg), agora teremos 3 colunas, tornando cada card maior.
          - Adicionamos 'xl:grid-cols-4' para que em telas muito grandes, ele volte a 4 colunas.
          - Aumentamos o 'gap' para 'gap-10' para dar mais espaçamento.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-12">
          {specialties.map((specialty) => (
            <SpecialtyCard key={specialty.title} specialty={specialty} />
          ))}
        </div>
        
      </div>
    </section>
  );
}