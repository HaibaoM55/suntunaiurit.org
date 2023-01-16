let tabel_path = "./html/tabel_periodic.html"
function tabel_comp(){
    fetch(tabel_path)
    .then(x => x.text())
    .then(y => $("tabel_periodic").innerHTML = y)
}