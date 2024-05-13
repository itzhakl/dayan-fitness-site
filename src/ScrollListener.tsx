import { useEffect, useRef, useState } from 'react';
import { set } from 'react-hook-form';
import { Events, scroller, animateScroll } from 'react-scroll';
import { SelectedPage } from './shared/types';
import { log } from 'console';

interface ScrollPagesOptions {
  pageIds: string[];
  selectedPage: number;
  setSelectedPage: (page: number) => void;
}

const useScrollPages = ({ selectedPage, setSelectedPage, pageIds }: ScrollPagesOptions) => {
  const prevScrollY = useRef<number>(0);
  const scroll = useRef<boolean>(false);

  useEffect(() => {
    const scrollToId = () => {
      console.log('selectedPage', pageIds[selectedPage]);
      console.log("a",window.scrollY);

      scroller.scrollTo(pageIds[selectedPage], {
        duration: 500,
        delay: 0,
        smooth: true,
      });
    };
    scrollToId();
  }, [scroll.current])

  useEffect(() => {
    window.addEventListener('scrollend', () => {
      
      console.log(scroll.current);
      scroll.current = !scroll.current
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
