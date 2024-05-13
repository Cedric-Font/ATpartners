import styles from "./Form.module.css";
import NavMobile from "../navBarMobile/NavMobile";
import formBackground from "../assets/formBackground.jpg";
import Footer from "../footer/Footer";
import FormVerification2 from "./FormVerification";
import correct from "../assets/correct.png";
import redCross from "../assets/redCross.png";
import { useState } from "react";

export default function Form() {
  const formVerification = FormVerification2();
  const [focus, setFocus] = useState(false)
  const [focusStates, setFocusStates] = useState({
    Nom: false,
    Prénom: false,
    phoneNumber: false,
    email: false,
    enterpriseName: false,
    country: false,
  });

  // const handleFocusChange = (fieldName, isFocused, e) => {
  //   setFocusStates((prevFocusStates) => ({
  //     ...prevFocusStates,
  //     [fieldName]: isFocused,
  //   }));
  // if(e.target.value <= 0){
  //   setFocusStates((prevFocusStates) => ({
  //     ...prevFocusStates,
  //     [fieldName]: true,
  //   }));
  //   console.log("coucou")
  // }
  //   console.log(focusStates)
  // };
  const handleFocusChange = (fieldName, isFocused, value, e) => {
    if (!isFocused && !value.trim()) {
      setFocusStates((prevFocusStates) => ({
        ...prevFocusStates,
        [fieldName]: false,
      }));
    } else {
      setFocusStates((prevFocusStates) => ({
        ...prevFocusStates,
        [fieldName]: true,
      }));
      e.placeHolder = ""
    }
  };

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
            value: "phoneNumber",
            state: formVerification.phoneNumber,
            text: "Numéro de téléphone",
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
          value: "enterpriseName",
          state: formVerification.enterpriseName,
          text: "Société",
          function: formVerification.handleEnterpriseName,
          small: formVerification.falseEnterpriseName,
          class: "input",
          checked: formVerification.enterpriseName ? true : false,
        },
        {
          value: "country",
          state: formVerification.enterpriseName,
          text: "Pays",
          function: formVerification.handleCountry,
          small: formVerification.falseEnterpriseName,
          class: "select",
          checked: formVerification.selectedCountry ? true : false,
        }
      ];
      // console.log(ranges[0].checked)

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
            <div className={styles.mapContainer}>
          {ranges.map((e) => (
            <div  className={styles.inputContainer} key={e.text}>
              <h2 className={`${styles.inputTitle} ${focusStates[e.value] ? styles.inputTitleDisplayed : ""}`}>{e.text}</h2>
              {e.class === "input" ?
                <input
                  type="text"
                  name={e.value}
                  id={e.value}
                  className={styles[e.class]}
                  placeholder={focusStates[e.value] ? "" : e.text}
                  value={e.state}
                  onChange={e.function}
                  onFocus={() => handleFocusChange(e.value, true, e.state)}
                  onBlur={() => handleFocusChange(e.value, false, e.state)}
                  required
                /> : <div className={styles.selectContainer}>
                <select name="country" id="countrySelect" className={styles.select} required onChange={e.function}>
                  <option
                    value=""
                    className={styles.selectedDefaultValue}
                    selected
                    disabled
                    hidden
                  >
                    Pays
                  </option>
                  <option value="France">France</option>
                  <option value="Belgique">Belgique</option>
                  <option value="Angleterre">Angleterre</option>
                  <option value="Alemagne">Alemagne</option>
                  <option value="Italie">Italie</option>
                </select>
                <div className={styles.iconContainer}>
                  <i className={styles.selectIcon}>&#x2304;</i>
                </div>
              </div>
              }
                <div className={`${styles.correctContainer} ${e.checked || e.small ? "" : styles.hidden}`} >
                  <img src={e.small ? redCross : correct} alt="" className={styles.correct} />
                </div>
                <div className={styles.small}>{e.small}</div>
                </div>
            ))}
            </div>
            <div className={styles.messageContainer}>
            <textarea
              type="text"
              className={`${styles.input} ${styles.textArea}`}
              placeholder="Message"
              onChange={formVerification.handleMessage}
            />
             <div className={`${styles.small} ${styles.smallMessage}`}>{formVerification.falseMessage}</div>
            </div>
            <button type="submit" disabled={!formVerification.isFormValid} className={`${styles.submitButton} ${!formVerification.isFormValid ? styles.disabled : styles.unlockSubmitButton}`}>
              Envoyer
            </button>
          </form>
        </div>
        <div  className={styles.iframeContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21095.643491868017!2d2.4211902775070406!3d48.629834813317494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5de1eaa00cd73%3A0x2fc69a12a2793c39!2s%C3%89vry%2C%2091000%20%C3%89vry-Courcouronnes!5e0!3m2!1sfr!2sfr!4v1715616530450!5m2!1sfr!2sfr" width="1133" height="450" style={{
    border: "0",
    WebkitFilter: "grayscale(100%)", // Utilisation de WebkitFilter pour le préfixe -webkit-
    filter: "grayscale(100%)", // Utilisation de filter pour les autres navigateurs
  }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
}
