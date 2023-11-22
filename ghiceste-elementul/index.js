metaleB = false
function metaleF(){
    metaleB = !metaleB
    aclen = metale.length-1
    if(metaleB){
        $("metale").style.color = "yellow";
        for(i = 0; i <= aclen-1; i++){
            dict[metale[i].nume] = metale[i].prescurtare
        }
    }else{
        $("metale").style.color = "";
        for(i = 0; i <= aclen-1; i++){
            delete dict[metale[i].nume]
        }
    }
}

saruriB = false

function saruriF(){
    saruriB = !saruriB
    aclen = saruri.length-1
    if(saruriB){
        $("saruri").style.color = "yellow";
        for(i = 0; i <= aclen-1; i++){
            dict[saruri[i].nume] = saruri[i].prescurtare
        }
    }else{
        $("saruri").style.color = "";
        for(i = 0; i <= aclen-1; i++){
            delete dict[saruri[i].nume]
        }
    }
}
bazeB = false

function bazeF(){
    bazeB = !bazeB
    aclen = baze.length-1
    if(bazeB){
        $("baze").style.color = "yellow";
        for(i = 0; i <= aclen-1; i++){
            dict[baze[i].nume] = baze[i].prescurtare
        }
    }else{
        $("baze").style.color = "";
        for(i = 0; i <= aclen-1; i++){
            delete dict[baze[i].nume]
        }
    }
}


oxiziB = false

function oxiziF(){
    oxiziB = !oxiziB
    aclen = oxizi.length-1
    if(oxiziB){
        $("oxizi").style.color = "yellow";
        for(i = 0; i <= aclen-1; i++){
            dict[oxizi[i].nume] = oxizi[i].prescurtare
        }
    }else{
        $("oxizi").style.color = "";
        for(i = 0; i <= aclen-1; i++){
            delete dict[oxizi[i].nume]
        }
    }
}


nemetaleB = false

function nemetaleF(){
    nemetaleB = !nemetaleB
    aclen = nemetale.length-1
    if(nemetaleB){
        $("nemetale").style.color = "yellow";
        for(i = 0; i <= aclen-1; i++){
            dict[nemetale[i].nume] = nemetale[i].prescurtare
        }
    }else{
        $("nemetale").style.color = "";
        for(i = 0; i <= aclen-1; i++){
            delete dict[nemetale[i].nume]
        }
    }
}

aciziB = true
aclen = acizi.length-1
for(i = 0; i <= aclen; i++){
    dict[acizi[i].nume] = acizi[i].prescurtare
}
$("acizi").style.color = "yellow"
function aciziF(){
    aciziB = !aciziB
    if(aciziB){
        $("acizi").style.color = "yellow"
        for(i = 0; i <= aclen; i++){
            dict[acizi[i].nume] = acizi[i].prescurtare
        }
    }else{
        $("acizi").style.color = ""
        for(i = 0; i <= aclen; i++){
            delete dict[acizi[i].nume]
        }
    }
} 
function start(){
    $("element_input").value = "";
    element = elementrandom();
    if(element){
        $("nume_element").innerText = element;
    }else{
        $("nume_element").innerText = "Trebuie sa alegi macar o categorie"
    }
}
function corect(){
    $("ecran_principal").style.display = "none";
    $("corect").style.display = "block";
    document.body.style.backgroundColor = "lightgreen";
    setTimeout(() => {
        $("ecran_principal").style.display = "block";
        $("corect").style.display = "none";
        document.body.style.backgroundColor = "#272727";
    }, 750);
    start();
}
function gresit(){
    $("ecran_principal").style.display = "none";
    $("gresit").style.display = "block";
    $("gresit_rasp_corect").innerText = "Raspunsul corect era: " + dict[element];
    document.body.style.backgroundColor = "darkred";
    setTimeout(() => {
        $("ecran_principal").style.display = "block";
        $("gresit").style.display = "none";
        document.body.style.backgroundColor = "#272727";
    }, 1250);
    start();
}

function ok(){
    if(dict[element]){
        if($("element_input").value.toLowerCase() == dict[element].toLowerCase()){
            corect();
        }else{
            gresit();
        }
    }else{
        start();
    }
}
$('element_input').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
        ok();
    }
}
function modifica(){
    if($("tabel_periodic").style.display == "block"){
        $("tabel_periodic").style.display = "none";
    }else{
        $("tabel_periodic").style.display = "block";
    }
}
start();