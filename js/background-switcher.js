const circles = document.querySelectorAll('.circles');
const background = document.querySelector('body');

function changeBgColor(event, color) {
    event.classList.add(color);
}

function changeTextColor(color) {
    const text = document.querySelectorAll('.text');
    for (let j = 0; j < text.length; j += 1) {
        if (color === 'dark') {
            text[j].classList.add('white');
        } else {
            text[j].classList.remove('white');
        }
    }
}

(function clickCircle() {
    for (let i = 0; i < circles.length; i += 1) {
        circles[i].addEventListener('click', () => {
            background.classList.remove('firstColor', 'secoundColor', 'thirdColor', 'fourthColor');
            const color = circles[i].classList[1];
            const dark = circles[i].classList[2];
            changeTextColor(dark);
            changeBgColor(background, color);
        });
    }
})();
