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
import { HOME_TEXT, JOIN_NOW, LEARN_MORE } from '@/shared/pageTexts';

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Home = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <Element name='home'>
    <section id='' className='gap-16 snap-start py-10 w-screen h-screen md:pb-0' >
      {/* Images & Header */}
      <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Image */}
        <div className='flex space-x-2 basis-3/5 justify-center md:z-[10] md:ml-40 md:mt-16 md:justify-items-end'>
          <img className='w-1/2' src={HomePageGraphic} alt="home-page-graphic" />
          <img className='w-1/2' src={HomePageGraphic} alt="home-page-graphic" />
        </div>
        {/* Main Header */}
        <div className='z-10 md:mt-32 mt-16'>
          {/* Headings */}
          <motion.div className='' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
            <div className=''>
              <div className="w-full mx-auto rounded-lg">
                <h1 className="md:text-xl sm:text-base font-bold mb-4">אם הגעתם לפה, אתם מאלו שמשקיעים בגוף שלהם ורוצים לראות תוצאות.</h1>
                <div className="md:text-base sm:text-sm leading-7 text-teal-50 space-y-4">
                  <p>מי אנחנו? ישראל וטליה - בעלי סטודיו לאימוני כוח ושיפור הרכב גוף עם דגש על טאצ' אישי (כן, ממש 1 על 1)</p>
                  <p>אצלנו, כל מתאמן.ת עוברים אימון היכרות + אבחון מקצועי + שיחת תיאום ציפיות</p>
                  <p>כי בינינו, בשביל להשיג תוצאות ולהתמיד - צריך התאמה אישית של התוכנית אליכם ולא אתכם לתוכנית.</p>
                  <p>איפה הסטודיו? בסמוך לבנייני המשרדים/ קניון איילון, בני ברק - רמת גן. [כן, יש פה חנייה ברווח]</p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Actions */}
          <motion.div className='mt-8 flex items-center gap-8' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
            <ActionButton selectedPage={SelectedPage.ContactUs} className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition duration-500 cursor-pointer'>{JOIN_NOW}</ActionButton>
            <LinkScroll smooth duration={1000} to={`${SelectedPage.AboutUs}`} className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer' onClick={() => setSelectedPage(SelectedPage.AboutUs)} ><p>{LEARN_MORE}</p></LinkScroll>
          </motion.div>
        </div>


      </motion.div>

      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-teal-600 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 items-center justify-between gap-8'>
              {/* <img src={SponsorRedBull} alt="sponsor-redbull" />
              <img src={SponsorForbes} alt="sponsor-forbes" />
              <img src={SponsorFortune} alt="sponsor-fortune" /> */}
            </div>
          </div>
        </div>
      )}
    </section>
    </Element>
  );
}

export default Home;
