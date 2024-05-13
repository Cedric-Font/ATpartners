import styles from "./NavMobile.module.css";
import burger from "../assets/burgerMenu.svg";
import ATpartnersLogo from "../assets/ATpartnersLogo.png";
import ATmain from "../assets/ATpartnersMain.jpg";
import { Link } from "react-router-dom";
import BurgerMenu from "../burgerMenu/BurgerMenu";

export default function NavMobile() {
  return (
    <>
      <nav className={styles.navMobile}>
        <div className={styles.logoTitle}>
        <img src={ATpartnersLogo} alt="" className={styles.ATpartnersLogo} />
        <h2 className={styles.ATtitle}>ATpartners</h2>
        </div>
        <div className={styles.burgerFixed}>
        <BurgerMenu />
        </div>
      </nav>
    </>
  );
}
