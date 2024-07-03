import { useState, useEffect } from "react";
import styles from "./Form.module.css";

export default function FormVerification() {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstname, setFirstname] = useState("");
  const [enterpriseName, setEnterpriseName] = useState("");
  const [message, setMessage] = useState(""); // Vérifiez si nécessaire
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

  function regex(string) {
    return /[a-zA-Z]/.test(string);
  }

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    setPhoneNumber(inputPhoneNumber);
    const containsLetters = regex(inputPhoneNumber);
    if (containsLetters) {
      setPhoneNumberError(
        <small className="coucou">
          Le numéro de téléphone ne doit pas contenir de lettres.
        </small>
      );
    } else if (inputPhoneNumber.length !== 10) {
      setPhoneNumberError(
        <small className="coucou2">
          Le numéro de téléphone doit contenir 10 chiffres.
        </small>
      );
    } else {
      setPhoneNumberError("");
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
      setFalseFirstname(<small>Ce champ ne peut pas être vide</small>);
      setFirstname("");
    } else if (value.length <= MAX_LENGTH_NAME) {
      setFalseFirstname("");
      setFirstname(value);
    } else {
      setFalseFirstname(<small>Le prénom est trop long</small>);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.match(regexEmail)) {
      setFalseEmail("");
    } else {
      setFalseEmail(<small>Le format de l'email ne correspond pas</small>);
    }
  };

  const handleEnterpriseName = (e) => {
    const value = e.target.value;
    setEnterpriseName(value);
    if (value.length <= MAX_LENGTH_ENTERPRISE) {
      setFalseEnterpriseName("");
    } else if (value.length === 0) {
      setFalseEnterpriseName(<small>Ce champ ne peut pas être vide</small>);
    } else {
      setFalseEnterpriseName(<small>Le nom de l'entreprise est trop long</small>);
    }
  };

  const handleMessage = (m) => {
    const value = m.target.value;
    if (value.length >= 30 && value.length <= 500) {
      setFalseMessage("");
      setMessageContent(value);
    } else if (value.length < 30) {
      setFalseMessage(<small>Le message doit contenir au moins 30 caractères</small>);
    } else if (value.length > 500) {
      setFalseMessage(<small>Le message ne doit pas dépasser 500 caractères</small>);
    }
  };

  const handleCountry = (e) => {
    const value = e.target.value;
    setSelectedCountry(value);
  };

  const formReset = () => {
    setPseudo("");
    setPhoneNumber("");
    setFirstname("");
    setEnterpriseName("");
    setEmail("");
    setMessageContent("");
    setSelectedCountry("");
  };

  useEffect(() => {
    const validateForm = () => {
      if (
        pseudo &&
        phoneNumber &&
        firstname &&
        enterpriseName &&
        email &&
        selectedCountry &&
        messageContente &&
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
      console.log("Form is valid:", isFormValid);
      console.log("country:", selectedCountry);
    };
    validateForm();
  }, [
    pseudo,
    phoneNumber,
    firstname,
    enterpriseName,
    email,
    falsePhoneNumber,
    falsePseudo,
    falseFirstname,
    falseEnterpriseName,
    falseMessage,
    falseEmail,
    phoneNumberError,
    selectedCountry,
  ]);

  return {
    email,
    handleChangePseudo,
    pseudo,
    setPseudo,
    falsePseudo,
    phoneNumber,
    setPhoneNumber,
    falsePhoneNumber,
    handlePhoneNumberChange,
    setPhoneNumberError,
    phoneNumberError,
    firstname,
    setFirstname,
    falseFirstname,
    handleChangeFirstname,
    handleChangeEmail,
    falseEmail,
    handleEnterpriseName,
    enterpriseName,
    setEnterpriseName,
    falseEnterpriseName,
    handleMessage,
    falseMessage,
    isFormValid,
    selectedCountry,
    handleCountry,
    messageContente,
    setMessageContent,
    formReset,
  };
}
