import style from "./AboutUs.module.css";
import ProjectPicture from "../assets/salleBlanche1.jpg";
import ProjectPicture2 from "../assets/salleBlanche2.jpg";

export default function AboutUs() {

    return(
        <>
            <section className={style.aboutSection}>
                <div className={style.aboutPart1}>
                <div className={style.aboutContainer}>
                    <h2 className={style.titleABout} >ATpartners</h2>
                    <p className={style.aboutText}>
                    Depuis 1966, ATpartners met ses compétences au service des industriels et des professionnels travaillant en environnement contrôlé. De l'étude de votre projet à sa mise en œuvre, nous vous conseillons au mieux et vous accompagnons avec rigueur, professionnalisme et de très hauts standards de qualité. Notre expertise nous permet de déployer notre savoir-faire aussi bien sur des projets neufs que dans un contexte de redéveloppement.
                    </p>
                </div>
                <div className={style.pictureOver}>
                    <img src={ProjectPicture} alt="" className={style.backPicture} />
                    <div className={style.textContainer} >
                    <p className={style.overText}>200+</p>
                    <p className={style.overSubText}>projets à notre actif</p>
                    </div>
                </div>
                </div>
                <div className={style.aboutPart2}>
                <div className={style.pictureOver2}>
                    <img src={ProjectPicture2} alt="" className={style.backPicture} />
                    <div className={style.textContainer2} >
                    <p className={style.overText}>80 colaborateur</p>
                    <p className={style.overSubText}>collaborateurs qui nous font confiance</p>
                    </div>
                </div>
                <div className={style.aboutContainer2}>
                <p className={style.aboutText}>
                    Nous mobilisons nos ressources pour développer des solutions sur mesure qui répondent aux besoins de chaque entreprise dont la production implique des conditions de fabrication spécifiques. Portes, cloisons, vitrages ou encore plafonds et équipements annexes : notre savoir-faire vous assure de maîtriser la chaîne de production de vos éléments pour salles blanches, laboratoires ou chambres froides. Nous développons des solutions performantes pour répondre en tous points à vos exigences d’étanchéité, de résistance au feu, de régulation de température, d’humidité, de surpression ou de dépression.
                    </p>
                </div>
                </div>
            </section>
        </>
    )
}