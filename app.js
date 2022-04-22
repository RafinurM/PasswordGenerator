let characterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
let numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
let symbolsList = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '/', '\\', ',', '.', '?', '{', '}', '[', ']',];
let outputPassword = [];
let calculatedPass = [];
let number_on_off = document.getElementById('numbers_on_off');
let symbols_on_off = document.getElementById('symbols_on_off')


function createPass() {
    const password_length = document.getElementById('pass_len').value;
    characterList.length = 50;
    numbersChecked();
    for (i = 0; i < password_length; i++) {
        let maxIndex = characterList.length - 1;
        calculatedPass = characterList[getRandomInRange(0, maxIndex)];
        outputPassword += calculatedPass;
        console.log(characterList.length)
    }
}

function numbersChecked() {
    if (number_on_off.checked && symbols_on_off.checked) {
        characterList = characterList.concat(numbersList, symbolsList);
        console.log(characterList.length);
    } else if (number_on_off.checked) {
        characterList = characterList.concat(numbersList);
        console.log(characterList.length);
    } else if (symbols_on_off.checked) {
        characterList = characterList.concat(symbolsList);
        console.log(characterList.length);
    } else {
        characterList.length = 50;
        console.log(characterList.length);
}
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_password() {
    outputPassword = ' ';
    createPass();
    colorCoding();
    document.getElementById('out_pass').innerHTML = outputPassword;

}

let hardest = document.querySelector('.hardest');
let hard = document.querySelector('.hard');
let middle = document.querySelector('.middle');


function colorCoding() {
    const password_length = document.getElementById('pass_len').value;
    if ((number_on_off.checked && symbols_on_off.checked && (password_length >= 8)) || password_length >= 15 ) {
        middle.classList.remove('hidden');
        hard.classList.remove('hidden');
        hardest.classList.remove('hidden');
    } else if (((password_length >= 10) && number_on_off.checked) || ((password_length >= 10) && symbols_on_off.checked) || ((password_length >= 10) || (password_length >= 12))) {
        hardest.classList.add('hidden')
        middle.classList.remove('hidden');
        hard.classList.remove('hidden');
    } else if (((password_length >= 6) && number_on_off.checked) || ((password_length >= 6) && symbols_on_off.checked) || (password_length >= 8)) {
        hardest.classList.add('hidden')
        hard.classList.add('hidden')
        middle.classList.remove('hidden');
    } else {
        hardest.classList.add('hidden');
        hard.classList.add('hidden');
        middle.classList.add('hidden');
    }
}

const inputs = document.querySelectorAll('input[type=number]');
Array.from(inputs).forEach(input => {
    const min = +input.min;
    const max = +input.max;

    input.addEventListener('input', (e) => {
        const value = +input.value;
        if (value > max) { input.value = max }
        else if (value < min) { input.value = min }
    })

});