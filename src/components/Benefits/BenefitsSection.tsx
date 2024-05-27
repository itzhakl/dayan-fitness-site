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
    className="mt-5 mx-auto w-[15.625rem] h-[25rem] m-4 rounded-md border-2 bg-primary border-gray-100 px-5 py-16 text-center"
        variants={childVariant} >
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-secondary p-4">
                {benefit.icon}
            </div>
        </div>
        <h4 className="font-bold text-secondary-text">{benefit.title}</h4>
        <p className="my-3 text-wrap text-secondary-text">{benefit.description}</p>
        <LinkScroll 
            smooth duration={1000} to={SelectedPage.ContactUs} 
            className='text-sm font-bold text-primary-text underline hover:text-accent cursor-pointer' 
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        >
            <p>עוד פרטים</p>
        </LinkScroll>
    </motion.div>
  );
}

export default BenefitsSection;
