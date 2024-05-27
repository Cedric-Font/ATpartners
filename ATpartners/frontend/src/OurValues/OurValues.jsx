import styles from "./OurValues.module.css";
import valuesBackground from "../assets/valuesBackground.png";
import shaking from "../assets/shaking.svg";
import map from "../assets/map.svg";
import lock from "../assets/lock.svg";
import quality from "../assets/quality.svg";

export default function OurValues() {

    const logoTab = [
        {
            image: map,
            number: "1.",
            title: "test",
            text: "MOBILITE",
            color : "#0556CE",
            content: "Peu importe la localisation, que ce soit en France ou à l'étranger, nous réaliserons votre projet sans problème. L’expérience sur le terrain et des chefs d'équipe expérimentés permettront d'atteindre l'objectif souhaité."

        },
        {
            image: lock,
            number: "2.",
            title: "test",
            text: "SECURITE",
            color : "#3888FF",
            content: "Quel que soit la situation, la sécurité et la santé de nos hommes et des intervenants doit être assuré. La sécurité sur nos chantiers est notre priorité. Avant chaque démarrage de chantier, les risques sont étudiés et les moyens sont mis en œuvre pour assurer la bonne santé de nos collaborateurs."
        },
        {
            image: shaking,
            number: "3.",
            title: "test",
            text: "CONFIANCE",
            color : "#0556CE",
            content: "Le développement et la pérennité de la société passe par des relations de confiance en continu, que ce soit entrecollaborateurs en interne ou entre les intervenants sur un même projet (client, architecte, fournisseurs.). Notre politique de transparence vis-à-vis de tous les intervenants nous permet d’établir cette confiance qui est indispensable au bon déroulement d’un projet."
        },
        {
            image: quality,
            number: "4.",
            title: "test",
            text: "QUALITE",
            color : "#3888FF",
            content: "Nous sommes persuadés que nos meilleurs ambassadeurs sont nos clients. La satisfaction de nos clients est notre priorité commerciale. La qualité de nos ouvrages est assurée par le savoir-faire de nos hommes, par la mise en œuvre des meilleurs matériaux, par un suivi quotidien et par l’écoute permanente des souhaits du client."
        }
    ]
  return (
    <>
      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <h2 className={styles.valuesTitle} id="nosvaleurs">NOS VALEURS ET ENGAGEMENTS</h2>
          <p className={styles.valuesText}>
            La société Valentin Espace de Vie est animée au quotidien autour de
            4 valeurs que l’ensemble des collaborateurs partagent. Ces
            engagements nous permettent de réaliser vos projets en toute
            sérénité et d’assurer votre satisfaction.
          </p>
        </div>
        <div className={styles.valuesAllLogos}>
            <div className={styles.test}>
            <img src={valuesBackground} alt="" className={styles.valuesImg} />
            </div>
            <div className={styles.logoContainer}>
                {logoTab.map((logo, index) => {
                    return (
                        <div key={index} className={`${styles.logoMain} ${styles[`index${index}`]}`}>
                        <div className={styles.logo} style={{backgroundColor:logo.color}}>
                            <img src={logo.image} alt="" className={styles.logoImg} style={{backgroundColor:logo.color}} />
                            <div className={styles.logoTextContainer}>
                            <p className={styles.logoNumber}>{logo.number}</p>
                            <p className={styles.logoText}>{logo.text}</p>
                            </div>
                        </div>
                        <p className={styles.logoContent}>{logo.content}</p>
                        <hr className={styles.hr}></hr>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>
    </>
  );
}
