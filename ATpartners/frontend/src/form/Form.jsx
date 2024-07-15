import styles from "./Form.module.css";
import NavMobile from "../navBarMobile/NavMobile";
import NavBarDesktop from "../navBarDesktop/NavBarDesktop";
import formBackground from "../assets/formBackground.jpg";
import Footer from "../footer/Footer";
import FormVerification2 from "./FormVerification";
import correct from "../assets/correct.png";
import redCross from "../assets/redCross.png";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sendError, setSendError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formVerification = FormVerification2();
  const [focus, setFocus] = useState(false);
  const [toasifySuccess, setToasifySuccess] = useState(false);
  const [toasifyError, setToasifyError] = useState(false);
  const [focusStates, setFocusStates] = useState({
    Nom: false,
    Prénom: false,
    phoneNumber: false,
    email: false,
    enterpriseName: false,
    country: false,
  });
  const notify = () => toast.success("Votre Email a bien été envoyé", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleFocusChange = (fieldName, isFocused, value, e) => {
    if (!isFocused && !value.trim()) {
      setFocusStates((prevFocusStates) => ({
        ...prevFocusStates,
        [fieldName]: false,
      }));
      e.target.placeholder = e.target.name;
    } else {
      setFocusStates((prevFocusStates) => ({
        ...prevFocusStates,
        [fieldName]: true,
      }));
      e.target.placeholder = "";
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
      checked:
        formVerification.pseudo && !formVerification.falsePseudo ? true : false,
    },
    {
      value: "Prénom",
      state: formVerification.firstname,
      text: "Prénom",
      function: formVerification.handleChangeFirstname,
      small: formVerification.falseFirstname,
      class: "input",
      checked:
        formVerification.firstname && !formVerification.falseFirstname
          ? true
          : false,
    },
    {
      value: "phoneNumber",
      state: formVerification.phoneNumber,
      text: "Numéro de téléphone",
      function: formVerification.handlePhoneNumberChange,
      small: formVerification.phoneNumberError,
      class: "input",
      checked:
        formVerification.phoneNumber && !formVerification.phoneNumberError
          ? true
          : false,
    },
    {
      value: "email",
      state: formVerification.email,
      text: "Email",
      function: formVerification.handleChangeEmail,
      small: formVerification.falseEmail,
      class: "input",
      checked:
        formVerification.email && !formVerification.falseEmail ? true : false,
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
      state: formVerification.selectedCountry,
      text: "Pays",
      function: formVerification.handleCountry,
      small: formVerification.falseEnterpriseName,
      class: "select",
      checked: selectedCountry ? true : false,
    },
  ];

  async function onSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    setIsSending(true);
    setSendError(null);

    const templateId = "template_outshvc";
    const serviceId = "service_nr2cjv7";

    try {
      await sendFeedback(serviceId, templateId, {
        from_name: `${formVerification.firstname} ${formVerification.pseudo}`,
        phone_number: formVerification.phoneNumber,
        email: formVerification.email,
        message: formVerification.messageContente,
      });

      setIsSending(false);
      setIsSent(true);
      setIsLoading(false);
      notify();
      formVerification.formReset();
      e.target.reset(); // Reset the form on success
    } catch (err) {
      setIsSending(false);
      setSendError("There has been an error. Please try again.");
      toast.error("There has been an error. Please try again.");
      console.error("Error occurred while sending email:", err);
    }
  }

  const sendFeedback = (serviceId, templateId, variables) => {
    return emailjs.send(serviceId, templateId, variables, "9YEiPDjVbQjT3ablk");
  };

  return (
    <div className={styles.fullFormContent}>
      <NavMobile />
      <NavBarDesktop />
      <section className={styles.formHeader}>
      <ToastContainer
         position="top-right"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="colored"
/>
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
          <form action="" className={styles.formInput} onSubmit={onSubmit}>
            <div className={styles.mapContainer}>
              {ranges.map((e) => (
                <div className={styles.inputContainer} key={e.text}>
                  <h2
                    className={`${styles.inputTitle} ${
                      focusStates[e.value] ? styles.inputTitleDisplayed : ""
                    }`}
                  >
                    {e.text}
                  </h2>
                  {e.class === "input" ? (
                    <input
                      type="text"
                      name={e.value}
                      id={e.value}
                      className={styles[e.class]}
                      placeholder={focusStates[e.value] ? "" : e.text}
                      value={e.state}
                      onChange={e.function}
                      onFocus={(event) =>
                        handleFocusChange(e.value, true, e.state, event)
                      }
                      onBlur={(event) =>
                        handleFocusChange(e.value, false, e.state, event)
                      }
                      required
                    />
                   ) : (
                    <div className={styles.selectContainer}>
                      <select
                        name="country"
                        id="countrySelect"
                        className={styles.select}
                        required
                        onChange={(e) => formVerification.handleCountry(e)}
                        value={formVerification.selectedCountry}
                      >
                        <option
                          value=""
                          className={styles.selectedDefaultValue}
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
                  )}
                  <div
                    className={`${styles.correctContainer} ${
                      e.checked || e.small ? "" : styles.hidden
                    }`}
                  >
                    <img
                      src={e.small ? redCross : correct}
                      alt=""
                      className={styles.correct}
                    />
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
              <div className={`${styles.small} ${styles.smallMessage}`}>
                {formVerification.falseMessage}
              </div>
            </div>
            <button
              type="submit"
              disabled={!formVerification.isFormValid}
              className={`${styles.submitButton} ${
                !formVerification.isFormValid
                  ? styles.disabled
                  : styles.unlockSubmitButton
              }`}
            >
              Envoyer {isLoading ? <AiOutlineLoading3Quarters className={styles.loader} /> : null}
            </button>
          </form>
        </div>
        <div className={styles.iframeContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21095.643491868017!2d2.4211902775070406!3d48.629834813317494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5de1eaa00cd73%3A0x2fc69a12a2793c39!2s%C3%89vry%2C%2091000%20%C3%89vry-Courcouronnes!5e0!3m2!1sfr!2sfr!4v1715616530450!5m2!1sfr!2sfr"
            width="1133"
            height="450"
            style={{
              border: "0",
              WebkitFilter: "grayscale(100%)",
              filter: "grayscale(100%)",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
}
