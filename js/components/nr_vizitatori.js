if(document.cookie != 'visit:true'){
    document.cookie = "visit:true; expires=Fri, 31 Dec 9999 23:59:59 GMT"
    fetch("http://localhost:3000/php/nr_viz")
}
$("nr_viz").innerText = $("nr_viz").innerText + " " + loadFile("/php/nr_viz/a.txt");