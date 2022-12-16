let commentspath = '/comentariitxt/com.txt'
function comments(){
    fetch(commentspath)
    .then(x => x.text())
    .then(y => $(comments).innerHTML = y)
}
