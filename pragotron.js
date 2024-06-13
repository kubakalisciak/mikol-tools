// deklaracja zmiennych globalnych
let koncowa;
let posrednia;
let godzina;
let numer;
let opoznienie;

function odczytajDane() {
    const Koncowa = document.querySelector('#koncowa');
    koncowa = Koncowa.value;
    const Posrednia = document.querySelector('#posrednia');
    posrednia = Posrednia.value;
    const Godzina = document.querySelector('#godzina');
    godzina = Godzina.value;
        alert(godzina);
    const Numer = document.querySelector('#numer');
    numer = Numer.value;
    const Opoznienie = document.querySelector('#opoznienie');
    opoznienie = Opoznienie.value;
}

const odczytajP = document.querySelector('#odczytajP');
odczytajP.onclick = () => odczytajDane();