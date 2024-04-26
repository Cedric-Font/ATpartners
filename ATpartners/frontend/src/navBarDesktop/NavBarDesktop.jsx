import styles from "./NavBarDesktop.module.css";
import "../../src/font.css"
import burger from "../assets/burgerMenu.svg"
import ATpartnersLogo from "../assets/ATpartnersLogo.png"

export default function NavBarDesktop() {

    return (
        <>
        <nav className={styles.navDesktop}>
            <div className={styles.logoContainer}>
            <img src={burger} alt="" className={styles.burger} />
            <img src={ATpartnersLogo} alt="" className={styles.ATpartnersLogo} />
            <h2 className={styles.ATtitle}>ATpartners</h2>
            </div>
            <ul>
                <li>home</li>
                <li>ATservices</li>
                <li>ATimmobilier</li>
                <li>ATpromotion</li>
            </ul>
            <button className={styles.contactutton}>Contact</button>
        </nav>
        </>
    )
}