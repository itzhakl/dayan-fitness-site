import Logo from '@/assets/Logo.png';
import { HebrewDisplayName, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { Element } from "react-scroll";


type Props = {
  setSelectedPage: (value: number) => void;
}

const Footer = ({ setSelectedPage }: Props ): JSX.Element => {
  return (
    <Element name='footer'>
    <section id='' className='bg-teal-600 snap-start h-screen py-16'>
      <motion.div
        onViewportEnter={() => setSelectedPage(Object.values(SelectedPage).indexOf(SelectedPage.Footer))}
        className='w-5/6 mx-auto gap-16 md:flex'>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">{'פרטים'}</h4>
          <p className='my-5'><a target='blank' href='tel:+972535230563'>053-523-0563</a></p>
          <p className='my-5'><a target='blank' href='https://wa.me/message/OYX7HMT5ZXVGA1'>{'ווצאפ'}</a></p>
          <p className='my-5'><a target='blank' href='https://maps.app.goo.gl/mXrVZZww2EHSCzmJ8'>{'הרב דנגור 22, בני ברק'}</a></p>
          <p className='my-5'><a target='blank' href='mailto:hid0504154438@gmail.com'>{'hid0504154438@gmail.com'}</a></p>
          {/* <div className='relative'>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.97805025074!2d34.831113800000004!3d32.0968789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b1ccab32179%3A0x9389ff23e682654d!2z15nXqdeo15DXnCDXldeY15zXmdeUINeT15nXmdefIC0g157XkNee16DXmSDXm9eV16nXqCDXkNeZ16nXmdeZ150g15XXp9eR15XXpteV16o!5e0!3m2!1siw!2sil!4v1715335093742!5m2!1siw!2sil" width="350" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div> */}
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className="font-bold">Links</h4>
          <p className="my-5"><a target='blank' href='https://www.instagram.com/dayn_israel?r=nametag'>{'@instagram'}</a></p>
          <p className="my-5"><a target='blank' href='https://www.facebook.com/profile.php?id=100006389503448'>{'@facebook'}</a></p>
          <p className="my-5"><a target='blank' href='https://www.youtube.com/channel/UCnQ-OQZNPQ6SE47c-76v-pg'>{'@youtube'}</a></p>
          <p className="my-5"><a target='blank' href='https://open.spotify.com/show/0tSAFGmKETKRQ4Cwhm9mmU?si=M5hc5lqUQZabtGZ-JuuVyg&dl_branch=1'>{'@spotify podcast'}</a></p>
          <p className="my-5"><a target='blank' href='https://podcasts.apple.com/podcast/id1623819552?app=podcast&at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_p&ls=1&mt=2'>{'@apple podcast'}</a></p>
        </div>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img height='50px' width='50px' src={Logo} alt="footer-logo" />
          {/* <p className='my-5'>
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p> */}
          <p>© נבנה על ידי יצחק לשינסקי</p>
          <a href='tel:+972535561849'>053-556-1849</a>
        </div>
      </motion.div>
    </section>
    </Element>
  );
}

export default Footer;
