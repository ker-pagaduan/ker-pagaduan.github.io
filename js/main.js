const portfolio = document.querySelectorAll('.projects .proj');
const proj = document.querySelectorAll('.proj-popup');
const closePortfolio = document.querySelectorAll('.close');

portfolio.forEach((_, index) => {
    portfolio[index].addEventListener('click', (e) => {
        proj[index].classList.add('show')
    });

    closePortfolio[index].addEventListener('click', (e) => {
        proj[index].classList.remove("show");
    });
});

const skillBox = document.querySelectorAll('.skills-container .skill');
const skillColor = [
                    'skill-color-cyan',
                    'skill-color-pink',
                    'skill-color-violet',
                    'skill-color-red'
];
let skillLength = skillColor.length - 1;

skillBox.forEach((_, index) => {
    let skillRandom = 0 + Math.random() * (skillLength + 1 - 0);
    let skillColorItem = Math.floor(skillRandom);

    skillBox[index].classList.add(skillColor[skillColorItem]);
    
    if( Math.random() < 0.5) {
        skillBox[index].classList.add('active');
    }

    skillBox[index].addEventListener('click', (e) => {
        e.currentTarget.classList.contains('active')
        ? e.currentTarget.classList.remove('active')
        : e.currentTarget.classList.add('active')
    });
});