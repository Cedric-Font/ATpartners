import styles from "./BurgerMenu.module.css";
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Burger from "../assets/burgerMenu.svg";
import WhiteBurgerMenu from "../assets/WhiteBurgerMenu.svg";
import ATpartnersLogo from "../assets/ATpartnersLogo.png";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function TemporaryDrawer( {isScrolled}) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const listRef = useRef(null);
  const scrollRef = useRef(null);


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  useEffect(() => {
    const anchor = window.location.hash.substring(1);

    if (anchor && listRef.current) {
      const element = document.getElementById(anchor);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const scrollToElement = (text) => {
    const anchor = text.toLowerCase().replace(/\s+/g, '');
    if(text === "Contact"){
      navigate("/contact");
      setOpen(false);
      return;
    }
    navigate(`/#${anchor}`); // Redirige vers la racine avec l'ancre spécifiée
    setOpen(false); // Ferme le menu déroulant après la navigation
    console.log(text);
  };

  const scrollToElementATservices = (text) => {
    const anchor = text.toLowerCase().replace(/\s+/g, '');
    if(text === "Contact"){
      navigate("/contact");
      setOpen(false);
      return;
    }
    navigate(`/ATservices/#${anchor}`); // Redirige vers la racine avec l'ancre spécifiée
    setOpen(false); // Ferme le menu déroulant après la navigation
    console.log(text);
  };

  useEffect(() => {
    const anchor = window.location.hash.substring(1);

    if (anchor && scrollRef.current) {
      const element = document.getElementById(anchor);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const handleScrollTo = (text) => {
    const anchor = text.toLowerCase().replace(/\s+/g, '');
    scrollToElement(text); // Rediriger vers la page racine avec l'ancre spécifiée
  
    // Attendre un court délai avant de faire défiler pour garantir le rendu correct de l'élément
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        // Calculer la position de défilement ajustée pour faire défiler 100 pixels au-dessus de l'élément ciblé
        const { top } = element.getBoundingClientRect();
        const offset = top + window.scrollY - 100; // Décalage de 100 pixels au-dessus de l'élément
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleScrollToAtservices = (text) => {
    const anchor = text.toLowerCase().replace(/\s+/g, '');
    scrollToElementATservices(text); // Rediriger vers la page racine avec l'ancre spécifiée
    console.log(anchor);
  
    // Attendre un court délai avant de faire défiler pour garantir le rendu correct de l'élément
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        // Calculer la position de défilement ajustée pour faire défiler 100 pixels au-dessus de l'élément ciblé
        const { top } = element.getBoundingClientRect();
        const offset = top + window.scrollY - 100; // Décalage de 100 pixels au-dessus de l'élément
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }, 100);
  };


  const Burgertab = [
    ['Home','Nos entreprises', 'Nos realisations', 'Qui sommes nous ?', 'contact'],
    ["home", "Qui sommes nous ?", "Reference", "Nos objectifs", "Nos valeurs", "Nos moyens humains"],
  ]

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{ flexDirection: "column" }}>
        <div className={styles.burgerAndTitle}>
      <img src={Burger} alt=""  className={styles.insideBurgerMenu}/>
      <img src={ATpartnersLogo} alt="" className={styles.ATpartnersLogo}/>
        <h2 className={styles.burgerTitle}>ATPartners</h2>
        </div>
        <h2 className={styles.BurgerSubTitle}>
          <Link to={{pathname: "/"}}>
          ATPartners
          </Link></h2>
        {['Home','Nos entreprises', 'Nos realisations', 'Qui sommes nous ?', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ marginLeft: "80px" }}>
            <ListItemButton sx={{ "span":{width: "15rem"} }} onClick={() => handleScrollTo(text)} >
              <ListItemText primary={text}sx={{ "span": {fontWeight: "bold"} }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ background: "transparent", "&:after" :{background: "transparent" }}}/>
      <List sx={{ flexDirection: "column" }}>
        <h2 className={styles.BurgerSubTitle}>ATServices</h2>
        {["ATServices home", "Qui sommes nous ?", "references", "Nos objectifs", "Nos valeurs", "Nos moyens humains", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ marginLeft: "80px" }}>
            <ListItemButton sx={{ "span":{width: "15rem"} }} onClick={() => handleScrollToAtservices(text)} >
              <ListItemText primary={text} sx={{ "span": {fontWeight: "bold"} }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <img src={isScrolled ? WhiteBurgerMenu : Burger} alt=""  className={styles.burgerMenu}/>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}