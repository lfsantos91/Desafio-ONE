function criptografiaTexto(texto) {
    const mapaLetras = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat",
        
    };

    let criptografadoTexto = "";

    for (let letra of texto.toLowerCase()) {
        if (mapaLetras.hasOwnProperty(letra)) {
            criptografadoTexto += mapaLetras[letra];
        } else {
            criptografadoTexto += letra;
        }
    }

    return criptografadoTexto;
}

function descriptografiaTexto(criptografadoTexto) {

    const mapaReverso = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u",
    };

    const chaves = Object.keys(mapaReverso).sort((a, b) => b.length - a.length);

    let descriptografadoTexto = criptografadoTexto;

    for (let codigo of chaves) {
        const vogal = mapaReverso[codigo];
        const regex = new RegExp(codigo, 'g');
        descriptografadoTexto = descriptografadoTexto.replace(regex, vogal);
    }

    return descriptografadoTexto;
}

function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function esconder(el) {
    document.getElementById(el).style.display = "none";
}

function mostrar(el) {
    document.getElementById(el).style.display = "block";
}

const btn = document.querySelector("#criptografar");
btn.addEventListener("click", function(e) {
    e.preventDefault();
    const inputElement = document.querySelector("#texto-principal");
    const value = inputElement.value;
    const criptografadoTexto = criptografiaTexto(value);
    textoNaTela('#resultado', criptografadoTexto);
    mostrar('btn_copiar')
    mostrar('resultado')
});

const btn2 = document.querySelector("#descriptografar");
btn2.addEventListener("click", function(e) {
    e.preventDefault();
    const inputElement = document.querySelector("#texto-principal");
    const value = inputElement.value;
    const descriptografadoTexto = descriptografiaTexto(value);
    textoNaTela('#resultado', descriptografadoTexto);
    mostrar('btn_copiar')
    mostrar('resultado')
});

document.getElementById('btn_copiar').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
    let text = document.querySelector("#resultado").value;
    await navigator.clipboard.writeText(text);
}