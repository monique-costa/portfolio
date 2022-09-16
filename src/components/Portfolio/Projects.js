import MiniBlogImg from '../../assets/miniblog.PNG';
import PalavraSecretaImg from '../../assets/palavra-secreta.PNG';
import DesafioMartinImg from '../../assets/martin.PNG';
import DesafioLevanteImg from '../../assets/levante.PNG';
import TccImg from '../../assets/tcc.PNG';

const Projects = [
    {
        id: 1,
        img: MiniBlogImg,
        title: "MiniBlog",
        desc: "Blog construído com React e Firebase, onde é possível que o usuário cadastre sua conta, crie, edite e exclua seus posts.",
        demo: "https://monique-costa.github.io/miniblog/",
        code: "https://github.com/monique-costa/miniblog",
        category: "React.js"
    },
    {
        id: 2,
        img: PalavraSecretaImg,
        title: "Palavra Secreta",
        desc: "Jogo de adivinhar a palavra secreta, letra por letra. O usuário tem 10 tentativas e acumula pontos conforme acerta as palavras.",
        demo: "https://monique-costa.github.io/palavra-secreta/",
        code: "https://github.com/monique-costa/palavra-secreta",
        category: "React.js"
    },
    {
        id: 3,
        img: DesafioMartinImg,
        title: "Desafio Técnico 1",
        desc: "Desafio técnico com o objetivo de reproduzir um layout fielmente utilizando HTML, CSS, Javascript, Bootstrap e Sass.",
        demo: "https://monique-costa.github.io/teste-martin-luz/dist/index.html",
        code: "https://github.com/monique-costa/teste-martin-luz",
        category: "Javascript"
    },
    {
        id: 4,
        img: DesafioLevanteImg,
        title: "Desafio Técnico 2",
        desc: "Desafio técnico com o objetivo de reproduzir um layout utilizando HTML, CSS e Javascript.",
        demo: "https://monique-costa.github.io/levante/",
        code: "https://github.com/monique-costa/levante",
        category: "Javascript"
    },
    {
        id: 5,
        img: TccImg,
        title: "Software para controle de Mesa Inteligente",
        desc: "Software que capaz de gerenciar uma mesa de testes de produtos para a empresa Taiff.",
        demo: "",
        code: "https://github.com/SquadLaplace-Taiff/SoftwareMesaInteligente",
        category: "Back-End"
    },
]

export default Projects;