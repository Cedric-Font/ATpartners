import styles from "./NavBarDesktop.module.css";
import "../../src/font.css"
import { useEffect } from "react";
import burger from "../assets/burgerMenu.svg"
import BurgerMenu from "../burgerMenu/BurgerMenu";
import ATpartnersLogo from "../assets/ATpartnersLogo.png"
import AOS from "aos";
import "aos/dist/aos.css";

export default function NavBarDesktop() {
  useEffect(() => {
    AOS.init();
  }, []);
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.padding = "80px 10px";
      document.getElementById("logo").style.fontSize = "35px";
    }
  }
    return (
        <div className={styles.stickyNav}>
        <nav className={styles.navDesktop}>
            <div className={styles.logoContainer}>
            <BurgerMenu />
            <img src={ATpartnersLogo} alt="" className={styles.ATpartnersLogo} />
            <h2 className={styles.ATtitle}>ATpartners</h2>
            </div>
            <ul>
                <li>home</li>
                <li>ATservices</li>
                <li>ATimmobilier</li>
                <li>ATpromotion</li>
            </ul>
            <button className={styles.contactutton}>Contact</button>
        </nav>
      {/* <div data-aos="zoom-in"
             data-aos-easing="ease-in-out"
             data-aos-duration="1500"
             data-aos-delay="1000">
      <img src={ATmain} alt="" />
      </div> */}
        </div>
    )
}