var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var lengthElement = document.getElementById('length'); // Nom de variable cohérent

myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    // Validation des lettres minuscules
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    } else {
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }

    // Validation des lettres majuscules
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    } else {
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }

    // Validation des chiffres
    if (myInput.value.match(numbers)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
    } else {
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    // Validation de la longueur
    if (myInput.value.length >= 8) {
        lengthElement.classList.remove('invalid');
        lengthElement.classList.add('valid');
    } else {
        lengthElement.classList.remove('valid');
        lengthElement.classList.add('invalid');
    }
}