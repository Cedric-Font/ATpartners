import styles from './App.module.css';
import "./font.css"
import NavBarDesktop from './navBarDesktop/NavBarDesktop'
import NavMobile from './navBarMobile/NavMobile'
import EnterprisesLinkPictures from './EnterprisesLinkpicture/EnterprisesLinkPictures';
import SubTitle from './SubTitle/SubTitle';
import AboutUs from './AboutUs/AboutUs';
import Realisations from './realisations/Realisations';
import salleBlanche from './assets/salleBlanche2.jpg'

function App() {

  return (
    <>
      <NavBarDesktop />
      <NavMobile />
      <SubTitle title={"Nos entreprises"}  top={"600px"}/>
      {/* <h2 className={styles.owerEnterprisesTitle}>Nos Entreprises</h2> */}
      <div className={styles.enterpriseLinkContainer}>
      <EnterprisesLinkPictures pictures={"ATservices"} />
      <EnterprisesLinkPictures pictures={"ATimmobilier"} />
      <EnterprisesLinkPictures pictures={"ATpromotion"} />
      </div>
      {/* <h2 className={styles.owerEnterprisesTitleAbout}>qui somme nous ?</h2> */}
      <SubTitle title={"Qui sommes nous ?"} top={"50px"}/>
      <AboutUs />
      <SubTitle title={"Nos realisations"} top={"50px"}></SubTitle>
      <Realisations title={"Salle blanche"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna eget arcu varius aliquam. Nulla facilisi. Nullam euismod, ligula nec porttitor."} picture={salleBlanche} />
    </>
  )
}

export default App
