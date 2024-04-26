import styles from "./NavMobile.module.css";
import burger from "../assets/burgerMenu.svg";
import ATpartnersLogo from "../assets/ATpartnersLogo.png";
import ATmain from "../assets/ATpartnersMain.jpg";

export default function NavMobile() {
  return (
    <>
      <nav className={styles.navMobile}>
        <img src={ATpartnersLogo} alt="" className={styles.ATpartnersLogo} />
        <h2 className={styles.ATtitle}>ATpartners</h2>
        <img src={burger} alt="" className={styles.burger} />
      </nav>
      <section>
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
          <button className={styles.discoverButton}>Découvrir nos réalisations &nbsp; &nbsp; &gt;&gt;</button>
        </div>
      </section>
    </>
  );
}