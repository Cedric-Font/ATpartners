import styles from "./HeaderContent.module.css";
import ATmain from "../assets/ATpartnersMain.jpg";
import { Link } from "react-router-dom";

export default function HeaderContent( {mainPicture} ) {

  function scroll() {
    const element = document.getElementById("nosrealisations");
    const { top } = element.getBoundingClientRect();
    const offset = top + window.scrollY - 100; // Décalage de 100 pixels au-dessus de l'élément
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }, 100);
  }

    return(
<section className={styles.picturePresentation}>
        <div className={styles.headerPhoto}>
          <img src={mainPicture} alt="" className={styles.mainPicture} />
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
          {/* <Link className={styles.discoverButtonLink}
          to={{
            pathname: "/test",
          }}> */}
          <button className={styles.discoverButton} onClick={scroll}>Découvrir nos réalisations &nbsp; &nbsp; &gt;&gt;</button>
          {/* </Link> */}
        </div>
      </section>
    )
}