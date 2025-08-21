// /app/data/specialties.ts

export type Specialty = {
  title: string;
  description: string;
  features: string[];
  images: string[];
  buttonColor: 'brown' | 'pink';
};

export const specialties: Specialty[] = [
  {
    title: 'Cestas Gourmet',
    description: 'Cestas personalizadas com os melhores chocolates e doces selecionados.',
    features: ['Embalagem Exclusivas', 'Doces Variados', 'Cartão Personalizado'],
    images: [
      '/produtos/cesta.png', '/produtos/cesta1.png', '/produtos/cesta2.png',
      '/produtos/cesta3.png', '/produtos/cesta4.png', '/produtos/cesta5.png',
      '/produtos/cesta6.png', '/produtos/cesta7.png', '/produtos/cesta8.png',
      '/produtos/cesta9.png',
    ],
    buttonColor: 'pink',
  },
  {
    title: 'Chocolates Artesanais',
    description: 'Chocolates únicos feitos com ingredientes selecionados e muito amor.',
    features: ['Receitas Exclusivas', 'Ingredientes Premium', 'Sabores Únicos'],
    images: [
      '/produtos/choco.png', '/produtos/choco1.png', '/produtos/choco2.png',
      '/produtos/choco3.png', '/produtos/choco4.png', '/produtos/choco5.png',
      '/produtos/choco6.png', '/produtos/choco7.png', '/produtos/choco8.png',
      '/produtos/choco9.png', '/produtos/choco10.png', '/produtos/choco11.png',
    ],
    buttonColor: 'pink',
  },
  {
    title: 'Ovos de Páscoa',
    description: 'Ovos especiais para celebrar a Páscoa com ainda mais sabor.',
    features: ['Tamanhos Variados', 'Recheios Especiais', 'Decoração Artística'],
    images: [
      '/produtos/ovo.png', '/produtos/ovo1.png', '/produtos/ovo2.png',
      '/produtos/ovo3.png', '/produtos/ovo4.png', '/produtos/ovo5.png',
      '/produtos/ovo6.png', '/produtos/ovo7.png', '/produtos/ovo8.png',
      '/produtos/ovo9.png', '/produtos/ovo10.png', '/produtos/ovo11.png',
      '/produtos/ovo12.png', '/produtos/ovo13.png', '/produtos/ovo14.png',
      '/produtos/ovo15.png', '/produtos/ovo16.png', '/produtos/ovo17.png',
      '/produtos/ovo18.png', '/produtos/ovo19.png', '/produtos/ovo20.png',
      '/produtos/ovo21.png', '/produtos/ovo22.png', '/produtos/ovo23.png',
      '/produtos/ovo24.png',
    ],
    buttonColor: 'pink',
  },
  {
    title: 'Panetones',
    description: 'Panetones tradicionais e gourmet para adoçar suas festas.',
    features: ['Receita Tradicional', 'Ingredientes Importados', 'Embalagem Especial'],
    images: [
      '/produtos/pane1.png', '/produtos/pane2.png', '/produtos/pane3.png',
      '/produtos/pane4.png',
    ],
    buttonColor: 'pink',
  },
];