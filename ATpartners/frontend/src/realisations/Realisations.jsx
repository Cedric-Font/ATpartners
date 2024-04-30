import style from "./Realisation.module.css";

export default function Realisations({title, content, picture}) {

    return(
        <>
        <div className={style.mainRealisationContainer}>
            <div className={style.realisationGlobal}>
        <div className={style.RealisationsText}>
            <h2 className={style.RealisationsTitle}>{title}</h2>
            <p className={style.RealisationsContent}>{content}</p>
        </div>
        <img src={picture} alt="" className={style.RealisationsPicture}/>
        </div>
        </div>
        </>
    )
}