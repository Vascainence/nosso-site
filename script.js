// ==============================
// CONTADOR
// Data: 03/04/2026
// ==============================

const dataNamoro = new Date(2025, 3, 3, 0, 0, 0);

function atualizarContador(){

    const agora = new Date();

    const diferenca = agora - dataNamoro;

    // Se a data ainda não chegou

    if(diferenca < 0){

        dias.innerText = "0";
        horas.innerText = "00";
        minutos.innerText = "00";
        segundos.innerText = "00";

        return;

    }

    const d = Math.floor(
        diferenca /
        (1000 * 60 * 60 * 24)
    );

    const h = Math.floor(
        (diferenca /
        (1000 * 60 * 60))
        % 24
    );

    const m = Math.floor(
        (diferenca /
        (1000 * 60))
        % 60
    );

    const s = Math.floor(
        (diferenca / 1000)
        % 60
    );

    document.getElementById("dias")
    .innerText = d;

    document.getElementById("horas")
    .innerText = String(h)
    .padStart(2,"0");

    document.getElementById("minutos")
    .innerText = String(m)
    .padStart(2,"0");

    document.getElementById("segundos")
    .innerText = String(s)
    .padStart(2,"0");

}

setInterval(
    atualizarContador,
    1000
);

atualizarContador();



// ==============================
// CÉU ESTRELADO COM CANVAS
// ==============================

const canvas = document.getElementById("stars");

const ctx = canvas.getContext("2d");

let estrelas = [];

function redimensionar(){

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}

window.addEventListener(
    "resize",
    redimensionar
);

redimensionar();



// CRIA ESTRELAS

for(let i=0;i<150;i++){

    estrelas.push({

        x:
        Math.random()
        * canvas.width,

        y:
        Math.random()
        * canvas.height,

        r:
        Math.random()*2,

        alpha:
        Math.random(),

        speed:
        Math.random()*0.015

    });

}



function desenhar(){

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    estrelas.forEach(star=>{

        star.alpha += star.speed;

        if(

        star.alpha > 1 ||

        star.alpha < .2

        ){

            star.speed *= -1;

        }

        ctx.beginPath();

        ctx.arc(

            star.x,

            star.y,

            star.r,

            0,

            Math.PI*2

        );

        ctx.fillStyle =

        `rgba(

        255,

        255,

        255,

        ${star.alpha}

        )`;

        ctx.fill();

    });

    requestAnimationFrame(

        desenhar

    );

}

desenhar();



// ==============================
// EFEITO NAS FOTOS
// ==============================

const pins =

document.querySelectorAll(".pin");

pins.forEach(pin=>{

    pin.addEventListener(

        "mouseenter",

        ()=>{

        pin.style.transform =

        "translateY(-10px) scale(1.02)";

    });

    pin.addEventListener(

        "mouseleave",

        ()=>{

        pin.style.transform =

        "translateY(0) scale(1)";

    });

});



// ==============================
// MENSAGEM NO CONSOLE 💜
// ==============================

console.log(

"%c💜 Site criado com amor por Bruno 💜",

"font-size:20px;color:#c77dff;font-weight:bold;"

);
