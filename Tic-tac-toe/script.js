const cells = document.querySelectorAll(".cell") ;
const modal = document.querySelector(".modal") ;
const player_x_elment = document.querySelector("#x-score") ;
const player_o_elment = document.querySelector("#o-score") ;
const tie_element = document.querySelector("#tie") ;
const statusText = document.querySelector("#statusText") ;

const X = `<i class="ri-close-large-line"></i>` ;
const O = `<i class="ri-circle-line"></i>` ;

let x_score = 0 ;
let o_score = 0 ;
let tie = 0 ;

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
] ;
let options = ["", "", "", "", "", "", "", "", ""] ;
let currPlayer = X ;
let running = false ;

initialize() ;


function initialize(){
    cells.forEach(element => element.addEventListener("click" , clicked));

}


function clicked(){

    const cellIndex = this.id-1;
    if(options[cellIndex] != "" ){
        return ;
    }

    updateCell(this , cellIndex) ;
    // console.log(options[0])

}

function updateCell(cell, index){
    options[index] = currPlayer ;
    cell.innerHTML = currPlayer ;
    checkWinner() ;

}

function changePlayer(){

    if(currPlayer == X){
        currPlayer = O ;
        // statusText.textContent = "O's turn"
    }
    else{
        currPlayer = X ;
        // statusText.textContent = "X's turn"
    }
}

function checkWinner(){
    
    let roundWon = false ;
    
    for(let i = 0 ; i<winCondition.length ; i++){
        
        const condition = winCondition[i] ;

        const cellA = options[condition[0]] ;
        const cellB = options[condition[1]] ;
        const cellC = options[condition[2]] ;

        if(cellA == "" || cellB == "" || cellC == ""){
            continue ;
        }
        else if(cellA == cellB && cellB == cellC){
            modal.innerHTML = `${currPlayer}  wins the game` ;
            updateScore() ;
            restartGame() ;
           return ;
           
        }
        
    }
    if(!roundWon && !options.includes("")){
        modal.innerHTML = `DRAW` ;
        tie++ ;
        tie_element.textContent = tie ;
        restartGame() ;
        return ;
    }
    changePlayer() ;
}


function restartGame(){


    options = ["", "", "", "", "", "", "", "", ""] ;
    currPlayer = X ;
    cells.forEach(cell => cell.innerHTML = "") ;
    modal.style.transform = "scale(1)" ;
    setTimeout(function(){
        modal.style.transform = "scale(0)" ;
    },2000)
}


function updateScore(){
    if(currPlayer === X){
        x_score++ ;
        player_x_elment.textContent = x_score ; 
    }
    else {
        o_score++ ;
        player_o_elment.textContent = o_score ;
    }
}





















// const board = document.querySelector(".play") ;
// const player_x_elment = document.querySelector("#x-score") ;
// const player_o_elment = document.querySelector("#o-score") ;
// let xWins = 0 ;
// let oWins = 0 ;

// let b ;
// let flag = 0 ;
// let arr = [] ;
// // arr["cell-1"] = 1 ;

// let count = 0 ; 




// // a.innerHTML = `<i class="ri-close-large-line"></i>` ;
// board.addEventListener("click" , function (dets){
//     b = dets.target.id ;
//     console.log(b)
//     let a = document.getElementById(b) ;
//     if(flag == 0){
//         a.innerHTML = `<i class="ri-close-large-line"></i>` ;
//         arr[b] = 'x' ;
//         flag = 1 ;
//         count++ ;
//     }
//     else{
//         a.innerHTML = `<i class="ri-circle-line"></i>` ;
//         arr[b] = 'o' ;
//         flag = 0 ;
//         count++ ;
//     }
    

//     // WINNING LOGIC 
//     if( arr[1]==arr[4] && arr[4]==arr[7] && arr[7]== "x" ||
//         arr[2]==arr[5] && arr[5]==arr[8] && arr[8]== "x" ||
//         arr[3]==arr[6] && arr[6]==arr[9] && arr[9]== "x" ||
//         arr[1]==arr[2] && arr[2]==arr[3] && arr[3]== "x" ||
//         arr[4]==arr[5] && arr[5]==arr[6] && arr[6]== "x" ||
//         arr[7]==arr[8] && arr[8]==arr[9] && arr[9]== "x" ||
//         arr[1]==arr[5] && arr[5]==arr[9] && arr[9]== "x" ||
//         arr[3]==arr[5] && arr[5]==arr[7] && arr[7]== "x" 

//     ){
//         xWins++ ;
//         player_x_elment.innerText = xWins ;


//     }else if( arr[1]==arr[4] && arr[4]==arr[7] && arr[7]== "o" ||
//         arr[2]==arr[5] && arr[5]==arr[8] && arr[8]== "o" ||
//         arr[3]==arr[6] && arr[6]==arr[9] && arr[9]== "o" ||
//         arr[1]==arr[2] && arr[2]==arr[3] && arr[3]== "o" ||
//         arr[4]==arr[5] && arr[5]==arr[6] && arr[6]== "o" ||
//         arr[7]==arr[8] && arr[8]==arr[9] && arr[9]== "o" ||
//         arr[1]==arr[5] && arr[5]==arr[9] && arr[9]== "o" ||
//         arr[3]==arr[5] && arr[5]==arr[7] && arr[7]== "o" 

//     ){
//         oWins++ ;
//         player_o_elment.innerText = oWins ;
//     }


//     //  DRAW LOGIC 
//     if(count == 9){
//     console.log("game-over")
// }

// })

// // WINNING LOGIC 






