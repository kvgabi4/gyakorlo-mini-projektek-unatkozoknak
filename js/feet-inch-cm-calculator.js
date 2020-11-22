const feet = document.querySelector('.feet');
const inches = document.querySelector('.inches');


const convert = document.querySelector('.btn-convert');
const result = document.querySelector('.result')

function centimeter(f, i) {
    return f * 30.48 + i * 2.54;
}

(function output() {

    convert.addEventListener('click', (e) => {
        let feetValue = parseFloat(feet.value);
        let inchesValue = parseFloat(inches.value);
        e.preventDefault();
        if (feet.value === '') {
            feetValue = 0;
        }
        if (inches.value === '') {
            inchesValue = 0;
        } 
        if (isNaN(feetValue) || isNaN(inchesValue)) {
            return result.textContent = 'Számokat adj meg!';
        }
        result.textContent = centimeter(feetValue, inchesValue);
    })
})();

const resetButton = document.querySelector('.btn-reset');
(function reset() {
    resetButton.addEventListener('click', (e) => {
        e.preventDefault();
        feet.value = '';
        inches.value = '';
        result.textContent = '';
    });
})()
