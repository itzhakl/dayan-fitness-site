import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { SelectedPage } from '@/shared/types';
import Home from '@/components/Home/Home';
import Benefits from '@/components/Benefits/Benefits';
import Ourclasses from '@/components/OurClasses/Ourclasses';
import ContactUs from '@/components/ContactUs/ContactUs';
import Footer from '@/components/Footer/Footer';
import AboutUs from '@/components/AboutUs/AboutUs';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
// import ScrollListener from './ScrollListener'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [selectedPage, setSelectedPage] = useState<string>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  // const pageIds = Object.values(SelectedPage);

  // ScrollListener({selectedPage, setSelectedPage, pageIds });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const components = [Home, AboutUs, Ourclasses, Benefits, ContactUs, Footer];

  return (
    <div dir="rtl" className="bg-secondary text-primary-text w-svw">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage} />
      <Ourclasses setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
      {/* {components.map((Component) => (
        <Component selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      ))} */}
      <motion.div
        className="bg-secondary-text fixed bottom-2 left-0 right-0 h-[0.3125rem] w-full rounded-full"
        style={{ scaleX }}
      />
    </div>
  );
}

export default App;
