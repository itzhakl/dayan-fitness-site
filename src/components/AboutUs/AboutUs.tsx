import { HebrewDisplayName, SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion, useScroll } from 'framer-motion';
import { Element } from "react-scroll";
import israelAndTalya from "@/assets/images/israelAndTalya2.png";
// import israelPhoto from "@/assets/images/israelPhoto.png";

import { ABOUT_US } from '@/shared/pageTexts';
import { useRef } from 'react';
import { useParallax } from '@/hooks/hooks';

type Props = {
  setSelectedPage: (value: string) => void;
}

const AboutUs = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 400);
  return (
    <section id='aboutus' className='h-svh flex justify-center items-center relative snap-center' >
      <div ref={ref} className="div">
        {/* <motion.h2 className='absolute' style={{ y }}>{`#${HebrewDisplayName.aboutus}`}</motion.h2> */}
        <img alt="Background" className="absolute w-full min-h-full inset-0 object-cover opacity-5" src={israelAndTalya} />
        {/* Images & Header */}
        <motion.div
          className='py-5 md:pb-0 md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
          onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
        >
          {/* Main Header */}
          <div className='z-10 md:mt-32 mt-20'>
            {/* Headings */}
            <motion.div className='' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
              <div className='relative'>
                {/* <p className='text-sm mt-8'>{ABOUT_US}</p> */}
                <h1 className="md:text-3xl text-secondary-text font-bold md:mb-6 mb-3 text-2xl">מי אנחנו?</h1>
                <div className="md:flex text-secondary-text mx-auto md:p-6">
                  <div className="md:m-8 mb-4">
                    <h2 className="text-[1rem] font-semibold mb-2 text-primary-text">ישראל דיין</h2>
                    <p className="text-[0.8rem] md:mb-4 mb-1">מאמן הכושר בסטודיו, מוסמך וינגייט + הכשרות בתחום הפציעות והתזונה.</p>
                    <p className="text-[0.8rem] md:mb-4 mb-1">
                      עד לפני עשור, הייתי בחור במשקל 110 קילו, חלש וכאוב. (כן, גם אני הייתי "בצד השני") לא ידעתי מה זה כושר, ירידה במשקל ואיך רואים תוצאות איכותיות.
                    </p>
                    <p className="text-[0.8rem] md:mb-4 mb-1">
                      אבל ידעתי דבר אחד - אני לא חוזר למצב שבו אני שמן, סובל וחלש! לאחר שינוי מחשבתי ופיזי הורדתי מעל 45 קילו ממשקלי והפכתי מבחור שמן לבחור ספורטיבי, בריא וחזק יותר.
                    </p>
                    <p className="text-[0.8rem] md:mb-4 mb-1">
                      בעקבות כך החלטתי לשנות את מסלול חיי, להפוך למאמן כושר ולהקים סטודיו שיעביר את ה"אני מאמין" שלי: שכן, לראות תוצאות, להיות בריא וחזק זה אפשרי! לכל אחד ואחת מכם!
                    </p>
                  </div>

                  <div className='md:m-8'>
                    <h2 className="text-[1rem] font-semibold mb-2 text-primary-text">טליה שבת</h2>
                    <p className="text-[0.8rem] md:mb-4 mb-1">מאמנת הכושר בסטודיו. מורה לחינוך גופני, מטפלת בספורט טיפולי ומוסמכת לאימון נשים בהריון ולאחר לידה.</p>
                    <p className="text-[0.8rem] md:mb-4 mb-1">
                      נתחיל בזה שגם את יכולה להראות, להרגיש ולחיות יותר טוב. איך? על ידי אימוני כוח ואירובי שיגרמו לך להיות חזקה, זקופה וחטובה יותר.
                    </p>
                    <p className="text-[0.8rem] md:mb-4 mb-1">
                      בשנים האחרונות אימנתי מאות מתאמנות ממגוון מגזרים, גילאים, לפני, במהלך ולאחר הריון ולידה כשהמאחד ביניהן הוא, ההבנה שאימון איכותי יכול לחולל שינוי בריאותי, פיזי ונפשי.
                    </p>
                    <p className="text-[0.8rem] md:mb-4 mb-1">
                      בסטודיו שלנו הקמנו אימוני כוח + אירובי בקבוצות בוטיק [כן, עד 6 נשים. לא יותר] לנשים בלבד. הקבוצות מותאמות במיוחד לנשים ממגוון הגילאים והמגזרים [גם למגזר החרדי].
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
