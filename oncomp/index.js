$("html").value = `<html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <p>Hello World!</p>
    </body>
</html>`
$("compiler").style.height = (screen.availHeight-400)+"px"
function compile(){
    //TODO: REZOLVARE COMPILER
    for (i = 1; i<=$("compiler").contentWindow.document.all.length-1; i++){
        $("compiler").contentWindow.document.all[i].remove()
    }
    $("compiler").contentWindow.document.write($("html").value)
}