let bot = document.getElementById("bot");
let x = Math.floor((Math.random() * 3) );
let eredmeny = document.getElementById("eredmeny");
let jatekos = document.getElementById("jatekos");

function k() {
    jatekos.innerHTML = "Kő";
    if (eredmeny.innerHTML == "Döntetlen" || eredmeny.innerHTML == "Vesztett" || eredmeny.innerHTML == "Győzelem" ) {}
    else {
        if (x == 0) {
            bot.innerHTML = "Kő"
            eredmeny.innerHTML = "Döntetlen"
        } else if (x == 1) {
            bot.innerHTML = "Papír"
            eredmeny.innerHTML = "Vesztett"
        } else {
            bot.innerHTML = "Olló"
            eredmeny.innerHTML = "Győzelem"
        }
    }
}

function p() {
    jatekos.innerHTML = "Papír";
    if (eredmeny.innerHTML == "Döntetlen" || eredmeny.innerHTML == "Vesztett" || eredmeny.innerHTML == "Győzelem" ) {}
    else {
        if (x == 0) {
            bot.innerHTML = "Kő"
            eredmeny.innerHTML = "Győzelem"
        } else if (x == 1) {
            bot.innerHTML = "Papír"
            eredmeny.innerHTML = "Döntetlen"
        } else {
            bot.innerHTML = "Olló"
            eredmeny.innerHTML = "Vesztett"
        }
    }
}

function o() {
    jatekos.innerHTML = "Olló";
    if (eredmeny.innerHTML == "Döntetlen" || eredmeny.innerHTML == "Vesztett" || eredmeny.innerHTML == "Győzelem" ) {}
    else {
        if (x == 0) {
            bot.innerHTML = "Kő"
            eredmeny.innerHTML = "Vesztett"
        } else if (x == 1) {
            bot.innerHTML = "Papír"
            eredmeny.innerHTML = "Győzelem"
        } else {
            bot.innerHTML = "Olló"
            eredmeny.innerHTML = "Döntetlen"
        }
    }
}

function ujra() {
    location.reload()
}