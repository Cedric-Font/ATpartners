import styles from "./Realisation.module.css";
import { useState, useEffect } from "react";

export default function Realisations({title, content, picture, direction}) {
    const [isFullscreen, setIsFullscreen] = useState(false);
        let reverse = direction ? "reverse" : ""
        const global = `${reverse}RealisationsGlobal`
        const text = `${reverse}RealisationsText`
        const image = `${reverse}RealisationsPicture`
        const Title = `${reverse}RealisationsTitle`
        const Content = `${reverse}RealisationsContent`

        const toggleFullscreen = () => {
            setIsFullscreen(!isFullscreen);
        };
    return(
        <>
            <div className={styles.mainRealisationContainer}>
                <div className={styles[global]} onClick={toggleFullscreen}>
                    <div className={styles[text]}>
                        <h2 className={styles[Title]}>{title}</h2>
                        <p className={styles[Content]}>{content}</p>
                    </div>
                    <img 
                        src={picture} 
                        alt="Realisation" 
                        className={styles[image]} 
                    />
                </div>
            </div>
            <div 
                className={`${styles.fullscreenOverlay} ${isFullscreen ? styles.show : ''}`} 
                onClick={toggleFullscreen}
            >
                <img 
                    src={picture} 
                    alt="Realisation" 
                    className={`${styles.fullscreenImage} ${isFullscreen ? styles.show : ''}`} 
                />
            </div>
        </>
    )
}