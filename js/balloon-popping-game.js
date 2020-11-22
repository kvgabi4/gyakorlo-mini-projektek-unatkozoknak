const balloon = document.querySelectorAll('.balloon');
const pop = document.querySelectorAll('.pop');
const endOfTheGame = document.querySelector('.endOfTheGame');
const allBalloons = document.querySelector('.allBalloons');


(function popping() {
    let counter = 0;
    for (let i=0; i<balloon.length; i += 1) {
        balloon[i].addEventListener('mouseover', () => {
            balloon[i].classList.add('hide');
            pop[i].classList.remove('hide');
            counter += 1;
            if (counter === balloon.length) {
                allBalloons.classList.add('hide');
                endOfTheGame.classList.remove('hide');
            }
        })
    }
})();
