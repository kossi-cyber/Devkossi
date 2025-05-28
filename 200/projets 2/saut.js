let player = document.querySelector(".player");
let asteroid = document.querySelector(".asteroid");
let jumpButton = document.getElementById('jump-button');
let spaceArea = document.querySelector('.space-area');

function propel() {
    if (player.classList != "propulsion") {
        player.classList.add('propulsion');
    }
    setTimeout(function(){
        player.classList.remove('propulsion');
    }, 500);
}

let checkCollision = setInterval(function() {
    let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    let asteroidLeft = parseInt(window.getComputedStyle(asteroid).getPropertyValue("left"));
    let playerWidth = player.offsetWidth;
    let asteroidWidth = asteroid.offsetWidth;

    // Collision Detection
    if (asteroidLeft < playerWidth && asteroidLeft > 0 && playerBottom < 90) {
        clearInterval(checkCollision);
        asteroid.style.animation = "none";
        spaceArea.style.animation = "shake 0.5s infinite alternate"; // Exemple d'animation de collision
        alert("Collision! Game Over.");
        asteroid.style.animation = "asteroid-move 3s infinite linear, asteroid-rotate 2s infinite linear";
        spaceArea.style.animation = "";
    }
}, 10);

jumpButton.addEventListener('click', propel);

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        propel();
    }
});

// Fonction pour ajouter des étoiles aléatoirement (exemple)
function createStars() {
    for (let i = 0; i < 100; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        let size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.backgroundColor = '#fff';
        star.style.opacity = Math.random() * 0.8 + 0.2;
        star.style.position = 'absolute';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        spaceArea.appendChild(star);
    }
}
