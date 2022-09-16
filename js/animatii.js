const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('aratat');
        }
        else{
            entry.target.classList.remove('aratat');
        }
    })

}
);

const elemente_ascunse = document.querySelectorAll(".ascuns");
elemente_ascunse.forEach((el) => {observer.observe(el);})