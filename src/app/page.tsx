import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FlagshipWork from "@/components/FlagshipWork";
import OtherWork from "@/components/OtherWork";
import Approach from "@/components/Approach";
import CoffeeBreak from "@/components/CoffeeBreak";
import { Education, Research, Experience } from "@/components/Journey";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Fx from "@/components/Fx";
import AskPortfolio from "@/components/AskPortfolio";

export default function Home() {
  return (
    <>
      <Nav />
      <Fx />
      <main>
        <Hero />
        <FlagshipWork />
        <OtherWork />
        <AskPortfolio />
        <CoffeeBreak />
        <Approach />
        <Education />
        <Research />
        <Experience />
        <Skills />
        <div className="snap-page">
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
