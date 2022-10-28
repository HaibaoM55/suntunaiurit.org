anunt = "../../anunt/api"

fetch (anunt)
.then(x => x.text())
.then(y => $("anunt").innerHTML = y);