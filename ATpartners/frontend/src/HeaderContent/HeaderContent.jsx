import styles from "./HeaderContent.module.css";
import ATmain from "../assets/ATpartnersMain.jpg";
import { Link } from "react-router-dom";

export default function HeaderContent() {

    return(
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
    )
}