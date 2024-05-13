import styles from "./Atservices.module.css";
import NavMobile from "../navBarMobile/NavMobile";
import NavBarDesktop from "../navBarDesktop/NavBarDesktop";
import HeaderContent from "../HeaderContent/HeaderContent";
import ATservicesMain from "../assets/AtservicesHeader.jpg";
import { Link } from "react-router-dom";

export default function Atservices() {
  return (
    <>
      <NavMobile />
      <NavBarDesktop />
      <section className={styles.ATservicesheader}>
        <div className={styles.mainPicture}>
          <img src={ATservicesMain} alt="" className={styles.formBackground} />
          <div className={styles.gradient}></div>
          <div className={styles.textContainer}>
            <h2 className={styles.textIntro}>
              Nous bâtissons <br /> Nous nous engageons sur la qualité.
            </h2>
            <p className={styles.textIntroSecond}>
              ATcompany est une entreprise professionnelle qui regroupe trois
              entreprise: ATservices, ATimmobilier ainsi que ATpromotion. Nous
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
  );
}
