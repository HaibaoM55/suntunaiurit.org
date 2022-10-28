html = "html";
function $(id){
    if(id != "html")return document.getElementById(id);
    else return document;
}
function $$(query){
    return document.querySelector(query);
}
function log(msg){
    console.log(msg);
}
function refresh(){
    location.reload();
}