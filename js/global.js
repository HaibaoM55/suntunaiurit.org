dev = false;
function $(id){
    return document.getElementById(id)
}
function $$(query){
    return document.querySelector(query)
}
function contine(a, b){
    if(replace(a, b) == a){
        return false
    }
    else{
        return true
    }
}
function isint(a){
    b = parseInt(a)
    if(b == a){
        return true
    }
    else{
        return false
    }
}
function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
}