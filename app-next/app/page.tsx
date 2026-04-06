import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reality from "./components/Reality";
import GameSection from "./components/GameSection";
import Roadmap from "./components/Roadmap";
import Badminton from "./components/Badminton";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1A]">
      <Navbar />
      <Hero />
      <Reality />
      <GameSection />
      <Roadmap />
      <Badminton />
      <RegistrationForm />
      <Footer />
    </main>
  );
}
