import styles from "./Footer.module.css";
import LocationLogo from "../assets/locationLogo.png";
import phoneLogo from "../assets/phoneLogo.png";

export default function Footer() {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.footerMainContainer}>
          <hr className={styles.hr} />
          <div className={styles.allFooterContent}>
            <div className={styles.allfooterDescriptionContent}>
          <h2 className={styles.footerTitle}>ATPartners</h2>
          <p className={styles.footerDescription}>
            ATpartners is a company specialised in the design, the manufacture
            and the fitting of all kinds of containment: partition walls,
            ceilings, glasses, doors or even false floors.Whatever the
            constraints of your work environment, we adapt our solutions to
            propose you reliable and customised creations.
          </p>
          </div>
          <div className={styles.allIInformationsFooterContent}>
          <h2 className={styles.footerTitle}>INFORMATION</h2>
        
        <div className={styles.generaleInformation}>
            <div className={styles.logoTitle}>
          <img src={LocationLogo} alt="" className={styles.adressImg} />
          <h3 className={styles.evry}>Evry (france)</h3>
          </div>
          <p className={styles.adress}>23 ALL GABRIELLE COLETTE 95330 DOMONT</p>
        </div>
        <div className={styles.generaleInformation}>
        <div className={styles.logoTitle}>
          <img src={phoneLogo} alt="" className={styles.adressImg} />
          <h3 className={styles.evry}>PHONE NUMBER</h3>
          </div>
          <p className={styles.phoneNumber}>+33 (0)7 89 01 01 94</p>
        </div>
        </div>
        <div className={styles.allSiteMapContent}>
        <h2 className={styles.footerTitle}>SITEMAP</h2>
        <div className={styles.footerLinks}>
        <a className={styles.aLinks} href="/">
            ATpartners
          </a>
          <a className={styles.aLinks} href="/ATservices">
            ATservices
          </a>
          <a className={styles.aLinks} href="">
            ATimmobilier
          </a>
          <a className={styles.aLinks} href="">
            ATpromotion
          </a>
          <a className={styles.aLinks} href="/contact">
            Contact
          </a>
          <a className={styles.aLinks} href="">
            Politique de cookies (UE)
          </a>
        </div>
        </div>
        </div>
        <hr className={styles.hr} />
        <p className={styles.footerEnding}>
          ©2024 ATpartners – <a className={styles.coloredWords} href="">Mentions légales</a>
        </p>
        </div>
      </section>
    </>
  );
}
