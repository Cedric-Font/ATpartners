import styles from "./TestAbout.module.css";
import ProjectPicture from "../assets/salleBlanche1.jpg";

export default function TestAbout() {
  return (
    <>
      <div className={styles.MainContainer}>
        <img src={ProjectPicture} alt="" className={styles.AboutImg} />
        <div className={styles.rounded}>
          <h2 className={styles.titleABout}>ATpartners</h2>
          <p className={styles.aboutText}>
            Depuis 1966, ATpartners met ses compétences au service des
            industriels et des professionnels travaillant en environnement
            contrôlé. De l'étude de votre projet à sa mise en œuvre, nous vous
            conseillons au mieux et vous accompagnons avec rigueur,
            professionnalisme et de très hauts standards de qualité. Notre
            expertise nous permet de déployer notre savoir-faire aussi bien sur
            des projets neufs que dans un contexte de redéveloppement.
          </p>
        </div>
      </div>
    </>
  );
}
