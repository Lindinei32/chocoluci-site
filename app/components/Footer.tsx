// /app/components/Footer.tsx - VERSÃO FINAL

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F9EBEB] w-full border-t border-[#D7CCC8] py-6 px-4">
      <div className="container mx-auto text-center text-sm text-[#795548]">
        <p>
          &copy; {currentYear} Chocoluci. Todos os direitos reservados.
        </p>
        <div className="mt-2">
          <span>Desenvolvido com ❤️ por </span>
          <a 
            href="https://github.com/Lindinei32"
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold hover:underline block sm:inline"
          >
            Lindinei Sales
          </a>
        </div>
      </div>
    </footer>
  );
}






































  
