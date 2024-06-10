import { useState, useEffect } from "react";
import styles from "./Form.module.css";

export default function FormVerification() {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstname, setFirstname] = useState("");
  const [enterpriseName, setEnterpriseName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [messageContente, setMessageContent] = useState("");

  const [falsePhoneNumber, setFalsePhoneNumber] = useState("");
  const [falsePseudo, setFalsePseudo] = useState("");
  const [falseFirstname, setFalseFirstname] = useState("");
  const [falseEnterpriseName, setFalseEnterpriseName] = useState("");
  const [falseMessage, setFalseMessage] = useState("");
  const [falseEmail, setFalseEmail] = useState("");
  const MAX_LENGTH_NAME = 45;
  const MAX_LENGTH_ENTERPRISE = 100;
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function regex(string){
        return /[a-zA-Z]/.test(string)
    }
    
  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    setPhoneNumber(inputPhoneNumber);
    // const containsLetters = /[a-zA-Z]/.test(phoneNumber);
    const containsLetters = regex(inputPhoneNumber);
    if (containsLetters) {
      setPhoneNumberError(
        <small className={styles.test}>Le numéro de téléphone ne doit pas contenir de lettres.</small>
      );
    } else if(inputPhoneNumber.length != 10) {
        setPhoneNumberError(
            <small className={styles.test}>Le numéro de téléphone doit contenir 10 chiffres.</small>
        );
    }
    else if(!containsLetters && inputPhoneNumber.length === 10) {
      setPhoneNumberError("");
      setPhoneNumber(inputPhoneNumber);
    }
  };
 
const handleChangePseudo = (event) => {
    const value = event.target.value;
    if (value.length <= 0) {
      setFalsePseudo(<small>Ce champ ne peut pas être vide</small>);
      setPseudo(""); // Mettre à jour directement avec la nouvelle valeur
    } else if (value.length <= 45) {
      setFalsePseudo("");
      setPseudo(value); // Mettre à jour directement avec la nouvelle valeur
    } else {
      setFalsePseudo(<small>Le pseudo est trop long</small>);
    }
  };

  const handleChangeFirstname = (event) => {
    const value = event.target.value;
    if (value.length <= 0) {
        setFalseFirstname(<small>Ce champ ne peut pas etre vide</small>);
        setFirstname("");
    }
    if (value.length <= MAX_LENGTH_NAME) {
      setFalseFirstname("");
      setFirstname(value);
    } else {
      setFalseFirstname(<small>Le prénom est trop long</small>);
    }
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.match(regexEmail)) {
      setFalseEmail("");
    } else {
      setFalseEmail(<small>Le format de l'email ne correspond pas</small>);
    }
  };

  const handleEnterpriseName = (e) => {
    setEnterpriseName(e.target.value);
    if (e.target.value.length <= MAX_LENGTH_ENTERPRISE) {
      setFalseEnterpriseName("");
      enterpriseName("true")
    } else if(e.target.value.length === 0) {
        setFalseEnterpriseName(<small>Ce champ ne peut pas etre vide</small>);
    } else {
      setFalseEnterpriseName(<small>Le nom de l'entreprise est trop long</small>);
  }
    }

    const handleMessage = (m) => {
        if (m.target.value.length <= 500 && m.target.value.length >= 30) {
          setFalseMessage("");
          setMessage("true");
          setMessageContent(m.target.value);
        } else if (m.target.value.length < 30) {
          setFalseMessage(<small>Le message doit contenri au moin 30 caracteres</small>);
        } else if(m.target.value.length > 500) {
          setFalseMessage(<small>Le message ne doit pas depasser 500 caracteres</small>);
        }
      }

      const handleCountry = (e) => {
        if(e.target.value !== "Pays") {
          setSelectedCountry("true");
          console.log(e.target.value)
          console.log(selectedCountry)
        } else {
          setSelectedCountry("false");
        }
      };

     
      useEffect(() => {
        const validateForm = () => {
            if (
              pseudo &&
              phoneNumber &&
              firstname &&
              enterpriseName &&
              email &&
              message &&
              selectedCountry &&
              !falsePhoneNumber &&
              !falsePseudo &&
              !falseFirstname &&
              !falseEnterpriseName &&
              !falseMessage &&
              !falseEmail &&
              !phoneNumberError
            ) {
              setIsFormValid(true);
            } else {
              setIsFormValid(false);
            }
          };
        validateForm();
      }, [pseudo, phoneNumber, firstname, enterpriseName, email, falsePhoneNumber, falsePseudo, falseFirstname, falseEnterpriseName, falseMessage, falseEmail, phoneNumberError, selectedCountry], message);
    //   console.log(isFormValid)
  return {
    email,
    handleChangePseudo,
    pseudo,
    setPseudo,
    falsePseudo,
    setFalsePseudo,
    phoneNumber,
    setPhoneNumber,
    falsePhoneNumber,
    setFalsePhoneNumber,
    handlePhoneNumberChange,
    setPhoneNumberError,
    phoneNumberError,
    firstname,
    setFirstname,
    falseFirstname,
    setFalseFirstname,
    handleChangeFirstname,
    handleChangeEmail,
    falseEmail,
    handleEnterpriseName,
    enterpriseName,
    setEnterpriseName,
    falseEnterpriseName,
    setFalseEnterpriseName,
    handleMessage,
    message,
    setMessage,
    falseMessage,
    setFalseMessage,
    isFormValid,
    setIsFormValid,
    selectedCountry,
    handleCountry,
    messageContente,
    setMessageContent,
  };
}
