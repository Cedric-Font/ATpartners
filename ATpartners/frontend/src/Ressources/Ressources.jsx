import styles from "./Ressources.module.css";
import shema from "../assets/shema.png";
import formBackground from "../assets/formBackground.jpg";

export default function Ressources() {
  return (
    <>
      <section className={styles.RessoucesSection} id="nosmoyenshumains">
        <div className={styles.ressourcesTextContainer}>
          <h2 className={styles.ressourcesTitle}>NOS MOYENS HUMAINS</h2>
          <p className={styles.ressourcesText}>
            Valentin Espace de Vie est composée d’hommes d’expérience qui
            assurent une qualité de mise en œuvre et un suivi efficace de chaque
            projet.
          </p>
        </div>
        <div className={styles.shemaContainer}>
          <img src={shema} alt="" className={styles.shema} />
        </div>
        <p className={styles.ressourcesDescription}>
          Tous les salariés sont formés aux travaux en hauteur et à
          l'utilisation du harnais, la plupart d'entre eux possèdent également
          du CACES R482, cat. F , R486, cat. A,B et R389, cat. 3. Notre
          entreprise dispose de 15 véhicules et d'outils professionnels adaptés
          à tous les besoins. La société étant en plein développement, la liste
          des moyens est en constante évolution. Cela permet une grande mobilité
          et efficacité des équipes et permet de réaliser de 10 à 15 projets
          simultanément.
        </p>
        <img src={formBackground} alt="" className={styles.ressourcesBackground}/>
      </section>
    </>
  );
}
