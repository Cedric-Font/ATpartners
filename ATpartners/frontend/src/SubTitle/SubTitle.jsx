import React, { useState, useEffect } from "react";
import styles from "./SubTitle.module.css";

export default function SubTitle({ title, top }) {
    const [largeur, setLargeur] = useState(window.innerWidth);
    const [margin, setMargin] = useState(top);

    useEffect(() => {
        const handleResize = () => {
            setLargeur(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (largeur < 1000) {
            setMargin("50px");
        } else {
            setMargin(top);
        }
    }, [largeur, top]);

    const hrStyle = { marginTop: margin };

    return (
        <hr id={title} className={styles.hr} title={title} style={hrStyle} />
    );
}
