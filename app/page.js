import AboutSection from "./component/About";
import FAQComponent from "./component/Faq";
import ChristianCounselingHero from "./component/Herosection";
import Navigation from "./component/Navigation";

export default function Home() {
  return (
    <main>
      <Navigation/>
      <ChristianCounselingHero />
      <AboutSection />
      <FAQComponent/>
    </main>
  );
}
