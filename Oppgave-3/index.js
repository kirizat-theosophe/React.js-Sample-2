const btnFade = document.querySelector("#btnFade");
const btnFadeLeft = document.querySelector("#btnFadeLeft");
const btnGrow = document.querySelector("#btnGrow");

const firkant = document.querySelector("#firkant");

btnFade.onclick = () => firkant.className = "fadeUt"; 
btnFadeLeft.onclick = () => firkant.className = "fadeLeft"; 
btnGrow.onclick = () => firkant.className = "zoom"; 


const tekst = document.getElementById("tekst");

        function flyttMeg(){
            tekst.style.left = (scrollY *5) + "px";
        }

        window.addEventListener("scroll", flyttMeg);   


        const bilde = document.querySelector("#bilde");

const bilder = [
    "./img/green.jpg",
    "./img/green-1.jpg",
    "./img/nature-images-6.jpg",
    "./img/green-nature-blue-sky.jpg"
];

let indeks = 1;

function byttBilde (){
    const nyttBilde = bilder[indeks];
    bilde.src = nyttBilde;

    indeks++;
    if(indeks >= bilder.length){
        indeks = 0;
    }
    
}

bilde.addEventListener("animationiteration", byttBilde);

        