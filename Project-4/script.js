let stories = document.querySelector(".stories") ;
let fs = document.querySelector("#full-Screen") ;
let arr = [
    {
        dp:"https://images.unsplash.com/photo-1670217230011-f29276d162e6?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=901&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1591561582301-7ce6588cc286?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=1014&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1596566642185-bc4a80d571f5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1557977275-d261356f567f?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1610903507277-799fb99955c1?q=80&w=1350&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
] ;


let clutter = ""
arr.forEach(function(elem, idx){
    clutter +=  `<div class="story">

                <img id="${idx}" src="${elem.dp}" alt="">

            </div>`;
})

stories.innerHTML = clutter ;



stories.addEventListener("click" , function(dets){
    // fs.style.display = "block"
    fs.style.backgroundImage = `url(${arr[dets.target.id].story})` ;
    
    fs.style.transform = "scale(1)" ;
    fs.style.opacity = "1"
    fs.style.pointerEvents = "auto";    
    
    setTimeout(function(){
        
        fs.style.transform = "scale(0.5)" ;
        fs.style.opacity = "0" ;
        fs.style.pointerEvents = "none";    
        fs.style.borderRadius = "100px"
    },3000) ;
    
    setTimeout(function(){
        fs.style.backgroundImage = null;
        
    },3500) ;
    setTimeout(function(){
        
        fs.style.borderRadius = "0px"
    },4000) ;
    
    
})


