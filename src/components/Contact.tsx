import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Phone } from "lucide-react";

const Contact = () => {
  const whatsappLink = "https://wa.me/5511915117986";
  const instagramLink = "https://www.instagram.com/doublevwine";
  const phoneNumber = "(11) 91511-7986";

  return (
    <section id="contato" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-gold font-display text-sm tracking-[0.2em] uppercase mb-4 block">
            Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Faça seu Pedido
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Entre em contato pelo WhatsApp ou Instagram para fazer seu pedido ou tirar dúvidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
            <Button variant="wine" size="xl" asChild>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
                @doublevwine
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>{phoneNumber}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
