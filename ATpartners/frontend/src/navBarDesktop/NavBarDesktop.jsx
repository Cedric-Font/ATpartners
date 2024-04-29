import styles from "./NavBarDesktop.module.css";
import "../../src/font.css"
import burger from "../assets/burgerMenu.svg"
import ATpartnersLogo from "../assets/ATpartnersLogo.png"
import ATmain from "../assets/ATpartnersMain.jpg";
import { Link } from "react-router-dom";

export default function NavBarDesktop() {

    return (
        <>
        <nav className={styles.navDesktop}>
            <div className={styles.logoContainer}>
            <img src={burger} alt="" className={styles.burger} />
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
        <section className={styles.picturePresentation}>
        <div className={styles.headerPhoto}>
          <img src={ATmain} alt="" className={styles.mainPicture} />
          <div className={styles.fullTextIntro}>
          <p className={styles.textIntro}>
            Nous bâtissons. <br /> Nous nous engageons sur la qualité.
          </p>
          <p className={styles.introSecond}>
            ATcompany est une entreprise professionnelle qui regroupe trois
            entreprise: <br /> ATservices, ATimmobilier ainsi que ATpromotion. <br /> Nous
            vous aidons a réaliser vos projets.
          </p>
          </div>
          <Link className={styles.discoverButtonLink}
          to={{
            pathname: "/test",
          }}>
          <button className={styles.discoverButton}>Découvrir nos réalisations &nbsp; &nbsp; &gt;&gt;</button>
          </Link>
        </div>
      </section>
        </>
    )
}