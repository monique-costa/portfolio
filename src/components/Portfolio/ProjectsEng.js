import MiniBlogImg from '../../assets/miniblog.PNG';
import PalavraSecretaImg from '../../assets/palavra-secreta.PNG';
import DesafioMartinImg from '../../assets/martin.PNG';
import DesafioLevanteImg from '../../assets/levante.PNG';
import TccImg from '../../assets/tcc.PNG';

const ProjectsEng = [
    {
        id: 1,
        img: MiniBlogImg,
        title: "MiniBlog",
        desc: "Blog built with React e Firebase, where users can create an account to create, edit end delete their posts.",
        demo: "https://monique-costa.github.io/miniblog/",
        code: "https://github.com/monique-costa/miniblog",
        category: "React.js"
    },
    {
        id: 2,
        img: PalavraSecretaImg,
        title: "Secret Word",
        desc: "A game of guessing the secret word. The player gains points for each correct word and has 10 chances to guess wrong letters. This game is in portuguese only.",
        demo: "https://monique-costa.github.io/palavra-secreta/",
        code: "https://github.com/monique-costa/palavra-secreta",
        category: "React.js"
    },
    {
        id: 3,
        img: DesafioMartinImg,
        title: "Challenge 1",
        desc: "Technical challenge to reproduce a layout using HTML, CSS, Javascript, Bootstrap and Sass.",
        demo: "https://monique-costa.github.io/teste-martin-luz/dist/index.html",
        code: "https://github.com/monique-costa/teste-martin-luz",
        category: "Javascript"
    },
    {
        id: 4,
        img: DesafioLevanteImg,
        title: "Challenge 2",
        desc: "Technical challenge to reproduce a layout using HTML, CSS e Javascript.",
        demo: "https://monique-costa.github.io/levante/",
        code: "https://github.com/monique-costa/levante",
        category: "Javascript"
    },
    {
        id: 5,
        img: TccImg,
        title: "Controller software for a testing machine",
        desc: "Software capable of managing a product testing machine for Taiff company.",
        demo: "",
        code: "https://github.com/SquadLaplace-Taiff/SoftwareMesaInteligente",
        category: "Back-End"
    },
]

export default ProjectsEng;