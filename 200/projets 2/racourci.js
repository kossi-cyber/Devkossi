let player = document.querySelector(".player");
let obstacle = document.querySelector(".obstacle");
let jumpButton = document.getElementById('jump-button');

function jump() {
    if (player.classList != "animation") {
        player.classList.add('animation');
    }
    setTimeout(function(){
        player.classList.remove('animation');
    }, 500);
}

let checkCollision = setInterval(function() {
    let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    let playerWidth = player.offsetWidth;
    let obstacleWidth = obstacle.offsetWidth;

    // Collision Detection
    if (obstacleLeft < playerWidth && obstacleLeft > 0 && playerBottom < 80) {
        clearInterval(checkCollision);
        obstacle.style.animation = "none";
        alert("Game Over! Vous avez perdu.");
        obstacle.style.animation = "obstacle 2.5s infinite linear"; // Réactiver l'animation pour le rechargement
    }
}, 10);

jumpButton.addEventListener('click', jump);

// Permettre le saut avec la barre d'espace
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});