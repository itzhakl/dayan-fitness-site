import { DatasType, SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion';
import HText from "@/shared/HText";
import { datas, trainingPlans, trainingPlansTitle } from "./data";
import Class from "./Class";
import { Element } from "react-scroll";
import { useState } from "react";
import { Link as LinkScroll } from 'react-scroll/modules';
import useMediaQuery from "@/hooks/useMediaQuery";


type Props = {
  setSelectedPage: (value: string) => void;
}

const Ourclasses = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [expandedPlan, setExpandedPlan] = useState<string | null>();

  const handleExpand = (title: string) => {
    setExpandedPlan(title);
  };

  return (
    <Element name="ourclasses">
      <section id='' className="snap-start h-auto py-40">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
          {/* <h2 className="mx-8 text-3xl font-bold mb-6">הסטודיו שלנו</h2>
          <div className="mt-10 px-4 overflow-x-auto overflow-y-hidden">
            <ul className="whitespace-nowrap">
              {
                datas.map((item: DatasType, index: number) => (
                  <Class key={`${item.name}-${index}`} item={item} />
                ))
              }
            </ul>
          </div> */}
          <motion.div className="mx-auto w-5/6" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>

            <h1 className="text-3xl text-center font-bold mb-6">{trainingPlansTitle}</h1>
            <div className="md:flex justify-between">
              {trainingPlans.map(({ title, text }) =>
                <div onClick={() => handleExpand(title)} key={title} className="m-3 text-center rounded-3xl p-5 bg-primary">
                  <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                  {(isAboveMediumScreens || expandedPlan === title) && (
                    <>
                      <p className="text-base text-secondary-text mb-4">{text}</p>
                      <LinkScroll
                        smooth duration={1000} to={SelectedPage.ContactUs}
                        className='text-sm font-bold text-primary-text underline hover:text-accent cursor-pointer'
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                      >
                        <p>לעוד פרטים</p>
                      </LinkScroll>
                    </>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </Element>
  );
}

export default Ourclasses;
