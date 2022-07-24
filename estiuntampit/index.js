function estiuntampit(){
    tampit = Math.floor(Math.random() * 2)+1;
    console.log(tampit);
    nume = $$("#input").value;
    if(tampit == 1){
        $("rezultat").innerHTML = nume + " este tampit!";
    }
    else{
        $("rezultat").innerHTML = nume + " nu este tampit!";
    }
}