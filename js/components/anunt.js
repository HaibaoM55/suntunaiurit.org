anunt_path = "../../anunt/api"

function anunt(){
    fetch (anunt_path)
    .then(x => x.text())
    .then(y => $("anunt").innerHTML = y);
}