import styles from './App.module.css';
import NavBarDesktop from './navBarDesktop/NavBarDesktop'
import NavMobile from './navBarMobile/NavMobile'
import EnterprisesLinkPictures from '../EnterprisesLinkpicture/EnterprisesLinkPictures';

function App() {

  return (
    <>
      <NavBarDesktop />
      <NavMobile />
      <h2 className={styles.owerEnterprisesTitle}>Nos Entreprisess</h2>
      <EnterprisesLinkPictures />
    </>
  )
}

export default App
