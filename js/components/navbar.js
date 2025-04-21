let navbarpath = "/navbar"
let footerpath = "/footer"
function navbar(){
    fetch (navbarpath)
    .then(x => x.text())
    .then(y => $("navbar").innerHTML = y);
    fetch (footerpath)
}