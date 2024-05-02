import styles from './App.module.css';
import "./font.css"
import NavBarDesktop from './navBarDesktop/NavBarDesktop'
import NavMobile from './navBarMobile/NavMobile'
import EnterprisesLinkPictures from './EnterprisesLinkpicture/EnterprisesLinkPictures';
import SubTitle from './SubTitle/SubTitle';
import AboutUs from './AboutUs/AboutUs';
import Realisations from './realisations/Realisations';
import salleBlanche from './assets/salleBlanche2.jpg'
import Footer from './footer/Footer';
import HeaderContent from './HeaderContent/HeaderContent';


function App() {

  return (
    <div id='Home'>
      <NavBarDesktop />
      <NavMobile />
      <HeaderContent />
      <SubTitle title={"Nos entreprises"}  top={"600px"}/>
      {/* <h2 className={styles.owerEnterprisesTitle}>Nos Entreprises</h2> */}
      <div className={styles.enterpriseLinkContainer}>
      <EnterprisesLinkPictures pictures={"ATservices"} />
      <EnterprisesLinkPictures pictures={"ATimmobilier"} />
      <EnterprisesLinkPictures pictures={"ATpromotion"} />
      </div>
      {/* <h2 className={styles.owerEnterprisesTitleAbout}>qui somme nous ?</h2> */}
      <SubTitle title={"Qui sommes nous ?"} top={"100px"}/>
      <AboutUs />
      <SubTitle title={"Nos realisations"} top={"100px"}></SubTitle>
      <Realisations title={"Salle blanche"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna eget arcu varius aliquam. Nulla facilisi. Nullam euismod, ligula nec porttitor."} picture={salleBlanche}/>
      <Realisations title={"Salle blanche"} direction={"row-reverse"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna eget arcu varius aliquam. Nulla facilisi. Nullam euismod, ligula nec porttitor."} picture={salleBlanche}/>
      <Realisations title={"Salle blanche"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna eget arcu varius aliquam. Nulla facilisi. Nullam euismod, ligula nec porttitor."} picture={salleBlanche}/>
      <Footer title={"ATservices"}></Footer>
    </div>
  )
}

export default App
