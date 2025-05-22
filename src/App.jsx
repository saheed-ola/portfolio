import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import FooterBottom from './components/footer/FooterBottom'


export const reviews = [
  {
    picture: "/BannerImg.png",
    oruko: "Oluwole Zaccheous", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!",
  },
  {
    picture: "/BannerImg.png",
    oruko: "Victoria Omotan", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
  {
    picture: "/BannerImg.png", 
    oruko: "Micheal Daniel", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
  {
    picture: "/BannerImg.png",
    oruko: "Adetayo Shobayo", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
  {
    picture: "/BannerImg.png", 
    oruko: "Micheal Daniel", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
  {
    picture: "/BannerImg.png",
    oruko: "Adetayo Shobayo", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
  {
    picture: "/BannerImg.png", 
    oruko: "Micheal Daniel", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
  {
    picture: "/BannerImg.png",
    oruko: "Adetayo Shobayo", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
];

const App = () => {
  return (
    <>
     <div className=''>
        <Navbar/>
      {/* <div className='max-w-screen-xl mx-auto'> */}
        <Banner/>
        <Features/>
        <Resume/>
        <Projects/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <FooterBottom/>
      {/* </div> */}
     </div>
    </>
  )
}

export default App
