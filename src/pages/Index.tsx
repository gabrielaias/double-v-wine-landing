import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Double V Wine | Vinhos Chilenos Premium</title>
        <meta
          name="description"
          content="Double V Wine - Vinhos chilenos premium da Vinícola Castillo de Andrade. Kits especiais para presentes, Carmenère, Sauvignon Blanc e Espumantes. Entrega em São Paulo."
        />
        <meta name="keywords" content="vinho chileno, Double V Wine, Castillo de Andrade, vinho tinto, espumante, presente, kit vinho, São Paulo" />
        <link rel="canonical" href="https://doublevwine.com.br" />
        <meta property="og:title" content="Double V Wine | Vinhos Chilenos Premium" />
        <meta property="og:description" content="Vinhos chilenos premium da Vinícola Castillo de Andrade. Kits especiais para presentes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doublevwine.com.br" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Products />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
