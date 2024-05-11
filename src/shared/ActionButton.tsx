import { ReactNode } from "react";
import { SelectedPage } from '@/shared/types';
import { Link as LinkScroll } from 'react-scroll/modules';

type Props = {
  children: ReactNode,
  setSelectedPage: (value: number) => void
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <LinkScroll smooth duration={1000} to={SelectedPage.ContactUs} className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition duration-500 cursor-pointer' onClick={() => setSelectedPage(Object.values(SelectedPage).indexOf(SelectedPage.ContactUs))}>
      {children}
    </LinkScroll>
  );
}

export default ActionButton;
