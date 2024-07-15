import styles from "./NavBarDesktop.module.css";
import "../../src/font.css"
import { useEffect, useState } from "react";
import burger from "../assets/burgerMenu.svg"
import BurgerMenu from "../burgerMenu/BurgerMenu";
import ATpartnersLogo from "../assets/ATpartnersLogo.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBarDesktop() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollThreshold = 80;
    setIsScrolled(
      document.body.scrollTop > scrollThreshold ||
      document.documentElement.scrollTop > scrollThreshold
    );
  };
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
            <img src={ATpartnersLogo} alt="" className={styles.ATpartnersLogo} onClick={()=>navigate("/")} />
            <h2 className={`${styles.ATtitle} ${isScrolled ? styles.scrolled : ""}`} onClick={()=>navigate("/")}>ATpartners</h2>
            </div>
            <ul>
              <Link to={{
                pathname: "/",
              }}>
                <li className={`${styles.liNav} ${isScrolled ? styles.scrolled : ""}`}>Accueil</li>
                </Link>
                <Link to={{
                  pathname: "/ATservices",
                }}>
                <li className={`${styles.liNav} ${isScrolled ? styles.scrolled : ""}`}>ATservices</li>
                </Link>
                <li className={`${styles.liNav} ${isScrolled ? styles.scrolled : ""}`}>ATimmobilier</li>
                <li className={`${styles.liNav} ${isScrolled ? styles.scrolled : ""}`}>ATpromotion</li>
            </ul>
            <div className={styles.contactButtonContainer}>
            <Link to={{
                pathname: "/contact",
              }}>
            <button className={styles.contactutton}>
              Contact
             </button>
             </Link>
             </div>
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