const passwordInput = document.getElementById('password');
const copyBtn = document.getElementById('copy');

function getPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 16;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNumber);
    }

    passwordInput.value = password;
}

function copyMdp() {
    if (passwordInput.value.length === 16) {
        passwordInput.select();
        document.execCommand('copy');
        // Provide visual feedback
        copyBtn.classList.add('copied');
        setTimeout(() => {
            copyBtn.classList.remove('copied');
        }, 1500);
    } else {
        alert('Veuillez générer un mot de passe.');
    }
}

copyBtn.addEventListener('click', copyMdp);

// Optional: Add a visual feedback class for the copy button
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
.password-display button#copy.copied {
    background-color: #00c853; /* A more prominent feedback color */
    color: #fff;
}
`;
document.head.appendChild(styleSheet);