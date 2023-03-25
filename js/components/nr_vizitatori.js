if(dev){
    leURL = "http://localhost:3000/php/nr_viz"
}else{
    leURL = "https://suntunaiurit.org/php/nr_viz/"
}
if(document.cookie != 'visit:true'){
    document.cookie = "visit:true; expires=Fri, 31 Dec 9999 23:59:59 GMT"
    fetch(leURL);
}
$("nr_viz").innerText = $("nr_viz").innerText + " " + loadFile("/php/nr_viz/a.txt");