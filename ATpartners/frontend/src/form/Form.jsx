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
          value: "enterpriseName",
          state: formVerification.enterpriseName,
          text: "Nom de l'entreprise",
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
              <h2 className={`${styles.coucou} ${focusStates[e.value] ? styles.coucou2 : ""}`}>{e.text}</h2>
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
                <select name="country" id="" className={styles.select} required onChange={e.function}>
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
            <small>{formVerification.falseMessage}</small>
            </div>
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
