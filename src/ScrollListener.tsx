import { useEffect, useRef, useState } from 'react';
import { scroller } from 'react-scroll';

interface ScrollPagesOptions {
  pageIds: string[];
  selectedPage: number;
  setSelectedPage: (page: number) => void;
}

const useScrollPages = ({ selectedPage, setSelectedPage, pageIds }: ScrollPagesOptions) => {
  const prevScrollY = useRef<number>(0);
  const [isUserScrolling, setIsUserScrolling] = useState<boolean>(false);

  useEffect(() => {

  }, [])

  useEffect(() => {
    const handleScroll = () => {
      console.log('handleScroll');
      
      // if (isUserScrolling) {
      //   return;
      // }
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        // Scrolling down
        console.log('Scrolling down');
        if (selectedPage < pageIds.length - 1) {
          setSelectedPage(selectedPage + 1);
          scrollToElement(pageIds[selectedPage + 1]);
        }
      } else {
        // Scrolling up
        console.log('Scrolling up');
        if (selectedPage > 0) {
          setSelectedPage(selectedPage - 1);
          scrollToElement(pageIds[selectedPage - 1]);
        }
      }
      prevScrollY.current = currentScrollY;
    };

    const scrollToElement = (elementId: string) => {
      scroller.scrollTo(elementId, {
        duration: 200,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
      
    };

    // window.addEventListener('wheel', () => {
    //   console.log('wheel event detected');
      
    //   setIsUserScrolling(true)
    // });
    window.addEventListener('touchend', handleScroll);

    return () => {
      // window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('scrollend', handleScroll);
    };
  }, [selectedPage, setSelectedPage, pageIds]);

  return selectedPage;
};

export default useScrollPages;
