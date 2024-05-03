import styles from "./NavBarDesktop.module.css";
import "../../src/font.css"
import { useEffect, useState } from "react";
import burger from "../assets/burgerMenu.svg"
import BurgerMenu from "../burgerMenu/BurgerMenu";
import ATpartnersLogo from "../assets/ATpartnersLogo.png"
import AOS from "aos";
import "aos/dist/aos.css";

export default function NavBarDesktop() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const liItems = document.querySelectorAll(".liNav")
  // console.log(liItems)

  const handleScroll = () => {
    const scrollThreshold = 80;
    setIsScrolled(
      document.body.scrollTop > scrollThreshold ||
      document.documentElement.scrollTop > scrollThreshold
    );
  };
  // window.onscroll = function() {scrollFunction()};
  // function scrollFunction() {
  //   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //     document.getElementById("stickyNav").style.heigth = "65px";
  //     document.getElementById("navDesktop").style.height = "65px";
  //     document.getElementById("navDesktop").style.backgroundColor = "#2c4295";
  //     if(liItems.length > 0) {
  //       liItems.forEach((li) => {
  //         li.style.color = "white";
  //       })
  //     } else {
  //       console.log("no li items")
  //     }

  //   } else {
  //     document.getElementById("stickyNav").style.heigth = "120px";
  //     document.getElementById("navDesktop").style.height = "120px";
  //     document.getElementById("navDesktop").style.backgroundColor = "transparent";
  //   }
  // }
    return (
      <div
      className={`${styles.stickyNav} ${isScrolled ? styles.scrolled : ""}`}
      id="stickyNav"
    >
        <nav
        className={`${styles.navDesktop} ${isScrolled ? styles.scrolled : ""}`}
        id="navDesktop"
      >
            <div className={styles.logoContainer}>
            <BurgerMenu isScrolled={isScrolled} />
            <img src={ATpartnersLogo} alt="" className={styles.ATpartnersLogo} />
            <h2 className={`${styles.ATtitle} ${isScrolled ? styles.scrolled : ""}`}>ATpartners</h2>
            </div>
            <ul>
                <li className={`${styles.liNav} ${isScrolled ? styles.scrolled : ""}`}>Accueil</li>
                <li className={`${styles.liNav} ${isScrolled ? styles.scrolled : ""}`}>ATservices</li>
                <li className={`${styles.liNav} ${isScrolled ? styles.scrolled : ""}`}>ATimmobilier</li>
                <li className={`${styles.liNav} ${isScrolled ? styles.scrolled : ""}`}>ATpromotion</li>
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