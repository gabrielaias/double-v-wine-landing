import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Wine, Gift, Sparkles } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Kit 3 Vinhos",
    description: "3 garrafas selecionadas em caixa de MDF",
    price: "R$ 188,00",
    icon: Wine,
    featured: false,
  },
  {
    id: 2,
    name: "1 Vinho + 2 Taças de Cristal",
    description: "Kit presenteável com taças elegantes",
    price: "R$ 198,00",
    icon: Gift,
    featured: true,
  },
  {
    id: 3,
    name: "1 Espumante + 2 Taças de Cristal",
    description: "Perfeito para celebrações especiais",
    price: "R$ 218,00",
    icon: Sparkles,
    featured: false,
  },
];

const individualProducts = [
  { name: "1 Vinho", price: "R$ 58,00" },
  { name: "1 Espumante", price: "R$ 78,00" },
];

const Products = () => {
  const whatsappLink = "https://wa.me/5511915117986";

  return (
    <section id="produtos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display text-sm tracking-[0.2em] uppercase mb-4 block">
            Nossos Produtos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Kits Especiais
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Criados para presentear com distinção e brindar momentos inesquecíveis
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${product.featured ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <div
                className={`h-full p-8 rounded-2xl border transition-all duration-300 ${
                  product.featured
                    ? "bg-wine text-cream border-wine shadow-elegant"
                    : "bg-card border-border hover:border-gold/50 hover:shadow-elegant"
                }`}
              >
                {product.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-wine-dark text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                    Mais Vendido
                  </span>
                )}

                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${
                    product.featured ? "bg-gold/20" : "bg-gold/10"
                  }`}
                >
                  <product.icon
                    className={`w-8 h-8 ${
                      product.featured ? "text-gold" : "text-gold"
                    }`}
                  />
                </div>

                <h3
                  className={`font-display text-2xl mb-3 text-center ${
                    product.featured ? "text-cream" : "text-foreground"
                  }`}
                >
                  {product.name}
                </h3>

                <p
                  className={`text-center mb-6 ${
                    product.featured ? "text-cream/80" : "text-muted-foreground"
                  }`}
                >
                  {product.description}
                </p>

                <p
                  className={`font-display text-3xl text-center mb-6 ${
                    product.featured ? "text-gold" : "text-primary"
                  }`}
                >
                  {product.price}
                </p>

                <Button
                  variant={product.featured ? "gold" : "wine"}
                  className="w-full"
                  asChild
                >
                  <a
                    href={`${whatsappLink}?text=Olá! Tenho interesse no ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Encomendar
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Individual Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 border border-border"
        >
          <h3 className="font-display text-2xl text-center text-foreground mb-6">
            Embalagens Individuais
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {individualProducts.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-muted-foreground mb-2">{item.name}</p>
                <p className="font-display text-2xl text-primary">{item.price}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
