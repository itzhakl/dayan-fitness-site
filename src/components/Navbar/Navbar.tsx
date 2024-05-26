import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/images/Logo.png';
import Link from "./Link";
import { HebrewDisplayName, SelectedPage } from '@/shared/types';
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary drop-shadow";
  const Links = Object.values(SelectedPage);

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} bg-opacity-90 fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* Links */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {Links.map(page => (
                    <Link
                      key={page}
                      page={page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>
                {/* Sign In + Button */}
                <div className={`${flexBetween} gap-8`}>
                  {/* <p>{HebrewDisplayName['SignIn']}</p> */}
                  <ActionButton className="cursor-pointer" selectedPage={SelectedPage.ContactUs}>{HebrewDisplayName['BecomeAMember']}</ActionButton>
                </div>
              </div>) : (
              <button title="MenuToggle" className='rounded-full bg- p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-gray-400" />
              </button>
            )}
            {/*Left Side  */}
            <ActionButton className="cursor-pointer" selectedPage={SelectedPage.Home}>
              <img height='50px' width='50px' src={Logo} alt="logo" />
            </ActionButton>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {
        !isAboveMediumScreens && isMenuToggled && (
          <div className='fixed justify-center inset-0 z-40 backdrop-blur-lg bg-opacity-70'>
            
              {/* Close Button */}
              <div className="flex justify-start p-10">
                <button title="close" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <XMarkIcon className="h-6 w-6 text-gray-400" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col text-center gap-12 text-3xl">
                {Links.map(page => (
                  <Link
                    setIsMenuToggled={setIsMenuToggled}
                    key={page}
                    page={page}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ))}
              </div>
          </div>)
      }
    </nav>
  );
}

export default Navbar;
