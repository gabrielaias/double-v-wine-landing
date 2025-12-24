import { motion } from "framer-motion";
import { Grape, MapPin, Award } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Origem Chilena",
    description: "Vinhos produzidos no Vale Central do Chile, região reconhecida mundialmente pela qualidade de suas uvas.",
  },
  {
    icon: Grape,
    title: "Vinícola Castillo de Andrade",
    description: "Tradição e qualidade em cada garrafa, com vinhos cuidadosamente selecionados para o paladar brasileiro.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Carmenère, Sauvignon Blanc e Espumantes que harmonizam perfeitamente com diversos pratos.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-wine-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold font-display text-sm tracking-[0.2em] uppercase mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              A Autenticidade Chilena
            </h2>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto leading-relaxed">
              A Double V Wine traz para você os melhores vinhos da Vinícola Castillo de Andrade, 
              selecionados especialmente para proporcionar experiências únicas em cada degustação.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl text-cream mb-3">
                  {feature.title}
                </h3>
                <p className="text-cream/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Harmonization Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-block border border-gold/30 rounded-2xl p-8 bg-wine-dark/30 backdrop-blur-sm">
              <h3 className="font-display text-2xl text-gold mb-4">
                Dicas de Harmonização
              </h3>
              <div className="flex flex-wrap justify-center gap-6 text-cream/80">
                <div>
                  <span className="text-gold font-semibold">Carmenère</span>
                  <span className="mx-2">→</span>
                  <span>Pizzas, carnes vermelhas</span>
                </div>
                <div>
                  <span className="text-gold font-semibold">Blanc</span>
                  <span className="mx-2">→</span>
                  <span>Petiscos, frutos do mar</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
