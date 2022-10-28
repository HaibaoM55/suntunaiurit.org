var score = 0;
var dead = false;
function jump(){
    if($("player").classList != "jump"){
        if(!dead){
            $("player").classList.add("jump");
            score++;
            $("score").innerText = score;
        }
    }
    setTimeout(() => {$("player").classList.remove("jump")}, 250)
}
var checkDead = setInterval(() => {
}, 10);
// var checkBorder = setInterval(() => {
//     playerX = $$("#player").style.left;
//     playerX.replace("px", "");
//     playerX = parseInt(playerX);
//     if(playerX > 760){
//         $$("#player").style.left = "760px";
//     }else if(playerX < 0){
//         $$("#player").style.left = "0px";
//     }
// }, 10);