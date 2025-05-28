var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var message = document.querySelector('.message');
var scoreDisplay = document.querySelector('.score');
var link = document.querySelector('.link');
var quizSection = document.querySelector('.quiz-section');
var responseInput = document.querySelector('.res');
var compteur = 0;

function genererQuestion() {
    random1 = Math.floor(Math.random() * 20) + 1; // Nombres jusqu'à 20 pour un défi accru
    random2 = Math.floor(Math.random() * 20) + 1;
    nb1.textContent = random1;
    nb2.textContent = random2;
}

genererQuestion();
message.style.display = 'none'; // Cacher le message initialement

function verifier() {
    var res = parseInt(responseInput.value);
    if (!isNaN(res)) {
        if (random1 + random2 === res) {
            message.style.backgroundColor = "#28a745"; // Vert pour correct
            message.textContent = "Correct !";
            message.style.display = 'block';
            setTimeout(() => {
                message.style.display = 'none';
                genererQuestion();
                responseInput.value = ''; // Effacer l'entrée après une réponse correcte
                compteur++;
            }, 1000);
        } else {
            message.style.backgroundColor = "#dc3545"; // Rouge pour incorrect
            message.textContent = `Faux. La réponse était ${random1 + random2}.`;
            message.style.display = 'block';
            quizSection.style.display = "none";
            scoreDisplay.innerHTML = `Score final : <span>${compteur}</span>`;
            link.style.display = "block";
        }
    } else {
        message.style.backgroundColor = "#ffc107"; // Jaune pour avertissement
        message.textContent = "Veuillez entrer un nombre.";
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 1500);
    }
}