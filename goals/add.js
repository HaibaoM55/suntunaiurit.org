var input_no = 1;
$("add_btn").onclick = () => {
    user_input_elm = document.createElement('div')
    input_no++;
    user_input_elm.id = `user_input${input_no}`
    user_input_elm.classList.add("user_input_node");
    user_input_elm.innerHTML = 
`<input class = "goal_input" id ="user_goal_input${input_no}" placeholder='Sample Text'>
<button class="remove_btn" onclick = "remove_obj('user_input${input_no}')">
    <svg class = "remove_btn_svg" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><g stroke-width="2" fill="#ff0000" stroke="#ff0000" class="nc-icon-wrapper"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9" fill="none" stroke="#ff0000" stroke-linecap="square" stroke-miterlimit="10"></path><line data-color="color-2" x1="1" y1="5" x2="23" y2="5" fill="none" stroke-linecap="square" stroke-miterlimit="10"></line><path data-cap="butt" data-color="color-2" d="M8,5V1h8V5" fill="none" stroke-miterlimit="10"></path></g></svg>
</button>`
    $("user_input").appendChild(user_input_elm);
}