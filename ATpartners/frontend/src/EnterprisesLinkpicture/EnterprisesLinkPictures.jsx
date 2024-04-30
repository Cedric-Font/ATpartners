import styles from "./EnterprisesLinkPictures.module.css";
import ATservices from "../assets/ATservices.jpg";
import ATimmobilier from "../assets/ATimmobilier.jpg";
import ATpromotion from "../assets/ATpromotion.jpg";
import { Link } from "react-router-dom";

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
            <Link className={styles.link} to={{
                pathname: "/test",
            }}>
            <img src={linkPictures[pictures].src} alt="" className={styles.ATpicture} />
            <h2 className={styles.ATtitle}>{linkPictures[pictures].alt}</h2>
            </Link>
        </div>
        </>
    )
}