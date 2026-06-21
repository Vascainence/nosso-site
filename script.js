// ===============================
// CONTADOR ROMÂNTICO
// Desde 03/04/2026
// ===============================

const dataNamoro = new Date(2026, 3, 3, 0, 0, 0);

const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

function atualizarContador() {

    const agora = new Date();

    let diferenca = agora - dataNamoro;

    // Caso a data ainda não tenha chegado

    if (diferenca < 0) {

        diasEl.innerText = "0";
        horasEl.innerText = "00";
        minutosEl.innerText = "00";
        segundosEl.innerText = "00";

        return;

    }

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    diasEl.innerText = dias;

    horasEl.innerText =
        String(horas).padStart(2, "0");

    minutosEl.innerText =
        String(minutos).padStart(2, "0");

    segundosEl.innerText =
        String(segundos).padStart(2, "0");

}

atualizarContador();

setInterval(
    atualizarContador,
    1000
);



// ===============================
// CÉU ESTRELADO COM CANVAS
// ===============================

const canvas = document.getElementById("stars");

const ctx = canvas.getContext("2d");

let estrelas = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}

window.addEventListener(
    "resize",
    resizeCanvas
);

resizeCanvas();

function criarEstrelas() {

    estrelas = [];

    let quantidade;

    // Menos estrelas no celular

    if(window.innerWidth < 768){

        quantidade = 70;

    }else{

        quantidade = 150;

    }

    for(let i=0;i<quantidade;i++){

        estrelas.push({

            x:
            Math.random()
            * canvas.width,

            y:
            Math.random()
            * canvas.height,

            raio:
            Math.random()*2,

            alpha:
            Math.random(),

            velocidade:
            Math.random()*0.01

        });

    }

}

criarEstrelas();

window.addEventListener(
    "resize",
    criarEstrelas
);



function animarEstrelas(){

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    estrelas.forEach(estrela=>{

        estrela.alpha += estrela.velocidade;

        if(

            estrela.alpha >= 1 ||

            estrela.alpha <= 0.2

        ){

            estrela.velocidade *= -1;

        }

        ctx.beginPath();

        ctx.arc(

            estrela.x,

            estrela.y,

            estrela.raio,

            0,

            Math.PI*2

        );

        ctx.fillStyle =

        `rgba(

        255,

        255,

        255,

        ${estrela.alpha}

        )`;

        ctx.fill();

    });

    requestAnimationFrame(

        animarEstrelas

    );

}

animarEstrelas();




// ===============================
// ENVELOPE ABRINDO
// ===============================

const envelope =

document.getElementById("envelope");

if(envelope){

    envelope.addEventListener(

        "click",

        ()=>{

            envelope.classList.toggle(

                "aberto"

            );

        }

    );

}




// ===============================
// ANIMAÇÃO NAS FOTOS
// ===============================

const fotos =

document.querySelectorAll(".foto");

fotos.forEach(foto=>{

    foto.addEventListener(

        "mouseenter",

        ()=>{

            foto.style.transform =

            "translateY(-10px) scale(1.03)";

        }

    );

    foto.addEventListener(

        "mouseleave",

        ()=>{

            foto.style.transform =

            "translateY(0) scale(1)";

        }

    );

});




// ===============================
// ANIMAÇÃO DO HERO
// ===============================

const titulo =

document.querySelector(".hero h1");

if(titulo){

    setInterval(()=>{

        titulo.animate([

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(1.03)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:2500

        });

    },3500);

}




// ===============================
// MENSAGEM NO CONSOLE
// ===============================

console.log(

"%c💜 Site criado com amor por Bruno 💜",

"font-size:22px;color:#c77dff;font-weight:bold;"

);
