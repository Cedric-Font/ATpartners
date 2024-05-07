import { useState, useEffect } from "react";

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

  const [isFormValid, setIsFormValid] = useState(false);

  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    setPhoneNumber(inputPhoneNumber);
    const containsLetters = /[a-zA-Z]/.test(phoneNumber);
    if (containsLetters) {
      setPhoneNumberError(
        <small>Le numéro de téléphone ne doit pas contenir de lettres.</small>
      );
    } else if(inputPhoneNumber.length != 10) {
        setPhoneNumberError(
            <small>Le numéro de téléphone doit contenir 10 chiffres.</small>
        );
    }
    else if(!containsLetters && inputPhoneNumber.length === 10) {
      setPhoneNumberError("");
      setPhoneNumber(inputPhoneNumber);
    }
  };

//   const handleChangePseudo = (p) => {
//     if(p.target.value.length <= 0) {
//         setFalsePseudo(<small>ce champ ne peut pas etre vide</small>);
//         setPseudo("")
//     }
//     else if (p.target.value.length <= MAX_LENGTH_NAME) {
//       setFalsePseudo("");
//       setPseudo(p.target.value);
//     } else {
//       setFalsePseudo(<small>Le pseudo est trop long</small>);
//     }
//     validateForm();
//     console.log(pseudo)
//   };
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

  const handleChangeFirstname = (f) => {
    if (f.target.length <= 0) {
        setFalseFirstname(<small>Ce champ ne peut pas etre vide</small>);
        setFirstname("");
    }
    if (f.target.value.length <= MAX_LENGTH_NAME) {
      setFalseFirstname("");
      setFirstname(f.target.value);
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

      const validateForm = () => {
        // Condition pour valider le formulaire globalement
        if (
          pseudo &&
          phoneNumber &&
          firstname &&
          enterpriseName &&
          email &&
          !falsePhoneNumber &&
          !falsePseudo &&
          !falseFirstname &&
          !falseEnterpriseName &&
          !falseMessage &&
          !falseEmail
        ) {
          setIsFormValid(true); // Mettre à jour l'état de validation globale
        } else {
          setIsFormValid(false);
        }
      };
      useEffect(() => {
        // Valider le formulaire chaque fois que pseudo est mis à jour
        validateForm();
      }, [pseudo, phoneNumber, firstname, enterpriseName, email, falsePhoneNumber, falsePseudo, falseFirstname, falseEnterpriseName, falseMessage, falseEmail]);
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
  };
}
