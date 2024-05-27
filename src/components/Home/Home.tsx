import { HebrewDisplayName, SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { Link as LinkScroll } from 'react-scroll/modules';
import HomePageGraphic from '@/assets/images/HomePageGraphic.png';
import homeBackground from "@/assets/images/homeBackground.jpeg";
import { MotionValue, motion, useScroll } from 'framer-motion';
import { Element } from "react-scroll";
import { HOME_TEXT, JOIN_NOW, LEARN_MORE } from '@/shared/pageTexts';
import { useRef } from 'react';
import { useParallax } from '@/hooks/hooks';

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Home = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section id='home' className='h-svh flex justify-center items-center relative snap-center' >
      <div ref={ref} className="div">
        {/* <motion.h2 className='absolute' style={{ y }}>{`#${HebrewDisplayName.home}`}</motion.h2> */}
        <img alt="Background" className="absolute w-full min-h-full inset-0 object-cover opacity-5" src={homeBackground} />
        {/* Images & Header */}
        <motion.div className='flex lg:flex-row flex-col mx-auto w-5/6 lg:mt-32 gap-2 items-center'
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* Image */}
          <div className="w-full h-auto xs:pt-14 md:max-w-max max-w-60 ">
            <img src={HomePageGraphic} alt="home-page-graphic" />
            {!isAboveMediumScreens &&
              <div className='w-full bg-primary h-2 rounded-3xl' />}
          </div>
          {/* Main Header */}
          <div className='z-10 py-4'>
            {/* Headings */}
            <motion.div className='' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
              <div className="w-full text-secondary-text border-solid mx-auto rounded-lg">
                <h1 className="md:text-xl xs:text-base text-base font-bold mb-4">אם הגעתם לפה, אתם מאלו שמשקיעים בגוף שלהם ורוצים לראות תוצאות.</h1>
                <div className="md:text-base xs:text-xs text-sm leading-7 space-y-4">
                  <p>מי אנחנו? ישראל וטליה - בעלי סטודיו לאימוני כוח ושיפור הרכב גוף עם דגש על טאצ' אישי (כן, ממש 1 על 1)</p>
                  <p>אצלנו, כל מתאמן.ת עוברים אימון היכרות + אבחון מקצועי + שיחת תיאום ציפיות</p>
                  <p>כי בינינו, בשביל להשיג תוצאות ולהתמיד - צריך התאמה אישית של התוכנית אליכם ולא אתכם לתוכנית.</p>
                  <p>איפה הסטודיו? בסמוך לבנייני המשרדים/ קניון איילון, בני ברק - רמת גן. [כן, יש פה חנייה ברווח]</p>
                </div>
              </div>
            </motion.div>
            {/* Actions */}
            <motion.div className='mt-8 flex items-center gap-4' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
              <ActionButton selectedPage={SelectedPage.ContactUs} className='rounded-md bg-accent px-10 py-2 hover:bg-secondary text-secondary-text hover:text-primary-text transition duration-500 cursor-pointer'>{JOIN_NOW}</ActionButton>
              <LinkScroll smooth duration={1000} to={`${SelectedPage.AboutUs}`} className='text-sm xs:text-xs font-bold text-secondary-text underline hover:text-primary-text cursor-pointer' onClick={() => setSelectedPage(SelectedPage.AboutUs)} ><p>{LEARN_MORE}</p></LinkScroll>
            </motion.div>
          </div>
        </motion.div>

        {/* Sponsors */}
        {isAboveMediumScreens && (
          <div className='h-[9.375rem] w-full bg-primary py-10'>
            <div className='mx-auto w-5/6'>
              <div className='flex w-3/5 items-center justify-between gap-8'>
                {/* <img src={SponsorRedBull} alt="sponsor-redbull" />
              <img src={SponsorForbes} alt="sponsor-forbes" />
              <img src={SponsorFortune} alt="sponsor-fortune" /> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
