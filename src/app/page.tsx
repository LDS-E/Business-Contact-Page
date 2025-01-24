import Hero from "./components/hero";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Branding from "./components/Branding";
import Results from "./components/Results";
import SimplesChart from "./components/SimplesChat";

export default function Page() {
  return (
    <div>
      <Hero />
      <Brands />
      <Branding />
      <Results />
      <SimplesChart />
      <Testimonials />
      <Contact />
    </div>
  );
}
