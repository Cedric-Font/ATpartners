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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Burger from "../assets/burgerMenu.svg";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{ flexDirection: "column" }}>
        <h2>ATpartners</h2>
        {['Home','Nos entreprises', 'Nos realisations', 'Qui sommes nous ?', 'contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ "span":{width: "15rem"} }} onClick={() => scrollToElement(text)} >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ background: "transparent", "&:after" :{background: "transparent" }}}/>
      <List sx={{ flexDirection: "column" }}>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <img src={Burger} alt=""  className={styles.burgerMenu}/>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}