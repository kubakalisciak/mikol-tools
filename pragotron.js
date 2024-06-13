// deklaracja zmiennych globalnych
let koncowa;
let posrednia;
let godzina;
let numer;
let opoznienie;

function odczytajDane() {
    const Koncowa = document.querySelector('#koncowaI');
    koncowa = Koncowa.value;
    const Posrednia = document.querySelector('#posredniaI');
    posrednia = Posrednia.value;
    const Godzina = document.querySelector('#godzinaI');
    godzina = Godzina.value;
    const Numer = document.querySelector('#numerI');
    numer = Numer.value;
    const Opoznienie = document.querySelector('#opoznienieI');
    if (Opoznienie.value == "") {
        opoznienie = "Na czas";
    }
    else {
        opoznienie = Opoznienie.value;
    }
}

function aktualizujTablice() {
    odczytajDane();
    const Koncowa = document.querySelector('#koncowaT');
    Koncowa.textContent = koncowa;
    const Posrednia = document.querySelector('#posredniaT');
    Posrednia.textContent = posrednia;
    const Godzina = document.querySelector('#godzinaT');
    Godzina.textContent = godzina;
    const Numer = document.querySelector('#numerT');
    Numer.textContent = numer;
    const Opoznienie = document.querySelector('#opoznienieT');
    Opoznienie.textContent = opoznienie;
}

const aktualizujP = document.querySelector('#aktualizujP');
aktualizujP.onclick = () => aktualizujTablice();