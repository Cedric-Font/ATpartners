import styles from "./AboutATservices.module.css";
import ATservicesMain from "../assets/AtservicesHeader.jpg";

export default function AboutATservices() {

    return(
        <>
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
        </>
    )
}