let koncowa;
let typ;
let posrednia;
let godzina;
let inne;

function odczytaj() {
    let koncowaI = document.querySelector('#stacja-koncowa');
    koncowa = koncowaI.value;
    let typI = document.querySelector('#typ-pociagu');
    let Typ = typI.value;
    if (Typ === "Inne") {
        typ = prompt("Nie podano typu pociągu; jaki chcesz zastosować?");
    }
    else {
        typ = typI.value;
    }
    let posredniaI = document.querySelector('#stacja-posrednia');
    posrednia = posredniaI.value;
    let godzinaI = document.querySelector('#godzina');
    godzina = godzinaI.value;
    let inneI = document.querySelector('#inne');
    inne = inneI.value;
}

function aktualizuj() {
    odczytaj();
    let koncowaO = document.querySelector('#koncowaO');
    koncowaO.textContent = koncowa.toUpperCase();
    let typO = document.querySelector('#typO');
    typO.textContent = typ.toUpperCase();
}

let aktualizujP = document.querySelector('#aktualizujP')
aktualizujP.onclick = () => aktualizuj();