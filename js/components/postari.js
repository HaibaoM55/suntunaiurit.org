let postaripath = '../../html_components/postari.html'
function postari(){
    fetch(postaripath)
    .then(x => x.text())
    .then(y => $("postari").innerHTML = y)
}
