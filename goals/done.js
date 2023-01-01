var final_txt = "";
var o = 0;
function done(){
    for(i = 1; i <= input_no; i++){
        if($(`user_input${i}`).innerHTML != ``){
            if($(`user_goal_input${i}`).value != ``){
                o++;
                if(i != 1){
                    final_txt = final_txt + "\n" + o+". "+$(`user_goal_input${i}`).value + "[❌]";
                }else{
                    final_txt = "1. "+$("user_goal_input1").value + "[❌]";
                }
            }
        }
    }
    final_txt = final_txt + "\n~Powered by suntunaiurit.org/goals";
    $("final_txt").innerText = final_txt;
    $("final").style.display = "block";
    final_txt = ""
    o = 0;
}