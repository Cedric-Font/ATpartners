import { useState } from "react";

export default function FormVerification() {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstname, setFirstname] = useState("");
  const [enterpriseName, setEnterpriseName] = useState("");
  const [message, setMessage] = useState("");

  const [falsePhoneNumber, setFalsePhoneNumber] = useState("");
  const [falsePseudo, setFalsePseudo] = useState("");
  const [falseFirstname, setFalseFirstname] = useState("");
  const [falseEnterpriseName, setFalseEnterpriseName] = useState("");
  const [falseMessage, setFalseMessage] = useState("");
  const [falseEmail, setFalseEmail] = useState("");
  const MAX_LENGTH_NAME = 45;
  const MAX_LENGTH_ENTERPRISE = 100;
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    setPhoneNumber(inputPhoneNumber);
    console.log(phoneNumber);
    const containsLetters = /[a-zA-Z]/.test(phoneNumber);
    if (containsLetters) {
      setPhoneNumberError(
        <small>Le numéro de téléphone ne doit pas contenir de lettres.</small>
      );
      console.log(phoneNumberError);
    } else {
      setPhoneNumberError("");
      console.log("ok");
    }
  };

  const handleChangePseudo = (p) => {
    if (p.target.value.length <= MAX_LENGTH_NAME) {
      setFalsePseudo("");
      setPseudo(p.target.value);
      console.log(pseudo, falsePseudo);
    } else {
      setFalsePseudo(<small>Le pseudo est trop long</small>);
      console.log("coucou");
    }
  };

  const handleChangeFirstname = (f) => {
    if (f.target.value.length <= MAX_LENGTH_NAME) {
      setFalseFirstname("");
      setFirstname(f.target.value);
      console.log(firstname, falseFirstname);
    } else {
      setFalseFirstname(<small>Le prénom est trop long</small>);
      console.log("coucou");
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
    } else if(e.target.value.length === 0) {
        setFalseEnterpriseName(<small>Ce champ ne peut pas etre vide</small>);
    } else {
      setFalseEnterpriseName(<small>Le nom de l'entreprise est trop long</small>);
  }
    }

    const handleMessage = (m) => {
        if (m.target.value.length <= 500) {
          setFalseMessage("");
          setMessage(m.target.value);
        } else {
          setFalseMessage(<small>Le message est trop long</small>);
        }
      }

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
  };
}
