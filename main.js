var track = document.querySelector('.carousel__track');
var slides = Array.from(track.children);
var nextButton = document.querySelector('.carousel__button--right');
var prevButton = document.querySelector('.carousel__button--left');
var dotsNav = document.querySelector('.carousel__nav');
var dots = Array.from(dotsNav.children);

var slideWidth = slides[0].getBoundingClientRect().width;

//Posicionando os slides um ao lado do outro
//slides[x].style.left = slideWidth * x + 'px';
var setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

var moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}

var updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

var hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length -1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//Clicar no botão da direita passa para o próximo slide
nextButton.addEventListener('click', e => {
    let currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    let currentDot = dotsNav.querySelector('.current-slide');
    let nextDot = currentDot.nextElementSibling;
    let nextIndex = slides.findIndex(slide => slide === nextSlide)
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);

})

//Clicar no botão da esquerda volta para o slide anterior
prevButton.addEventListener('click', e => {
    let currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    let currentDot = dotsNav.querySelector('.current-slide');
    let prevDot = currentDot.previousElementSibling;
    let prevIndex = slides.findIndex(slide => slide === prevSlide)


    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);

})

//Clicar nos botões de navegação muda para um slide específico
dotsNav.addEventListener('click', e => {
    //Bloquear cliques fora do botão de ativar a função
    let targetDot = e.target.closest('button');
    if (!targetDot) return;

    //Descobrir qual botão foi clicado
    let currentSlide = track.querySelector('.current-slide');
    let currentDot = dotsNav.querySelector('.current-slide');
    let targetIndex = dots.findIndex(dot => dot === targetDot);
    let targetSlide = slides[targetIndex];
    
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})

var engButton = document.querySelector('.eng');
var portButton = document.querySelector('.port');

engButton.addEventListener('click', e => {
    document.querySelector('.about').innerHTML = "<h2>About Me</h2><p class=\"sobre\">My name is Monique, I am from São Paulo (Brazil) and I'm passionate about art and technology. I'm graduating a technical course in System Development, at the institution SENAI, and I'm also a student of an online platform called Alura.</p> <p class=\"sobre\">I aim to work as a Front-End developer, web or mobile. You can see some of my projects by navigatin this portfolio!</p>";
    document.querySelector('.developer').innerHTML = "front-end developer"
    document.querySelector('.api').innerHTML = "Using API"
    document.querySelector('.game').innerHTML = "Javascript game"
})

portButton.addEventListener('click', e => {
    document.querySelector('.about').innerHTML = "<h2>Sobre Mim</h2><p class=\"sobre\">Meu nome é Monique, moro em São Paulo e sou apaixonada por arte e tecnologia. Estou me formando no curso técnico em Desenvolvimento de Sistemas, do SENAI, e também sou aluna da plataforma de cursos online Alura.</p><p class=\"sobre\">Procuro trabalhar como desenvolvedora Front-End, seja web ou mobile. Você pode ver alguns dos meus projetos navegando nesse portifólio!</p>";
    document.querySelector('.developer').innerHTML = "desenvolvedora front-end"
    document.querySelector('.api').innerHTML = "Consumo de API"
    document.querySelector('.game').innerHTML = "Jogo em Javascript"
})