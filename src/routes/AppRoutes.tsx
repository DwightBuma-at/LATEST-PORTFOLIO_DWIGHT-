import { Route, Routes } from 'react-router';
import MainLayout from '@/layouts/MainLayout';
import About from '@/pages/About/About';
import Artifacts from '@/pages/Artifacts/Artifacts';
import Contact from '@/pages/Contact/Contact';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Experience from '@/pages/Experience/Experience';
import Gear from '@/pages/Gear/Gear';
import Projects from '@/pages/Projects/Projects';
import Search from '@/pages/Search/Search';
import TechStack from '@/pages/TechStack/TechStack';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/artifacts" element={<Artifacts />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}
