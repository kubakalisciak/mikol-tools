let koncowa;
let typ;
let posrednia;
let godzina;
let inne;
let peron;
let tor;

function odczytaj() {
    let koncowaI = document.querySelector('#stacja-koncowa');
    koncowa = koncowaI.value;
    let typI = document.querySelector('#typ-pociagu');
    let Typ = typI.value;
    if (Typ == "inne") {
        typ = prompt("Nie wybrano typu pociągu; jaki typ pociągu?");
    }
    else {
        typ = Typ;
    }
    let posredniaI = document.querySelector('#stacja-posrednia');
    posrednia = posredniaI.value;
    let godzinaI = document.querySelector('#godzina');
    godzina = godzinaI.value;
    let inneI = document.querySelector('#inne');
    inne = inneI.value;
    let peronI = document.querySelector('#peron');
    peron = peronI.value;
    let torI = document.querySelector('#tor');
    tor = torI.value;
}

function kolorujTyp(obiekt) {
    switch (typ){
        case "eip":
            obiekt.style.color = '#0E437D';
            break;
        case "eic":
            obiekt.style.color = '#4DD0E1';
            break;
        case "ic":
            obiekt.style.color = '#FF5722';
            break;
        case "tlk":
            obiekt.style.color = '#6A1B9A';
            break;
        case "regio":
            obiekt.style.color = '#D22F2F';
            break;
        default:
            obiekt.style.color = '#6BAA6C';
            break;
    }
}

function aktualizuj() {
    odczytaj();
    let koncowaO = document.querySelector('#koncowaO');
    koncowaO.textContent = koncowa.toUpperCase();
    let typO = document.querySelector('#typO');
    typO.textContent = typ.toUpperCase();
    kolorujTyp(typO);
    let posredniaO = document.querySelector('#posredniaO');
    posredniaO.textContent = posrednia.toUpperCase();
    let godzinaO = document.querySelector('#godzinaO');
    godzinaO.textContent = godzina.toUpperCase();
    let inneO = document.querySelector('#inneO');
    inneO.textContent = inne.toUpperCase();
    let peronO = document.querySelector('#peronO');
    peronO.textContent = peron.toUpperCase();
    let torO = document.querySelector('#torO');
    torO.textContent = tor.toUpperCase();
}

let aktualizujP = document.querySelector('#aktualizujP')
aktualizujP.onclick = () => aktualizuj();