import { DatasType, SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion';
import HText from "@/shared/HText";
import { datas, trainingPlans, trainingPlansTitle } from "./data";
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
          <motion.div className="mx-auto w-5/6" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
            <div
            // className="md:w-4/5"
            >
              <h1 className="text-3xl font-bold mb-6">{trainingPlansTitle}</h1>
              <div className="md:flex justify-between">
                {trainingPlans.map(({ title, text }) =>
                  <div key={title} className="mb-8 m-3 rounded-3xl p-5 bg-black">
                    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                    <p className="text-base mb-4">{text}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </Element>
  );
}

export default Ourclasses;
