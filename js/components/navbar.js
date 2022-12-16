let navbarpath = "/navbar"

function navbar(){
    fetch (navbarpath)
    .then(x => x.text())
    .then(y => $("navbar").innerHTML = y);
}