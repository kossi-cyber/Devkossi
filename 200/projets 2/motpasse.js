let copyBtn = document.getElementById('copy');



function GetPassword() {
  let chars = "abcdefghjiklmnopqrstvwzABCDEFGHJIKLMNOPQRSTVW1234567890;,:!?./§%¨£";
  let passwordLength = 16;
  let password = "";

  //generer le mot de passe

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);

    password += chars.substring(randomNumber, randomNumber + 1);

    //display the password

    document.getElementById('password').value = password;

    copyBtn.style.background = "#6c757d";
    copyBtn.style.color = "#fff";
  };
}


function copy() {
  let inputPassword = document.getElementById('password');

  if (inputPassword.value.length == 16) {
    inputPassword.select();
    document.execCommand("copy");
    alert("mot de passe");
    copyBtn.style.background = "transparent";
    copyBtn.style.color = "#000";

  } else {
    alert("rein");
  }
}
