import styles from "./Realisation.module.css";
import { useState, useEffect } from "react";

export default function Realisations({title, content, picture, direction}) {
        let reverse = direction ? "reverse" : ""
        const global = `${reverse}RealisationsGlobal`
        const text = `${reverse}RealisationsText`
        const image = `${reverse}RealisationsPicture`
        const Title = `${reverse}RealisationsTitle`
        const Content = `${reverse}RealisationsContent`
    return(
        <>
        <div className={styles.mainRealisationContainer}>
            <div className={styles[global]}>
        <div className={styles[text]}>
            <h2 className={styles[Title]}>{title}</h2>
            <p className={styles[Content]}>{content}</p>
        </div>
        <img src={picture} alt="" className={styles[image]}/>
        </div>
        </div>
        </>
    )
}