import { Route, Routes } from 'react-router';
import MainLayout from '@/layouts/MainLayout';
import AboutMe from '@/pages/AboutMe/AboutMe';
import Contacts from '@/pages/Contacts/Contacts';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Experience from '@/pages/Experience/Experience';
import NotFound from '@/pages/NotFound/NotFound';
import Projects from '@/pages/Projects/Projects';
import Skills from '@/pages/Skills/Skills';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
