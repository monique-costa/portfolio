import './About.css';
import Avatar from '../../assets/avatar-2.png'

import { useLanguageContext } from '../../hooks/useLanguageContext';

const About = () => {
  const {language} = useLanguageContext();

  return (
    <section className="section about container" id="about">
      <h2 className="section__title">

        {(language === "Port") && <>Sobre Mim</> }
        {(language === "Eng") && <>About Me</> }

      </h2>
      
      <div className="about__container grid">
        <img src={Avatar} alt="Avatar" className='about__img' />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">

            {(language === "Port") && (
              <>
              Me chamo Monique Costa, sou uma Desenvolvedora Web Front-End.
              Tenho gosto por desenvolver aplicações fiéis ao design original e um olhar crítico para avaliar possibilidades de melhoria.
              Me aventuro no Back-End de vez em quando! Além disso, sou mãe de 5 gatos e 2 cachorros e adoro rpg de mesa.
              </>
            )}
            {(language === "Eng") && (
              <>
              My name is Monique Costa, I'm a Front-End Web Developer.
              I like to develop applications that are true to the original design and I have a critical eye, always looking to improve.
              Sometimes I dare to venture into Back-End too! Also, I'm a mother of 5 cats and 2 dogs and I love tabletop role-playing games.
              </>
            )}

            </p>

            <a href={(language === "Port") ? "./Curriculo-Monique-Costa.pdf" : "./Resume-Monique-Costa.pdf"} download="monique_costa_cv" className='btn'>
              {(language === "Port") && <>Baixar currículo</> }
              {(language === "Eng") && <>Download CV</> }
            </a>
          </div>

          <div className="about__skills">
            <ul className='skills__list'>
              <li className="skills__item">React.js</li>
              <li className="skills__item">Javascript</li>
              <li className="skills__item">CSS3</li>
              <li className="skills__item">Sass</li>
              <li className="skills__item">HTML5</li>
              <li className="skills__item">Git</li>
              <li className="skills__item">Java</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About