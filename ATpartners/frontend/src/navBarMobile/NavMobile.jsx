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
      <section className={styles.picturePresentation}>
        <div className={styles.headerPhoto}>
          <img src={ATmain} alt="" className={styles.mainPicture} />
          <p className={styles.textIntro}>
            Nous bâtissons Nous nous engageons sur la qualité.
          </p>
          <p className={styles.introSecond}>
            ATcompany est une entreprise professionnelle qui regroupe trois
            entreprise: ATservices, ATimmobilier ainsi que ATpromotion. Nous
            vous aidons a réaliser vos projets.
          </p>
          <Link className={styles.discoverButtonLink}
          to={{
            pathname: "/test",
          }}>
          <button className={styles.discoverButton}>Découvrir nos réalisations &nbsp; &nbsp; &gt;&gt;</button>
          </Link>
        </div>
      </section>
    </>
  );
}
