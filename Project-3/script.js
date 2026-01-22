let heart = document.querySelector("i") ;
let img = document.querySelector(".card") ;


img.addEventListener("dblclick" , function(){

    // heart.style.color = "red"
    heart.style.opacity = "0.8"
    heart.style.transform = "scale(2)"

    setTimeout(function(){
        heart.style.opacity = "0" ;
        heart.style.transform = "scale(1)"
    } , 1800)

})