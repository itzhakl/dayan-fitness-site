import Logo from '@/assets/images/Logo.png';
import { HebrewDisplayName, SelectedPage } from '@/shared/types';
import { motion, useScroll } from 'framer-motion';
import {
  WhatsApp as WhatsAppIcon,
  Phone as PhoneIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  RoomOutlined as RoomOutlinedIcon,
  Mail as MailIcon,
} from '@mui/icons-material';
import WazeIcon from '../../assets/svg/waze.svg'
import { Element } from "react-scroll";
import Copyright from './Copyright';
import TikTokIcon from '@/assets/svg/tiktok.svg';
import { useRef } from 'react';
import { useParallax } from '@/hooks/hooks';


type Props = {
  setSelectedPage: (value: string) => void;
}

const Footer = ({ setSelectedPage }: Props): JSX.Element => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section id='footer' className='bg-primary h-svh flex justify-center items-center relative snap-center'>
      <div ref={ref} className=" pt-16">
        {/* <motion.h2 className='absolute' style={{ y }}>{`#${HebrewDisplayName.footer}`}</motion.h2> */}
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Footer)}
          className=''>
          <div className="rounded-xl p-8 border-2 border-secondary-text m-2">
            <h4 className="font-bold">{'פרטים'}</h4>
            <div>
              <span className='my-5'>053-523-0563</span>
              <a title='make a call' target='blank' href='tel:+972535230563'><PhoneIcon /></a>
              <a title='whatsApp' target='blank' href='https://wa.me/message/OYX7HMT5ZXVGA1'><WhatsAppIcon /></a>
            </div>
            <div className="div">
              <span className='my-5'>{'הרב דנגור 22, בני ברק'}</span>
              <a title='google-maps' target='blank' href='https://maps.app.goo.gl/mXrVZZww2EHSCzmJ8'><RoomOutlinedIcon /></a>
              <a title='waze' target='blank' href='https://ul.waze.com/ul?place=ChIJeSGzyhxLHRURTWWC5iP_iZM&ll=32.09687890%2C34.83111380&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'>
                <img className='w-[1.25rem] h-[1.25rem] inline-block' src={WazeIcon} />
              </a>
            </div>
            <div className="div">
              <span className='my-5'>
                <a title='mail' target='blank' href='mailto:hid0504154438@gmail.com'>{'hid0504154438@gmail.com'}
                </a><MailIcon />
              </span>
            </div>
            {/* <div className='relative'>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.97805025074!2d34.831113800000004!3d32.0968789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b1ccab32179%3A0x9389ff23e682654d!2z15nXqdeo15DXnCDXldeY15zXmdeUINeT15nXmdefIC0g157XkNee16DXmSDXm9eV16nXqCDXkNeZ16nXmdeZ150g15XXp9eR15XXpteV16o!5e0!3m2!1siw!2sil!4v1715335093742!5m2!1siw!2sil" width="350" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div> */}
          </div>
          <div className='rounded-xl p-8 border-2 border-secondary-text m-2'>
            <h4 className="font-bold">Links</h4>
            <p className="my-1"><InstagramIcon /><a target='blank' href='https://www.instagram.com/dayn_israel?r=nametag'>{'@dayn_israel'}</a></p>
            <p className="my-1"><img className='w-[1.875rem] inline-block' src={TikTokIcon} /><a target='blank' href='https://www.youtube.com/channel/UCnQ-OQZNPQ6SE47c-76v-pg'>{'@daynisraelcoach'}</a></p>
            <p className="my-1"><FacebookIcon /><a target='blank' href='https://www.facebook.com/profile.php?id=100006389503448'>{'@facebook'}</a></p>
            <p className="my-1"><YouTubeIcon /><a target='blank' href='https://www.youtube.com/channel/UCnQ-OQZNPQ6SE47c-76v-pg'>{'@youtube'}</a></p>
            {/* <p className="my-1"><a target='blank' href='https://open.spotify.com/show/0tSAFGmKETKRQ4Cwhm9mmU?si=M5hc5lqUQZabtGZ-JuuVyg&dl_branch=1'>{'@spotify podcast'}</a></p>
                        <p className="my-1"><a target='blank' href='https://podcasts.apple.com/podcast/id1623819552?app=podcast&at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_p&ls=1&mt=2'>{'@apple podcast'}</a></p> */}
          </div>
          <img className='w-[3.125rem] h-[3.125rem]' src={Logo} alt="footer-logo" />
        </motion.div>
        <Copyright />
      </div>
    </section>

  );
}

export default Footer;
