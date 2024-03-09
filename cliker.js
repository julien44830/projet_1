const resulta = document.getElementsByClassName('resulta');
const clik = document.getElementsByClassName('img');
const body = document.getElementsByClassName('body');
let clic =0;
let num = 0;

console.log(clik, resulta, body);

function cunter() {
    console.log('clik');
}

// Boucle à travers chaque élément avec la classe 'img' et ajoute l'écouteur d'événements
for (let i = 0; i < clik.length; i++) {
    clik[i].addEventListener("click", (e) => {
        const score = document.querySelector('.score');
        let scorePara = document.getElementsByClassName('scorePara');
        let message = "tu a usé ta sourie de " + clic + " click pour rien";
        let scoreMessae = "ton score est de " + num;
        clic += 1;
        num += 1;
        console.log('valeur du click : ' + num);
        console.log(message);

        if(num >= 10){
            num += 2;

            document.body.classList.add('badground');
            document.body.style.backgroundColor = 'red'; 
            score.classList.add('score');
            score.style.display = 'flex'; 
            scorePara[i].innerHTML = scoreMessae;
    
        };
        if(num>=100){
            num += 2;
            
        };
        if(num>=200){
            num += 2;
        };
        if(num>=300){
            num += 2;
        };
        if(num == 1008){
            num += 2;
            message = "beaucoup trop";
            alert('fait une pose avec ta sourie bourin');
        }

        // Parcourir chaque élément de la collection resulta
        for (let j = 0; j < resulta.length; j++) {
            // Mettre à jour le contenu HTML de chaque élément avec la valeur de num
            resulta[j].innerHTML = message;
        }
    });
};



console.log( resulta);
