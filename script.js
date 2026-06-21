// ======================
// CONTADOR ROMÂNTICO
// Desde 03/04/2026
// ======================

// Ano, mês (abril = 3), dia
const dataNamoro = new Date(2026, 3, 3, 0, 0, 0);

function atualizarContador() {

    const agora = new Date();

    let diferenca = agora - dataNamoro;

    // Se a data ainda não chegou
    if (diferenca < 0) {

        document.getElementById("dias").innerText = "0";
        document.getElementById("horas").innerText = "0";
        document.getElementById("minutos").innerText = "0";
        document.getElementById("segundos").innerText = "0";

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

    document.getElementById("dias").innerText = dias;

    document.getElementById("horas").innerText =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").innerText =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").innerText =
        String(segundos).padStart(2, "0");

}

// Atualiza imediatamente
atualizarContador();

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);



// ======================
// EFEITO NAS POLAROIDS
// ======================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 25px 50px rgba(0,0,0,.45)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
            "0 15px 35px rgba(0,0,0,.35)";

    });

});



// ======================
// BRILHO NO BOTÃO
// ======================

const btn = document.querySelector(".btn");

if(btn){

    setInterval(() => {

        btn.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(1.04)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:1500

        });

    },2500);

}



// ======================
// MENSAGEM NO CONSOLE 💜
// ======================

console.log(

"%c💜 Site criado com amor por Bruno 💜",

"font-size:20px;color:#c77dff;font-weight:bold;"

);
