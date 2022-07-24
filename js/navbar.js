let l = 0;
function bara(){
    if(l == 0){
        $("ul").style.display = "block";
        l = 1;
    }
    else{
        $("ul").style.display = "none";
        l = 0;
    }
}