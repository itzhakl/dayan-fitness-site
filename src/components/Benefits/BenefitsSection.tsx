import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Link as LinkScroll } from 'react-scroll/modules';
type Props = {
    benefit: BenefitType;
    setSelectedPage: (value: string) => void;
}

const childVariant = {
    hidden: { opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1}
}

const BenefitsSection = ({benefit, setSelectedPage}: Props) => {
  return (
    <motion.div 
    className="mt-5 mx-auto w-[250px] h-[400px] m-4 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
        variants={childVariant} >
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-teal-600 p-4">
                {benefit.icon}
            </div>
        </div>
        <h4 className="font-bold">{benefit.title}</h4>
        <p className="my-3 text-wrap">{benefit.description}</p>
        <LinkScroll smooth duration={1000} to={SelectedPage.ContactUs} className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer' onClick={() => setSelectedPage(SelectedPage.ContactUs)} ><p>צור קשר</p></LinkScroll>
    </motion.div>
  );
}

export default BenefitsSection;
