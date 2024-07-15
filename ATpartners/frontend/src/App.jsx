import styles from './App.module.css';
import { useState, useEffect } from 'react';
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
import EnterprisesLinkPicturesIphone from './EnterprisesLinkpictureIphone/EnterprisesLinkpictureIphone';
import ATmain from './assets/ATpartnersMain.jpg'
import TestAbout from './testAbout/TestAbout';



function App() {
  const [userAgent, setUserAgent] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0)
    function getUserAgent() {
     const NowUserAgent = navigator.userAgent.toLowerCase()
     if(NowUserAgent.includes("iphone")) {
      setUserAgent("iphone")
    } else if ( userAgent.includes("android")){
      setUserAgent("android")
    }
    } 
    getUserAgent()
    console.log(userAgent)
  }, [])
  console.log(userAgent);

  

  return (
    <div id='home'>
      
      <NavBarDesktop />
      <NavMobile />
      <HeaderContent mainPicture={ATmain}/>
      <section className={styles.padding}>
      <SubTitle title={"Nos entreprises"}  top={"600px"}/>
      {/* <h2 className={styles.owerEnterprisesTitle}>Nos Entreprises</h2> */}
      <div className={styles.enterpriseLinkContainer}>
      {userAgent === "iphone" ? <EnterprisesLinkPicturesIphone pictures={"ATservices"} /> : <EnterprisesLinkPictures pictures={"ATservices"} />}
      {userAgent === "iphone" ? <EnterprisesLinkPicturesIphone pictures={"ATimmobilier"} /> : <EnterprisesLinkPictures pictures={"ATimmobilier"} />}
      {userAgent === "iphone" ? <EnterprisesLinkPicturesIphone pictures={"ATpromotion"} /> : <EnterprisesLinkPictures pictures={"ATpromotion"} />}
      </div>
      {/* <h2 className={styles.owerEnterprisesTitleAbout}>qui somme nous ?</h2> */}
      <SubTitle title={"Qui sommes nous ?"} top={"100px"} userAgent={userAgent}/>
      <AboutUs />
      {/* <TestAbout /> */}
      <SubTitle title={"Nos realisations"} top={"100px"}></SubTitle>
      <Realisations title={"Salle blanche"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna eget arcu varius aliquam. Nulla facilisi. Nullam euismod, ligula nec porttitor."} picture={salleBlanche}/>
      <Realisations title={"Salle blanche"} direction={"row-reverse"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna eget arcu varius aliquam. Nulla facilisi. Nullam euismod, ligula nec porttitor."} picture={salleBlanche}/>
      <Realisations title={"Salle blanche"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna eget arcu varius aliquam. Nulla facilisi. Nullam euismod, ligula nec porttitor."} picture={salleBlanche}/>
      <Footer title={"ATservices"}></Footer>
      </section>
    </div>
  )
}

export default App
