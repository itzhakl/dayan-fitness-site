import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { Link as LinkScroll } from 'react-scroll/modules';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import { motion } from 'framer-motion';
import { Element } from "react-scroll";

type Props = {
  setSelectedPage: (value: number) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <Element name='home'>
    <section id='' className='gap-16 snap-start py-10 w-screen h-screen md:pb-0' >
      {/* Images & Header */}
      <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
      onViewportEnter={() => setSelectedPage(Object.values(SelectedPage).indexOf(SelectedPage.Home))}
      >
        {/* Image */}
        <div className='flex basis-3/5 justify-center md:z-[10] md:ml-40 md:mt-16 md:justify-items-end'>
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
        {/* Main Header */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* Headings */}
          <motion.div className='md:-mt-20' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
            <div className='relative'>
              {/* using before: to position something relative to other */}
              {/* <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                <img src={HomePageText} alt="home-page-text" />
              </div> */}
            </div>
            <p className='text-sm mt-8'>
              {'ברוכים הבאים לסטודיו כושר דיין - המקום שבו תגלו את הגרסה הטובה ביותר של עצמכם! באתר שלנו, נציע לך חוויה מעוררת השראה ומגוונת בתרגולים ופעילויות כושר. ניתן למצוא אצלנו מגוון רחב של שיעורי כושר, כולל סטים מותאמים אישית, אימוני TRX, יוגה, ועוד. בנוסף, צוות המדריכים המקצועי שלנו יסייע לך להשיג את היעדים האישיים שלך בדרך הכי יעילה ומהנה. הצטרפו אלינו ותחוו את השינוי שתמיד רציתם!'}
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div className='mt-8 flex items-center gap-8' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <LinkScroll smooth duration={1000} to={`${SelectedPage.ContactUs}`} className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer' onClick={() => setSelectedPage(Object.values(SelectedPage).indexOf(SelectedPage.ContactUs))} ><p>Learn More</p></LinkScroll>
          </motion.div>
        </div>


      </motion.div>

      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-teal-600 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 items-center justify-between gap-8'>
              <img src={SponsorRedBull} alt="sponsor-redbull" />
              <img src={SponsorForbes} alt="sponsor-forbes" />
              <img src={SponsorFortune} alt="sponsor-fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
    </Element>
  );
}

export default Home;
