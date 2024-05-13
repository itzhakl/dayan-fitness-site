import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { SelectedPage } from '@/shared/types';
import Home from '@/components/Home/Home';
import Benefits from '@/components/Benefits/Benefits';
import Ourclasses from '@/components/OurClasses/Ourclasses';
import ContactUs from '@/components/ContactUs/ContactUs';
import Footer from '@/components/Footer/Footer';
import AboutUs from '@/components/AboutUs/AboutUs';
import ScrollListener from './ScrollListener'

function App() {
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const pageIds = Object.values(SelectedPage);


  // ScrollListener({selectedPage, setSelectedPage, pageIds });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(pageIds.indexOf(SelectedPage.Home));
      } else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div dir='rtl' className="app bg-black text-teal-200"
    style={{
      // // overflowY: 'scroll', 
      // scrollSnapType: 'y mandatory', 
      // height: '100vh', 
      // scrollBehavior: "smooth" 
    }}
    >
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <AboutUs setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Ourclasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
