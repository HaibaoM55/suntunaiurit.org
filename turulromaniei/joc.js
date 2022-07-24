//Variabilele globale
let zar_nr1, zar_nr2, poz_j1, poz_j2, jucator1 = true, jucator2 = false;
poz_j1 = 0;
poz_j2 = 0;
function $(id){
    return document.getElementById(id);
}
function start(){
    $("joaca").style.display="none";
    $("joc").style.display="block";
}
//Aceasta functie va arata un nr punctat
//Exemple: 1000 -> 1.000; 1000000 -> 1.000.000;
function punctnr(nr){
    return new Intl.NumberFormat().format(nr);
}
function zar(){
    clearTimeout();
    $("zar").style.display = "block";
    zar_nr1 = Math.floor(Math.random()*6)+1;
    zar_nr2 = Math.floor(Math.random()*6)+1;
    $("zar1").innerHTML = zar_nr1;
    $("zar2").innerHTML = zar_nr2;
    if(jucator1){
        old_poz = poz_j1;
        poz_j1 += zar_nr1;
        poz_j1 += zar_nr2;
        vewold_poz = poz_j1;
        if(poz_j1 > 13)
        {
            poz_j1 = poz_j1 - 14;
            setTimeout(() => {animhigh(old_poz, 13);}, 2000);
            setTimeout(() => {animhigh(0, poz_j1);}, 4000);
            setTimeout(() => {j1m_anim(old_poz, 13)}, 2000);
            setTimeout(() => {j1m_anim(0, poz_j1)}, 4000);
        }
        else
        {
            setTimeout(() => {animhigh(old_poz, poz_j1);}, 2000);
            setTimeout(() => {j1m_anim(old_poz, poz_j1)}, 2000);
        }
        setTimeout(() => {
            jucator1 = false;
            jucator2 = true; 
            $("anunt").style.display = "block";
            $("anunt_text").innerText = "Jucatorul 2 a luat zarul";           
        }, 4000);
    }
    if(jucator2){
        old_poz = poz_j2;
        poz_j2 += zar_nr1;
        poz_j2 += zar_nr2;
        vewold_poz = poz_j2;
        if(poz_j2 > 13)
        {
            poz_j2 = poz_j2 - 14;
            setTimeout(() => {animhigh(old_poz, 13);}, 2000);
            setTimeout(() => {animhigh(0, poz_j2);}, 4000);
            setTimeout(() => {j2m_anim(old_poz, 13)}, 2000);
            setTimeout(() => {j2m_anim(0, poz_j2)}, 4000);
        }
        else
        {
            setTimeout(() => {animhigh(old_poz, poz_j2);}, 2000);
            setTimeout(() => {j2m_anim(old_poz, poz_j2)}, 2000);
        }
        setTimeout(() => {
            jucator1 = true;
            jucator2 = false;
            $("anunt").style.display = "block";
            $("anunt_text").innerText = "Jucatorul 1 a luat zarul";
        }, 4000);
    }
    setTimeout(() => {$("anunt").style.display = "none";}, 5000);
    setTimeout(() => {$("zar").style.display = "none";}, 2000);
}
function highmergi(numar){
    if(numar == 0){
        $("highlighter").style.top = "280px";
        $("highlighter").style.left = "400px";
    }
    if(numar == 1){
        $("highlighter").style.top = "280px";
        $("highlighter").style.left = "310px";
    }
    if(numar == 2){
        $("highlighter").style.top = "280px";
        $("highlighter").style.left = "200px";
    }
    if(numar == 3){
        $("highlighter").style.top = "280px";
        $("highlighter").style.left = "100px";
    }
    if(numar == 4){
        $("highlighter").style.top = "280px";
        $("highlighter").style.left = "0px";
    }
    if(numar == 5){
        $("highlighter").style.top = "180px";
        $("highlighter").style.left = "0px";
    }
    if(numar == 6){
        $("highlighter").style.top = "80px";
        $("highlighter").style.left = "0px";
    }
    if(numar == 7){
        $("highlighter").style.top = "0px";
        $("highlighter").style.left = "0px";
    }
    if(numar == 8){
        $("highlighter").style.top = "0px";
        $("highlighter").style.left = "110px";
    }
    if(numar == 9){
        $("highlighter").style.top = "0px";
        $("highlighter").style.left = "210px";
    }
    if(numar == 10){
        $("highlighter").style.top = "0px";
        $("highlighter").style.left = "310px";
    }
    if(numar == 11){
        $("highlighter").style.top = "0px";
        $("highlighter").style.left = "400px";
    }
    if(numar == 12){
        $("highlighter").style.top = "80px";
        $("highlighter").style.left = "400px";
    }
    if(numar == 13){
        $("highlighter").style.top = "180px";
        $("highlighter").style.left = "400px";
    }
}
function mergi_j1(poz_j1){
    if(poz_j1 == 0){
        $("text_j1").style.top = "280px";
        $("text_j1").style.left = "400px";
    }
    if(poz_j1 == 1){
        $("text_j1").style.top = "280px";
        $("text_j1").style.left = "310px";
    }
    if(poz_j1 == 2){
        $("text_j1").style.top = "280px";
        $("text_j1").style.left = "200px";
    }
    if(poz_j1 == 3){
        $("text_j1").style.top = "280px";
        $("text_j1").style.left = "100px";
    }
    if(poz_j1 == 4){
        $("text_j1").style.top = "280px";
        $("text_j1").style.left = "0px";
    }
    if(poz_j1 == 5){
        $("text_j1").style.top = "180px";
        $("text_j1").style.left = "0px";
    }
    if(poz_j1 == 6){
        $("text_j1").style.top = "80px";
        $("text_j1").style.left = "0px";
    }
    if(poz_j1 == 7){
        $("text_j1").style.top = "0px";
        $("text_j1").style.left = "0px";
    }
    if(poz_j1 == 8){
        $("text_j1").style.top = "0px";
        $("text_j1").style.left = "110px";
    }
    if(poz_j1 == 9){
        $("text_j1").style.top = "0px";
        $("text_j1").style.left = "210px";
    }
    if(poz_j1 == 10){
        $("text_j1").style.top = "0px";
        $("text_j1").style.left = "310px";
    }
    if(poz_j1 == 11){
        $("text_j1").style.top = "0px";
        $("text_j1").style.left = "400px";
    }
    if(poz_j1 == 12){
        $("text_j1").style.top = "80px";
        $("text_j1").style.left = "400px";
    }
    if(poz_j1 == 13){
        $("text_j1").style.top = "180px";
        $("text_j1").style.left = "400px";
    }
}
highmergi(0);
clearTimeout();
function animhigh(start, sfarsit){
    for(let i = start; i <= sfarsit; i++){
        setTimeout(() => {highmergi(i);}, i*100);
    }
}
function j1m_anim(start, sfarsit){
    for(let i = start; i <= sfarsit; i++){
        setTimeout(() => {mergi_j1(i);}, i*100);
    }
}
function mergi_j2(poz_j2){
    if(poz_j2 == 0){
        $("text_j2").style.top = "280px";
        $("text_j2").style.left = "400px";
    }
    if(poz_j2 == 1){
        $("text_j2").style.top = "280px";
        $("text_j2").style.left = "310px";
    }
    if(poz_j2 == 2){
        $("text_j2").style.top = "280px";
        $("text_j2").style.left = "200px";
    }
    if(poz_j2 == 3){
        $("text_j2").style.top = "280px";
        $("text_j2").style.left = "100px";
    }
    if(poz_j2 == 4){
        $("text_j2").style.top = "280px";
        $("text_j2").style.left = "0px";
    }
    if(poz_j2 == 5){
        $("text_j2").style.top = "180px";
        $("text_j2").style.left = "0px";
    }
    if(poz_j2 == 6){
        $("text_j2").style.top = "80px";
        $("text_j2").style.left = "0px";
    }
    if(poz_j2 == 7){
        $("text_j2").style.top = "0px";
        $("text_j2").style.left = "0px";
    }
    if(poz_j2 == 8){
        $("text_j2").style.top = "0px";
        $("text_j2").style.left = "110px";
    }
    if(poz_j2 == 9){
        $("text_j2").style.top = "0px";
        $("text_j2").style.left = "210px";
    }
    if(poz_j2 == 10){
        $("text_j2").style.top = "0px";
        $("text_j2").style.left = "310px";
    }
    if(poz_j2 == 11){
        $("text_j2").style.top = "0px";
        $("text_j2").style.left = "400px";
    }
    if(poz_j2 == 12){
        $("text_j2").style.top = "80px";
        $("text_j2").style.left = "400px";
    }
    if(poz_j2 == 13){
        $("text_j2").style.top = "180px";
        $("text_j2").style.left = "400px";
    }
}
function j2m_anim(start, sfarsit){
    for(let i = start; i <= sfarsit; i++){
        setTimeout(() => {mergi_j2(i);}, i*100);
    }
}