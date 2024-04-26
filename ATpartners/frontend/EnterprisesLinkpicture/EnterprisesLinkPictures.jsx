import styles from "./EnterprisesLinkPictures.module.css";
import ATservices from "../src/assets/ATservices.jpg";

export default function EnterprisesLinkPictures() {

    return (
        <>
        <div className={styles.linksPictures}>
            <img src={ATservices} alt="" />
        </div>
        </>
    )
}