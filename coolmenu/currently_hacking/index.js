proc = 0
setInterval(() => {
    if(proc < 100){
        proc++;
        $("process").style.width = proc+"%";
        $("process-").style.width= parseInt(100-proc)+"%";
        $("seconds").innerText = parseInt((100-proc)/2)+ " seconds left";
    }
},500);
setTimeout(() => {
    $("unfinished").style.display = "none";
    $("finished").style.display = "block";
}, 51000)