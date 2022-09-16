import './Home.css';
import './Shapes.css';
import Avatar from '../../assets/avatar-1.png';

import HomeSocials from './HomeSocials';
import ScrollDown from './ScrollDown';

import { useLanguageContext } from '../../hooks/useLanguageContext';

const Home = () => {
  const {language} = useLanguageContext();

  return (
    <div className="home__bg">
      <section className="home container" id="home">
        <div className="intro">
          <img src={Avatar} alt="Avatar" className="home__img" />

          <h1 className="home__name">
            Monique Costa
          </h1>
          
          <span className="home__education">
            {(language === "Port") && <>Desenvolvedora Web Front-End</> }
            {(language === "Eng") && <>Front-End Web Developer</> }
          </span>
          
          <HomeSocials />

          <a href="#contact" className='btn'>
            {(language === "Port") && <>Fale comigo!</> }
            {(language === "Eng") && <>Contact me!</> }
          </a>

          <ScrollDown />

        </div>
      </section>
    </div>
  )
}

export default Home