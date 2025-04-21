function cauta(){
    problema = $("cautare").value
	if(isint(problema)){
		$("rezolvare").innerText = "Scrie numele problemei, nu id-ul";
	}else{
		problema = problema.replace(' ','');
		problema = problema.toLowerCase();
		fetch(`https://raw.githubusercontent.com/HaibaoM55/pbinfo/refs/heads/master/${problema}/main.cpp`)
			.then(response => response.text())
			.then(data => {
				console.log(data); 
				$("rezolvare").innerText = data;
				if(data == "404: Not Found"){
					$("rezolvare").innerText = "Nu am problema :(";
				}
			})
			.catch(error => $("rezolvare").innerText = "Eroare "+error);
	}
}