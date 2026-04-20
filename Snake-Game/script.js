const board = document.querySelector('.board');
const startBtn = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startGame = document.querySelector(".start-game");
const endGame = document.querySelector(".end-game");
const restartBtn = document.querySelector(".btn-restart");
const highScoreElement = document.querySelector("#High-Score");
const scoreElement = document.querySelector("#Score");
const timeElement = document.querySelector("#Time");


const height = 50;
const width = 50;


let highScore = localStorage.getItem("highscore") || 0;
let score = 0;
let time = `00:00`;

highScoreElement.innerText = highScore;

let blocks = [];


let cols = Math.floor(board.clientWidth / width);
let rows = Math.floor(board.clientHeight / height);
let intervalId = null;
let timeIntervalId = null;



// BLOCK CREATING LOGIC
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

        const block = document.createElement('div');
        block.classList.add("block");

        // block.innerText = `${i}-${j}` ;

        board.appendChild(block)
        blocks[`${i}-${j}`] = block;

    }

}

// CREATING SNAKE
let snake = [
    {
        x: 1, y: 5
    },
    {
        x: 1, y: 4
    },
    {
        x: 1, y: 3
    }
];
let head = null;

// FOOD
let food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols)
};

let direction = 'right';


function render() {

    blocks[`${food.x}-${food.y}`].classList.add("food")

    // SNAKE MOVEMENT LOGIC
    if (direction === 'left') {
        head = {
            x: snake[0].x,
            y: snake[0].y - 1
        }
    } else if (direction === 'right') {
        head = {
            x: snake[0].x,
            y: snake[0].y + 1
        }
    } else if (direction === 'down') {
        head = {
            x: snake[0].x + 1,
            y: snake[0].y
        }
    } else if (direction === 'up') {
        head = {
            x: snake[0].x - 1,
            y: snake[0].y
        }
    }


    // SELF COLLISION 
    for (let i = 0; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {


            blocks[`${food.x}-${food.y}`].classList.remove("food");
            snake.forEach(segment => {
                blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
            })

            startGame.style.display = "none";
            endGame.style.display = "flex";
            modal.style.display = "flex";

            clearInterval(intervalId);
            clearInterval(timeIntervalId);
            return ;


           
        }
    }

    // BOARD COLLISION LOGIC
    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {


        startGame.style.display = "none";
        endGame.style.display = "flex";
        modal.style.display = "flex";
        clearInterval(intervalId);
        clearInterval(timeIntervalId);

    }


    // FOOD CONSUMING LOGIC
    if (head.x == food.x && head.y == food.y) {
        blocks[`${food.x}-${food.y}`].classList.remove("food");
        food = {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols)
        };
        blocks[`${food.x}-${food.y}`].classList.add("food");
        snake.unshift(head);

        score += 10;
        scoreElement.innerText = score;

        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highscore", highScore.toString())
            // highScoreElement.innerText = highScore ;
        }

    }


    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
    })

    snake.unshift(head);
    snake.pop();

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.add("fill")
    });



}

// intervalId = setInterval(() => {
//     render();
// }, 300)



addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp") {
        direction = 'up';
    } else if (event.key == "ArrowDown") {
        direction = 'down';
    } else if (event.key == "ArrowLeft") {
        direction = 'left';
    } else if (event.key == "ArrowRight") {
        direction = 'right';
    }

});




startBtn.addEventListener("click", function () {
    modal.style.display = "none";

    timeIntervalId = setInterval(() => {

        let [min, sec] = time.split(":").map(Number);

        if (sec == 59) {
            min += 1;
            sec = 0;
        } else {
            sec += 1;
        }
        time = `${min}:${sec}`;
        timeElement.innerText = time;

    }, 1000);
    intervalId = setInterval(() => {
        render();
    }, 300)
})


// RESTART BUTTON LOGIC
restartBtn.addEventListener("click", function () {
    modal.style.display = "none";
    direction = 'right';
    snake = [
        {
            x: 1, y: 5
        },
        {
            x: 1, y: 4
        },
        {
            x: 1, y: 3
        }
    ];
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    food = {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols)
    };

    highScoreElement.innerText = highScore;
    score = 0;
    time = `00:00`;
    scoreElement.innerText = score;
    timeElement.innerText = time;
    highScoreElement.innerText = highScore;

    intervalId = setInterval(() => {
        render();
    }, 300)
})






