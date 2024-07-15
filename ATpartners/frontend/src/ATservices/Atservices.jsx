import styles from "./Atservices.module.css";
import NavMobile from "../navBarMobile/NavMobile";
import NavBarDesktop from "../navBarDesktop/NavBarDesktop";
import ATservicesMain from "../assets/AtservicesHeader.jpg";
import { Link } from "react-router-dom";
import imageWave from "../assets/imageWave.svg";
import sale from "../assets/sale.svg";
import grue from "../assets/grue.svg";
import flask from "../assets/flask.svg";
import ble from "../assets/ble.svg";
import reference from "../assets/reference.jpg";
import Footer from "../footer/Footer";
import FormBackground from "../assets/formBackground.jpg";
import FormBackground2 from "../assets/formBackground2.png";
import { FaCircleArrowUp } from "react-icons/fa6";

export default function Atservices() {
  const iconTab = [
    {
      icon: sale,
      number: "2 600 000 €",
      text: "de chifre d'affaire",
    },
    {
      icon: grue,
      number: "100+",
      text: "Projets réalisés",
    },
    {
      icon: flask,
      number: "40 000 m2",
      text: "panneaux salle blanche",
    },
    {
      icon: ble,
      number: "35 000 m2",
      text: "panneaux agro",
    },
  ];

  const referencesTab = [
    {
        image: reference,
        text: "CATALENT4031, GOSSELIES (Belgique) DATE : JANVIER-MAI 2022 CHIFFRE D’AFFAIRES : 462 937,50 €",
    },
    {
        image: reference,
        text: "YPOSKESI 91100, CORBEIL-ESSONES DATE : MAI-DECEMBRE 2022 CHIFFRE D’AFFAIRES : 324 877,50 €",
    },
    {
        image: reference,
        text: "ATELIER INOVE 45500, SAINT DENIS DE L’HOTEL DATE : MARS-MAI 2022 CHIFFRE D’AFFAIRES : 83 000,00 €",
    }
  ];

  function scroll(text) {
    const element = document.getElementById(text);
    if (element) {
        const { top } = element.getBoundingClientRect();
        const offset = top + window.scrollY - 100; // Décalage de 100 pixels au-dessus de l'élément
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }, 100);
        console.log(text);
    }
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.ATservicesMainContainer}>
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
            <button className={styles.discoverButton} onClick={()=>scroll("references")}>
              Découvrir nos réalisations &nbsp; &nbsp; &gt;&gt;
            </button>
        </div>
      </section>
      <section className={styles.bodyContainer}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.aboutTitle}>Qui sommes-nous ?</h2>
          <p className={styles.aboutText}>
            ATServices est une entreprise de BTP qui intervient dans le domaine
            d’installation de panneaux sandwich et menuiseries isothermes. Avec
            une expérience de 15 ans dans ce domaine, Valentin Espace de Vie
            maîtrise tous les types d’isolation, qu’il s’agisse du froid, du feu
            ou des contaminations microbiologiques et particulaires. Nous
            pouvons ainsi installer une large gamme de salles propres, enceintes
            isothermes, installations techniques complexes et chambres froides
            dans toute la France et à l’étranger. Nous sommes basés à Domont
            dans le Val- d’Oise (95) et nous dans toute la France et à
            l’étranger. Nous nous efforçons de pérenniser et de développer notre
            réseau en plaçant la satisfaction du client au centre de nos
            priorités.
          </p>
        </div>
        <div className={styles.waveMainBackground}>
          <div className={styles.waveContainer}>
            <div className={styles.pohotContainer}>
            <img src={imageWave} alt="" className={styles.imageWave} />
            
            <img src={FormBackground} alt="" className={styles.formBackgroundDesktop}/>
            <div className={styles.gradient2}>
            </div>
            <div className={styles.customshapedividertop}>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg"><path d="M 0,700 L 0,262 C 150.66666666666663,314.4 301.33333333333326,366.8 478,351 C 654.6666666666667,335.2 857.3333333333335,251.20000000000002 1022,225 C 1186.6666666666665,198.79999999999998 1313.3333333333333,230.39999999999998 1440,262 L 1440,700 L 0,700 Z" stroke="none" fill="#3696f7">
                </path>
                </svg>
            </div>
            <div className={styles.customshapedividertop2}>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg"><path d="M 0,700 L 0,262 C 188,308.1333333333333 376,354.2666666666667 519,343 C 662,331.7333333333333 760,263.06666666666666 906,240 C 1052,216.93333333333334 1246,239.46666666666667 1440,262 L 1440,700 L 0,700 Z" stroke="none" fill="#00bad3" className={styles.fillShape2}>
                </path>
                </svg>
            </div>
            </div>
            {/* <img src={waveClaire} alt="" className={styles.waveClaire}/>
           <img src={wave} alt="" className={styles.wave} /> */}
           
          </div>
          <div className={styles.logoContainer}>
            {iconTab.map((icon, index) => (
              <div key={index} className={styles.fullIcon}>
                <img src={icon.icon} alt="" className={styles.iconImg} />
                <p className={styles.iconNumber}>{icon.number}</p>
                    <p className={styles.iconText}>{icon.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.downWave}>
             <div className={styles.waveContainer}>
            <div className={styles.pohotContainer}>
            <div className={styles.customshapedividertop}>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" ><path d="M 0,700 L 0,262 C 150.66666666666663,314.4 301.33333333333326,366.8 478,351 C 654.6666666666667,335.2 857.3333333333335,251.20000000000002 1022,225 C 1186.6666666666665,198.79999999999998 1313.3333333333333,230.39999999999998 1440,262 L 1440,700 L 0,700 Z" stroke="none" fill="#3696f7">
                </path>
                </svg>
            </div>
            <div className={styles.customshapedividertop3}>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" ><path d="M 0,700 L 0,262 C 188,308.1333333333333 376,354.2666666666667 519,343 C 662,331.7333333333333 760,263.06666666666666 906,240 C 1052,216.93333333333334 1246,239.46666666666667 1440,262 L 1440,700 L 0,700 Z" stroke="none" fill="#00bad3">
                </path>
                </svg>
            </div>
            </div>
          </div>
          </div>
          <p className={styles.references} id="references">réferences</p>
        </div>
      </section>
      <section className={styles.referenceContainer}>
        <div className={styles.referenceMap}>
            {referencesTab.map((reference, index) => (
                <div key={index} className={styles.reference}>
                    <img src={reference.image} alt="" className={styles.referenceImage} />
                    <p className={styles.referenceText}>{reference.text}</p>
                </div>
            ))}
        </div>
        <div className={styles.moreInformation}>
            <h2 className={styles.moreTitle}>Vous souaithez en savoir plus sur ATservices ?</h2>
            <p className={styles.moreText}>Venez découvrir comment fonctionne ATservices ainsi que ses objectifs et ses engagements</p>
            <Link to={{pathname: "/AboutATservices"}}>
            <button className={styles.moreInformationBtn}>En savoir plus &nbsp; &gt;&gt;</button>
            </Link>
        </div>
      </section>
            <Footer />
            <button className={styles.scrollToTop} onClick={scrollToTop}>
        <span className={styles.scrollToTopIcon}><FaCircleArrowUp /></span>
      </button>
    </div>
  );
}
