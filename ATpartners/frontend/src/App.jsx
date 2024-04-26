import styles from './App.module.css';
import "./font.css"
import NavBarDesktop from './navBarDesktop/NavBarDesktop'
import NavMobile from './navBarMobile/NavMobile'
import EnterprisesLinkPictures from '../EnterprisesLinkpicture/EnterprisesLinkPictures';

function App() {

  return (
    <>
      <NavBarDesktop />
      <NavMobile />
      <h2 className={styles.owerEnterprisesTitle}>Nos Entreprises</h2>
      <div className={styles.enterpriseLinkContainer}>
      <EnterprisesLinkPictures pictures={"ATservices"} />
      <EnterprisesLinkPictures pictures={"ATimmobilier"} />
      <EnterprisesLinkPictures pictures={"ATpromotion"} />
      </div>
      <h2 className={styles.owerEnterprisesTitle}>qui somme nous ?</h2>
    </>
  )
}

export default App
