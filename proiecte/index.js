canUse = true
function display_div(id){
    if($(id).style.display == "none" || $(id).style.display == "" && canUse){
        $(id).style.display = "block";
        $(id).animate(
            [
              
                { margin: "-105px" },
                { margin:"0px" } 
            ],
            {
                duration: 750,
                iterations: 1,
            },
        );
        canUse = false;
        setTimeout(() => {canUse = true}, 750);
    }else if(canUse){
        $(id).animate(
            [
                { margin:"0px" },
                { margin: "-105px" }
            ],
            {
                duration: 750,
                iterations: 1,
            },
        );
        canUse = false;
        setTimeout(() => {$(id).style.display = "none";canUse = true}, 750);
    }
}