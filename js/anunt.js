let api = "../anunt/api"

fetch (api)
.then(x => x.text())
.then(y => $("anunt").innerHTML = y);