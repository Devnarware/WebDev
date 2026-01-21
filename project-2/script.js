let btn = document.querySelector('button') ;
let frnds = document.querySelector('#card h2') ;
let flag = 0 ;



btn.addEventListener("click", function(){
    if(flag == 0){
        btn.innerHTML = "Remove" ;
        btn.style.backgroundColor = "grey"


        frnds.innerHTML = "Friends" ;
        frnds.computedStyleMap


        flag = 1 ;
    }else{
        btn.innerHTML = "Add To Friend" ;
        btn.style.backgroundColor = "aquamarine"


        frnds.innerHTML = "Stranger" ;
        frnds.style.color = "red"

        flag = 0 ;
    }

})