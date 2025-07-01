import AboutSection from "./component/About";
import Contact from "./component/Contact";
import FAQComponent from "./component/Faq";
import ChristianCounselingHero from "./component/Herosection";
import Navigation from "./component/Navigation";
import Services from "./component/Services";

export default function Home() {
  return (
    <main>
      <Navigation/>
      <ChristianCounselingHero />
      <AboutSection />
      <Services />
      <FAQComponent/>
      <Contact />
    </main>
  );
}
