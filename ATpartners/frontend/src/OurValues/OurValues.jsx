import styles from "./OurValues.module.css";

export default function OurValues() {
  return (
    <>
      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <h2 className={styles.valuesTitle}>NOS VALEURS ET ENGAGEMENTS</h2>
          <p className={styles.valuesText}>
            La société Valentin Espace de Vie est animée au quotidien autour de
            4 valeurs que l’ensemble des collaborateurs partagent. Ces
            engagements nous permettent de réaliser vos projets en toute
            sérénité et d’assurer votre satisfaction.
          </p>
        </div>
      </section>
    </>
  );
}
