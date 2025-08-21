// /app/components/Footer.tsx

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Pega o ano atual automaticamente

  return (
    <footer className='bg-[#F9EBEB] w-full border-t border-[#D7CCC8] py-6'>
      <div className='container mx-auto px-4 text-center text-sm text-[#795548]'>
        <p>&copy; {currentYear} Chocoluci. Todos os direitos reservados.</p>
        <p className='mt-2'>
          Desenvolvido com ❤️ por https://www.google.com/
          <a
            // IMPORTANTE: Coloque o link para seu portfólio ou GitHub aqui
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold hover:underline'
          >
            Lindinei Sales
          </a>
        </p>
      </div>
    </footer>
  );







































  
}
