var elemente = {}; 
let acizi = [];
let metale = [];
let saruri = [];
let nemetale = [];
let baze = [];
let oxizi = [];
var dict = {};
function elementrandom() {
    const keys = Object.keys(dict);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return randomKey;
}
var element;
var aciziJSON = loadFile("json/acizi.json")
aciziJSON = JSON.parse(aciziJSON)
for(i in aciziJSON){
    acizi.push({
        "nume": i,
        "prescurtare": aciziJSON[i],
    })
}
var metaleJSON = loadFile("json/metale.json")
metaleJSON = JSON.parse(metaleJSON)
for(i in metaleJSON){
    metale.push({
        "nume":i,
        "prescurtare": metaleJSON[i],
    })
}

var saruriJSON = loadFile("json/saruri.json")
saruriJSON = JSON.parse(saruriJSON)
for(i in saruriJSON){
    saruri.push({
        "nume":i,
        "prescurtare": saruriJSON[i],
    })
}

var nemetaleJSON = loadFile("json/nemetale.json")
nemetaleJSON = JSON.parse(nemetaleJSON)
for(i in nemetaleJSON){
    nemetale.push({
        "nume":i,
        "prescurtare": nemetaleJSON[i],
    })
}

var bazeJSON = loadFile("json/baze.json")
bazeJSON = JSON.parse(bazeJSON)
for(i in bazeJSON){
    baze.push({
        "nume":i,
        "prescurtare": bazeJSON[i],
    })
}

var oxiziJSON = loadFile("json/oxizi.json")
oxiziJSON = JSON.parse(oxiziJSON)
for(i in oxiziJSON){
    oxizi.push({
        "nume":i,
        "prescurtare": oxiziJSON[i],
    })
}