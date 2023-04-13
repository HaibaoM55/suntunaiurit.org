var elemente = {};
var dict = {};
function elementrandom() {
    const keys = Object.keys(dict);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return randomKey;
}
var element;
class elm{
    constructor(nume, prescurtare, adauga = false){
        this.nume = nume
        this.prescurtare = prescurtare;
        this.adauga = adauga;
        elemente[this.nume] = this.prescurtare;
        if(adauga){
            this.add();
        }
    }
    add(){
        dict[this.nume] = this.prescurtare;
        this.adauga = true;
    }
    rmv(){
        delete dict[this.nume];
        this.adauga = false;
    }
}

hidrogen = new elm('Hidrogen', 'H', true)
heliu = new elm('Heliu', 'He', true)
litiu = new elm('Litiu', 'Li', true)
beriliu = new elm('Beriliu', 'Be', true)
bor = new elm('Bor', 'B', true)
carbon = new elm('Carbon', 'C', true)
azot = new elm('Azot', 'N', true)
oxigen = new elm('Oxigen', 'O', true)
fluor = new elm('Fluor', 'F', true)
neon = new elm('Neon', 'Ne', true)
sodiu = new elm('Sodiu', 'Na', true)
magneziu = new elm('Magneziu', 'Mg', true)
aluminiu = new elm('Aluminiu', 'Al', true)
siliciu = new elm('Siliciu', 'Si', true)
fosfor = new elm('Fosfor', 'P', true)
sulf = new elm('Sulf', 'S', true)
clor = new elm('Clor', 'Cl', true)
argon = new elm('Argon', 'Ar', true)
potasiu = new elm('Potasiu', 'K', true)
calciu = new elm('Calciu', 'Ca', true)
galiu = new elm('Galiu', 'Ga', true)
germaniu = new elm('Germaniu', 'Ge', true)
arsen = new elm('Arsen', 'As', true)
selenium = new elm('Selenium', 'Se', true)
brom = new elm('Brom', 'Br', true)
kripton = new elm('Kripton', 'Kr', true)
rubidiu = new elm('Rubidiu', 'Rb', true)
strontiu = new elm('Stronțiu', 'Sr', true)
indiu = new elm('Indiu', 'In', true)
staniu = new elm('Staniu', 'Sn', true)
stibiu = new elm('Stibiu', 'Sb', true)
telur = new elm('Telur', 'Te', true)
iod = new elm('Iod', 'I', true)
xenon = new elm('Xenon', 'Xe', true)
cesiu = new elm('Cesiu', 'Cs', true)
bariu = new elm('Bariu', 'Ba', true)
taliu = new elm('Taliu', 'Tl', true)
plumb = new elm('Plumb', 'Pb', true)
bismut = new elm('Bismut', 'Bi', true)
poloniu = new elm('Poloniu', 'Po', true)
astatin = new elm('Astatin', 'At', true)
radon = new elm('Radon', 'Rn', true)
franciu = new elm('Franciu', 'Fr', false);
radiu = new elm('Radiu', 'Ra', false);
actiniu = new elm('Actiniu', 'Ac', false);
rutherfordiu = new elm('Rutherfordiu', 'Rf', false);
dubniu = new elm('Dubniu', 'Db', false);
seaborgiu = new elm('Seaborgiu', 'Sg', false);
bohriu = new elm('Bohriu', 'Bh', false);
hassiu = new elm('Hassiu', 'Hs', false);
meitneriu = new elm('Meitneriu', 'Mt', false);
darmstadțiu = new elm('Darmstadțiu', 'Ds', false);
roentgeniu = new elm('Roentgeniu', 'Rg', false);
coperniciu = new elm('Coperniciu', 'Cn', false);
nihoniu = new elm('Nihoniu', 'Nh', false);
fleroviu = new elm('Fleroviu', 'Fl', false);
moscoviu = new elm('Moscoviu', 'Mc', false);
livermoniu = new elm('Livermoniu', 'Lv', false);
tennesine = new elm('Tennesine', 'Ts', false);
oganesson = new elm('Oganesson', 'Og', false);
function start(){
    $("element_input").value = "";
    element = elementrandom();
    $("nume_element").innerText = element;
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
    if($("element_input").value.toLowerCase() == dict[element].toLowerCase()){
        corect();
    }else{
        gresit();
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