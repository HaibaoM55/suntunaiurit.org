let storytimepath = '/html_components/storytime.html'
function storytime(){
    fetch(storytimepath)
    .then(x => x.text())
    .then(y => document.getElementById("storytime").innerHTML = y)
}