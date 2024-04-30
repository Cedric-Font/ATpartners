import styles from "./Realisation.module.css";
import { useState, useEffect } from "react";

export default function Realisations({title, content, picture, direction}) {

        // const [textRadius, setTextRadius] = useState("0px 10px 10px 0px")
        // const [pictureRadius, setPictureRadius] = useState("10px 0px 0px 10px")
        // const [display, setDisplay] = useState("row")
        // const [RealisationsPicture, setRealisationsPicture] = useState("test")
        // // let textRadius = "0px 10px 10px 0px"
        // // let pictureRadius = "10px 0px 0px 10px"
        // useEffect(() => {
        //     if (direction === "row-reverse") {
        //         setDisplay("row-reverse");
        //         setTextRadius("0px 10px 10px 0px");
        //         setPictureRadius("10px 0px 0px 10px");
        //     } else {
        //         setTextRadius("10px 0px 0px 10px");
        //         setPictureRadius("0px 10px 10px 0px");
        //     }
        // }, [direction]);
        let reverse = direction ? "reverse" : ""
        const global = `${reverse}RealisationsGlobal`
        const text = `${reverse}RealisationsText`
        const image = `${reverse}RealisationsPicture`
        const Title = `${reverse}RealisationsTitle`
        const Content = `${reverse}RealisationsContent`
        console.log(direction)
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