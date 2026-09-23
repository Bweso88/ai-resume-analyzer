import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Method } from "./components/Method";
import { References } from "./components/References";
import { Services } from "./components/Services";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Method />
        <References />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
