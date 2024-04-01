import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Header } from '@/components/Header/Header';
import { Home } from '@/components/Home/Home';
import { Experience } from '@/components/Experience/Experience';
import { Projects } from '@/components/Projects/Projects';
import { Contact } from '@/components/Contact/Contact';
export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
