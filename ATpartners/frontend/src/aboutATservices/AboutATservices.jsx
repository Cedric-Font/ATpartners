import styles from "./AboutATservices.module.css";
import ATservicesMain from "../assets/AtservicesHeader.jpg";
import SubTitle from "../SubTitle/SubTitle";
import NavMobile from "../navBarMobile/NavMobile";
import OurValues from "../OurValues/OurValues";
import Footer from "../footer/Footer";

export default function AboutATservices() {
  const objectifsTab = [
    {
      number: "1.",
      text: "• Fidéliser et développer notre clientèle",
    },
    {
      number: "2.",
      text: "• Ouvrir une succursale dans le sud de la France pour avoir une plus grande mobilité des équipes et un contact plus étroit avec les clients.",
    },
    {
      number: "3.",
      text: "• Se développer dans toute la communauté de l’UE. Pour atteindre ces objectifs, nous plaçons la satisfaction du client au cœur de nos priorités. Cela passe, entre autres, par une écoute permanente et une qualité d’exécution quotidienne.",
    },
  ];
  return (
    <div className={styles.mainAboutATservices}>
      <NavMobile />
      <section className={styles.AboutATservicesHeaderSection}>
        <div className={styles.mainPictureContainer}>
          <img src={ATservicesMain} alt="" className={styles.mainPicture} />
          <div className={styles.gradient}></div>
          <div className={styles.titleContent}>
            <h2 className={styles.title}>AT</h2>
            <h2 className={styles.title}>Services</h2>
          </div>
          <div className={styles.headerTextContainer}>
            <p className={styles.item}>Qualité</p>
            <p className={styles.item}>Confiance</p>
            <p className={styles.test}>Experience</p>
          </div>
        </div>
      </section>
      <section className={styles.bodyContainer}>
        <div className={styles.objectif}>
          <SubTitle title="Nos objectifs" />
          <p className={styles.objectifText}>
            La société Valentin Espace de Vie connait un réel succès depuis sa
            création en 2008 et devient une entreprise incontournable du
            secteur.
          </p>
          <p className={styles.objectifText}>
            Les objectifs de développement ont été atteints chaque année et la
            société se place déjà parmi les entreprises française les plus
            connues et appréciées dans le domaine de montage de panneaux et
            menuiseries isothermes. Pour les prochaines années, nos objectifs
            sont de:
          </p>
        </div>
        <div className={styles.mapContainer}>
          {objectifsTab.map((objectif, index) => {
            return (
              <div className={styles.objectifContainer} key={index}>
                <div className={styles.objectifNumber}>{objectif.number}</div>
                <p className={styles.objectifParg}>{objectif.text}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.valueContainer}>
            <OurValues />
          {/* <h2 className={styles.valueTitle}>NOS VALEURS ET ENGAGEMENTS</h2>
          <p className={styles.valueText}>
            La société Valentin Espace de Vie est animée au quotidien autour de
            4 valeurs que l’ensemble des collaborateurs partagent. Ces
            engagements nous permettent de réaliser vos projets en toute
            sérénité et d’assurer votre satisfaction.
          </p> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}
