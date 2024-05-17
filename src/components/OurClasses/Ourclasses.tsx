import { DatasType, SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion';
import HText from "@/shared/HText";
import { datas } from "./data";
import Class from "./Class";
import { Element } from "react-scroll";


type Props = {
  setSelectedPage: (value: string) => void;
}

const Ourclasses = ({ setSelectedPage }: Props) => {
  return (
    <Element name="ourclasses">
    <section id='' className="snap-start h-auto bg-teal-600 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div className="mx-auto w-5/6" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
          <div 
          // className="md:w-4/5"
          >
            <h1 className="text-3xl font-bold mb-6">מסלולי האימונים שלנו:</h1>
            <div className="md:flex justify-between">
              <div className="mb-8 m-3 rounded-3xl p-5 bg-black">
                <h2 className="text-2xl font-semibold mb-2">אימונים אישיים 1 על 1:</h2>
                <p className="text-base mb-4">
                  האימון מתאים לאלו מכם שלא מתפשרים ומשקיעים באימון ברמה גבוהה + התאמה אישית (אבל באמת) בדיוק בשביל המטרות, אורח החיים ושעות האימונים שלכם.
                </p>
              </div>

              <div className="mb-8 m-3 rounded-3xl p-5 bg-black">
                <h2 className="text-2xl font-semibold mb-2">אימונים זוגיים:</h2>
                <p className="text-base mb-4">
                  אימון שמתאים למי שרוצה לאחד כוחות ולהתאמן יחד עם בן/ בת הזוג או חבר.ה משקיענים כמוך. איך אומרים, לפעמים "טובים השניים מהאחד" [ותכל'ס זה גם מוזל יותר…]
                </p>
              </div>

              <div className="mb-8 m-3 rounded-3xl p-5 bg-black">
                <h2 className="text-2xl font-semibold mb-2">אימוני קבוצות בוטיק (לנשים בלבד):</h2>
                <p className="text-base mb-4">
                  אימון שמתאים למי שבאמת רוצה להתחזק, לשפר הרכב גוף ולהטעין כוחות ועל הדרך לעשות את זה יחד עם 4-5 בנות. אימון קבוצה ביחס אישי ורמה גבוהה.
                </p>
              </div>

              <div className="mb-8 m-3 rounded-3xl p-5 bg-black">
                <h2 className="text-2xl font-semibold mb-2">ליווי אונליין מרחוק:</h2>
                <p className="text-base mb-4">
                  אימון והכוונה אישית אבל מרחוק (תכל'ס זה נהדר למי שלא יכול להגיע אליי פיזית) למי זה מתאים? מתאמנים עם וותק באימונים, רציניים שרוצים לשפר את התוצאות שלהם.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
          <h2 className="mx-8 text-3xl font-bold mb-6">הסטודיו שלנו</h2>
        <div className="mt-10 px-4 overflow-x-auto overflow-y-hidden">
          <ul className="whitespace-nowrap">
            {
              datas.map((item: DatasType, index: number) => (
                <Class key={`${item.name}-${index}`} item={item} />
              ))
            }
          </ul>
        </div>
      </motion.div>
    </section>
    </Element>
  );
}

export default Ourclasses;
