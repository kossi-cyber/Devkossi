let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.calculator button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;

        switch (buttonText) {
            case '=':
                try {
                    string = eval(string);
                    input.value = string;
                } catch (error) {
                    input.value = "Erreur";
                    string = "";
                }
                break;
            case 'AC':
                string = "";
                input.value = string;
                break;
            case 'DEL':
                string = string.slice(0, -1);
                input.value = string;
                break;
            default:
                string += buttonText;
                input.value = string;
        }
    });
});