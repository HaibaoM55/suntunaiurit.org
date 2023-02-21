nav = document.querySelector("nav");
if(nav){
    document.body.insertAdjacentHTML("afterbegin", `<div id = "navbar"></div>`);
    navbar();
}