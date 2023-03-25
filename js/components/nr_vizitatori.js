if(dev){
    leURL = "http://localhost:3000/php/nr_viz"
}else{
    leURL = "https://suntunaiurit.org/php/nr_viz/"
}
fetch(leURL);
$("nr_viz").innerText = $("nr_viz").innerText + " " + loadFile("/php/nr_viz/a.txt");