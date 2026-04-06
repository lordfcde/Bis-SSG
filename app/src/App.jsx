import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reality from './components/Reality';
import GameSection from './components/GameSection';
import Roadmap from './components/Roadmap';
import Badminton from './components/Badminton';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      <main>
        <Hero />
        <Reality />
        <GameSection />
        <Roadmap />
        <Badminton />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
