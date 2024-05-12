import { Link as LinkScroll } from 'react-scroll/modules';
import { HebrewDisplayName, SelectedPage } from '@/shared/types';

type Props = {
  page: string;
  selectedPage: number;
  setSelectedPage: (value: number) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
  const selectedPagesArray = Object.values(SelectedPage);
  return (
    <LinkScroll smooth duration={1000} to={lowerCasePage} onClick={() => setSelectedPage(selectedPagesArray.indexOf(lowerCasePage))} className={`${selectedPagesArray[selectedPage] === lowerCasePage ? "text-primary-500" : ""} transition cursor-pointer duration-500 hover:text-primary-300`}>
        {HebrewDisplayName[lowerCasePage]}
    </LinkScroll>
  );
}

export default Link;
