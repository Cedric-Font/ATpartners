import styles from "./Form.module.css";
import { useState } from "react";
import NavMobile from "../navBarMobile/NavMobile";
import formBackground from "../assets/formBackground.jpg";
import Footer from "../footer/Footer";
import FormVerification2 from "./FormVerification";
import correct from "../assets/correct.png";

export default function Form() {
  const [unlock, setUnlock] = useState(false);
  const formVerification = FormVerification2();
    const ranges = [
        {
          value: "Nom",
          state: formVerification.pseudo,
          text: "Nom",
          function: formVerification.handleChangePseudo,
          small: formVerification.falsePseudo,
          class: "input",
          checked: formVerification.pseudo && !formVerification.falsePseudo ? true : false,
        },
        {
          value: "Prénom",
          state: formVerification.firstname,
          text: "Prénom",
          function: formVerification.handleChangeFirstname,
          small: formVerification.falseFirstname,
          class: "input",
          checked: formVerification.firstname && !formVerification.falseFirstname ? true : false,
        },
        {
            value: "Numero de téléphone",
            state: formVerification.phoneNumber,
            text: "Numéron de téléphone",
            function: formVerification.handlePhoneNumberChange,
            small: formVerification.phoneNumberError,
            class: "input",
            checked: formVerification.phoneNumber && !formVerification.phoneNumberError ? true : false,
          },
        {
          value: "email",
          state: formVerification.email,
          text: "Email",
          function: formVerification.handleChangeEmail,
          small: formVerification.falseEmail,
          class: "input",
          checked: formVerification.email && !formVerification.falseEmail ? true : false,
        },
        {
          value: "Nom de l'entreprise",
          state: formVerification.enterpriseName,
          text: "Nom de l'entreprise",
          function: formVerification.handleEnterpriseName,
          small: formVerification.falseEnterpriseName,
          class: "input",
          checked: formVerification.enterpriseName ? true : false,
        }
      ];
      console.log(ranges[0].checked)

  return (
    <div className={styles.fullFormContent}>
      <NavMobile />
      <section className={styles.formHeader}>
        <div className={styles.mainPicture}>
          <img src={formBackground} alt="" className={styles.formBackground} />
          <div className={styles.gradient}></div>
          <div className={styles.textContainer}>
            <h2 className={styles.textIntro}>
              Contactez nous pour avoir plus d’information
            </h2>
            <p className={styles.textIntroSecond}>
              N’hésitez pas a contactez nos équipe, nous reviendrons vers vous
              rapidement après votre demande. <br />
              Vous trouverez ci-dessous toutes les informations nécessaire.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.formSection}>
        <div className={styles.formBlur}>
          <h2 className={styles.contactUs}>
            Contactez <br /> nous
          </h2>
          <form action="" className={styles.formInput}>
          {ranges.map((e) => (
            <div  className={styles.inputContainer} key={e.text}>
                <input
                  type="text"
                  name={e.value}
                  id={e.value}
                  className={styles[e.class]}
                  placeholder={e.text}
                  value={e.state}
                  onChange={e.function}
                  required
                />
                <div className={`${styles.correctContainer} ${e.checked ? "" : styles.hidden}`} >
                  <img src={correct} alt="" className={styles.correct} />
                </div>
                <p>{e.small}</p>
                </div>
            ))}
            {/* <input type="text" className={styles.input} placeholder="Nom" />
            <input type="text" className={styles.input} placeholder="Prénon" />
            <input
              type="text"
              className={styles.input}
              placeholder="Numero de téléphone"
            />
            <input
              type="email"
              className={styles.input}
              placeholder="Adress Email"
            /> */}
            <div className={styles.selectContainer}>
              <select name="country" id="" className={styles.select}>
                <option
                  value=""
                  className={styles.selectedDefaultValue}
                  selected
                  disabled
                  hidden
                >
                  Pays
                </option>
                <option value="France">france</option>
                <option value="Belgique">Belgique</option>
                <option value="Angleter">Angleter</option>
                <option value="Alemagne">Alemagne</option>
                <option value="Italie">Italie</option>
              </select>
              <div className={styles.iconContainer}>
                <i className={styles.selectIcon}>&#x2304;</i>
              </div>
            </div>
            {/* <input
              type="text"
              id="company"
              className={styles.input}
              placeholder="Nom de l'entreprise"
            /> */}
            <textarea
              type="text"
              className={styles.input}
              placeholder="Message"
            />
            <button type="submit" disabled={!formVerification.isFormValid} className={`${styles.submitButton} ${!formVerification.isFormValid ? styles.disabled : styles.unlockSubmitButton}`}>
              Envoyer
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
