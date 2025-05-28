const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixutilisateur =  document.getElementById('choix-utilisateur');
const contenantChoixResultat = document.getElementById('resultat');

const choixpossibles = document.querySelectorAll('button');
let choixUtilisateur;
let resultat;
let choixOrdinateur;
// let choixpossible;
// console.log(choixpossibles);

choixpossibles.forEach(choixpossible => {
    choixpossible.addEventListener('click', (e) => {
      choixUtilisateur = e.target.id;
      contenantChoixutilisateur.innerHTML = `<img src="${choixUtilisateur}.jpeg">`;

    //   contenantChoixutilisateur.innerHTML =`<p>${choixUtilisateur}></p>`;
      
      generer_choix_ordinateur();
      verification();//  contenantChoixutilisateur.innerHTML = `<img src="${choixUtilisateur}.jpeg">`;
    });


});
  
//  contenantChoixutilisateur.innerHTML = `<img src="${choixUtilisateur}.jpeg">`;


// choixpossibles.forEach(choixpossibles=> choixpossibles.addEventListener('click',(e)=>{
//     choixUtilisateur = e.target.id ;
//  contenantChoixutilisateur.innerHTML = `<p>${choixUtilisateur}></p>`;


function generer_choix_ordinateur(){
    random = Math.floor(Math.random() * 3) +1;
 if(random === 1) {
    choixOrdinateur = "Pierre";
 }   
 if(random === 2) {
    choixOrdinateur = "Papier";
 }   
 if(random === 3) {
    choixOrdinateur = "Ciseaux";
 } 
 contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.jpeg">`;
}

function verification() {
    if(choixUtilisateur == choixOrdinateur){
        resultat = "égalité";
    }
    if(choixUtilisateur == "Pierre" && choixOrdinateur == "Papier"){
        resultat = "perdu";
    }
    if(choixUtilisateur == "Papier" && choixOrdinateur == "Ciseaux"){
        resultat = "perdu";
    }
    if(choixUtilisateur == "Ciseaux" && choixOrdinateur =="Pierre"){
        resultat == "Perdu";
    }
    if(choixUtilisateur == "Pierre" && choixOrdinateur == "Ciseaux"){
        resultat = "gagné"
    }
    if(choixUtilisateur == "Ciseaux" && choixOrdinateur == "Papier" ){
        resultat= "gagné";
    }
    if(choixUtilisateur == "Papier" && choixOrdinateur == "Pierre" ){
        resultat = "gagné";
    }
      contenantChoixResultat.innerHTML = resultat;
}  