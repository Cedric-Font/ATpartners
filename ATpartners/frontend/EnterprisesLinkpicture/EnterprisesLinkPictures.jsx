import styles from "./EnterprisesLinkPictures.module.css";
import ATservices from "../src/assets/ATservices.jpg";
import ATimmobilier from "../src/assets/ATimmobilier.jpg";
import ATpromotion from "../src/assets/ATpromotion.jpg";

export default function EnterprisesLinkPictures( {pictures} ) {

    const linkPictures = {
        ATservices:{
            src: ATservices,
            alt: "AT services"
        },
        ATimmobilier:{
            src: ATimmobilier,
            alt: "AT immobilier"
        },
        ATpromotion:{
            src: ATpromotion,
            alt: "AT promotion"
        }
    }

    return (
        <>
        <div className={styles.linksPictures}>
            <img src={linkPictures[pictures].src} alt="" className={styles.ATpicture} />
            <h2 className={styles.ATtitle}>{linkPictures[pictures].alt}</h2>
        </div>
        </>
    )
}