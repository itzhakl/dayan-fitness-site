import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { Element } from "react-scroll";


type Props = {
  setSelectedPage: (value: number) => void;
}

const AboutUs = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  return (
    <Element name='aboutus'>
    <section id='' className='gap-16 snap-start py-10 h-screen md:pb-0' >
      {/* Images & Header */}
      <motion.div
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(Object.values(SelectedPage).indexOf(SelectedPage.AboutUs))}
      >
        {/* Main Header */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* Headings */}
          <motion.div className='md:-mt-20' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
            <div className='relative'>
              <p className='text-sm mt-8'>בסטודיו כושר דיין, אנו מחויבים לספק ללקוחותינו את הכלים והמשאבים המתאימים ביותר כדי לסייע להם להשיג את יעדי הכושר שלהם. ניתן למצוא אצלנו מגוון רחב של ציוד כושר מתקדם, המאפשר לך לתרגל ביעילות ובנוחות. כמו כן, אנו מציעים תוכניות אימון מותאמות אישית, המבוססות על צרכים ויעדים אישיים.</p>
              <p className='text-sm mt-8'>צוות המדריכים שלנו הוא קבוצה מקצועית ומנוסה, המספקת הנחייה אישית, תמיכה והשראה ללקוחותינו. הם מספקים לך ליווי מקצה לקצה, מתחילת הדרך ועד להגעה ליעדים שלך.</p>
              <p className='text-sm mt-8'>בנוסף לשיעורי כושר רגילים, אנו מציעים גם שיעורים מיוחדים כמו יוגה, פילאטיס, אימוני TRX וכדומה, המאפשרים לך להתאמן בצורה מגוונת ומעניינת.</p>
              <p className='text-sm mt-8'>בסטודיו שלנו, אנו מאמינים באווירה חברתית ומשפחתית, ולכן יש לנו גם אירועים ופעילויות קהילתיות שבהן ניתן להשתתף ולהכיר את חברי הסטודיו האחרים.</p>
              <p className='text-sm mt-8'>אם אתה מחפש מקום שבו תוכל להתאמן באווירה נעימה, עם צוות מקצועי שיתאים את האימונים לך באופן אישי, סטודיו כושר דיין הוא המקום בשבילך!</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
    </Element>
  );
}

export default AboutUs;
