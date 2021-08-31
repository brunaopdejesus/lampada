"use strict"
const lampada = document.getElementById("lampada")
let idInterval

function botoesLigaDesliga(ligarEstado, desligarEstado) {
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")
    ligar.disabled = ligarEstado
    desligar.disabled = desligarEstado
}

// function lampadaQuebrada() {
//     return document.getElementById("lampada").src.indexOf("quebrada") !== -1
// }

// FUNCTION ARROW
const lampadaQuebrada = () => lampada.src.indexOf("quebrada") !== -1

function ligarLampada() {
    if (!lampadaQuebrada()) {
        lampada.src = "img/ligada.jpg"
        botoesLigaDesliga(true, false) 
    }
}

function desligarLampada() {
    if (!lampadaQuebrada()) {
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true) 
    }
}

function quebrarLampada() {
        lampada.src = "img/quebrada.jpg"
        botoesLigaDesliga(true, true)
}

// function lampadaDesligada() {
//     return lampada.src.includes("desligada")
// }

const lampadaDesligada = () => lampada.src.includes("desligada")


function trocarImagem() {
    if (lampadaDesligada()) {
        ligarLampada()
    } else {
        desligarLampada()
    }
}

function piscar() {
    const piscar = document.getElementById("piscar")
    if (piscar.textContent == "Piscar") {
        idInterval = setInterval(trocarImagem, 500)
        piscar.textContent = "Parar"
    } else {
        clearInterval(idInterval)
        piscar.textContent = "Piscar"
    }
}



//  Eventos
document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)
document.getElementById("lampada").addEventListener("dblclick", quebrarLampada)
document.getElementById("lampada").addEventListener("mouseover", ligarLampada)
document.getElementById("lampada").addEventListener("mouseleave", desligarLampada)
document.getElementById("piscar").addEventListener("click", piscar)

//  FUNÇÕES ANÔNIMAS
    
    // function soma(a, b) {
    //     return a + b
    // }

    // const soma = (a, b) => a + b

    // ----------------------------

    // const soma10 = (a) => a + 10
