import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import { benefits } from './data';
import BenefitsSection from './BenefitsSection';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import { Element } from "react-scroll";


type Props = {
  setSelectedPage: (value: string) => void;
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <Element name='benefits'>
    <section id='' className='mx-auto snap-start h-screen py-20 w-5/6'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >

        {/* כותרת */}
        <motion.div className='md:my-5 md:w-3/5'
          initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} >
          <HText>יותר מסתם סטודיו</HText>
          <p className='my-5 text-sm'>
            אנחנו מספקים מתקני כושר מעולים מסדר עולמי, מאמנים ושיעורים שיעזרו
            לך להגיע למטרות הכושר האולטימטיביות שלך בקלות. אנחנו מעניקים תשומת
            לב אמיתית לכל חבר וחברה.
          </p>
        </motion.div>

        {/* יתרונות */}
        <motion.div className='md:flex whitespace-nowrap overflow-x-auto overflow-y-hidden items-center justify-between gap-8 mt-5'
          initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} variants={container} >
          {
            benefits.map((benefit) => (
              <BenefitsSection benefit={benefit} setSelectedPage={setSelectedPage} key={benefit.title} />
            ))
          }
        </motion.div>
        {/* תמונה ותיאור */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>

          {/* תיאור */}
          <div>
            {/* כותרת */}
            {/* <div className='relative'>
              <div className='before:absolute before:-top-20  before:-left-20 before:z-[-1] before:content-abstractwaves'>
                <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }} >
                  <HText>
                    מיליונים של חברים מרוצים מקבלים{" "}
                    <span className='text-primary-500'>כושר</span>
                  </HText>
                </motion.div>
              </div>
            </div> */}

            {/* תיאור */}
            {/* <motion.div initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity:1, x:0}}} >
                <p className='my-5'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi non, consectetur sit facilis fugit quaerat provident! Non, quaerat voluptatum voluptas, sint totam culpa atque eligendi eveniet labore et facere, inventore provident quas itaque ratione? Quia cumque veritatis adipisci, dolorum rem ab odio nemo ipsum doloribus, expedita voluptate quibusdam eos unde.
                </p>
                <p className='mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad temporibus quam nesciunt dolore sequi ut facilis enim, molestias exercitationem debitis vero placeat in fuga eligendi cupiditate officiis minima doloribus minus.
                </p>
              </motion.div> */}

            {/* כפתור */}
            {/* <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>הצטרף עכשיו</ActionButton>
              </div>
            </div> */}
          </div>
          {/* תמונה */}
          {/* <img src={BenefitsPageGraphic} alt="benefits-graphics" className='mx-auto' /> */}
        </div>
      </motion.div>
    </section>
    </Element>
  );
}

export default Benefits;
