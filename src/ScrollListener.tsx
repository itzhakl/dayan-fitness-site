import { useEffect, useRef, useState } from 'react';
import { set } from 'react-hook-form';
import { Events, scroller, animateScroll } from 'react-scroll';
import { SelectedPage } from './shared/types';

interface ScrollPagesOptions {
  pageIds: string[];
  selectedPage: number;
  setSelectedPage: (page: number) => void;
}

const useScrollPages = ({ selectedPage, setSelectedPage, pageIds }: ScrollPagesOptions) => {
  const prevScrollY = useRef<number>(0);
  const [dontScroll, setDontScroll] = useState<boolean>(false);

  useEffect(() => {
    console.log('selectedPage', Object.values(SelectedPage)[selectedPage]);
    scroller.scrollTo(pageIds[selectedPage], {
      duration: 1000,
      delay: 0,
      smooth: true,
    });
  }, [selectedPage])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setDontScroll(p => !p)
    })
  }, [])

  // useEffect(() => {
  //   const handleScroll = () => {     
  //     if (dontScroll) {
  //       return;
  //     }
  //     console.log('handleScroll');

  //     const scrollScreen = (screen: number) => {
  //       animateScroll.scrollMore(screen, {
  //         duration: 500,
  //         delay: 0,
  //         smooth: 'easeInOutQuart',
  //       });
  //     }
      
  //     // const { deltaY } = event;
  //     // if (deltaY > 0) {
  //     //   // Scroll down one page
  //     //   scrollScreen(window.innerHeight);
  //     //   setDontScroll(true);
  //     // } else {
  //     //   // Scroll up one page
  //     //   scrollScreen(-window.innerHeight);
  //     //   setDontScroll(true);
  //     // }
  //   };

  //   window.addEventListener('scroll', handleScroll, {passive: false, capture: true});
  //   window.addEventListener('scrollend', () => setDontScroll(false));

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     // window.removeEventListener('scrollend');
  //   };
  // }, []);

  return selectedPage;
};

export default useScrollPages;
