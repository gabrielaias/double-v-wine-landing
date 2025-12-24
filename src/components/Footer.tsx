import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/5511915117986";
  const instagramLink = "https://www.instagram.com/doublevwine";

  return (
    <footer className="bg-wine-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl text-cream mb-2">
              Double V Wine
            </h3>
            <p className="text-cream/60 text-sm">
              Vinícola Castillo de Andrade
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-cream" />
            </a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-cream" />
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-8 pt-8 text-center">
          <p className="text-cream/40 text-sm">
            © {currentYear} Double V Wine. Todos os direitos reservados.
          </p>
          <p className="text-cream/30 text-xs mt-2">
            Beba com moderação. Venda proibida para menores de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
