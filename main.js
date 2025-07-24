const playingField = document.getElementById("playing-field");
console.log(playingField);

// const down = document.getElementById("down");
// console.log(down);

// console.log(down.innerHTML);

document.getElementById("ball").style.backgroundColor = "yellow";

playingField.style.backgroundColor = "blue";

const container = document.getElementById("playing-field");
const step = 15;

const moveRight = function () {
  const ball = document.getElementById("ball");
  let left = parseInt(ball.style.left) || 0;
  
  if (left + step + ball.offsetWidth <= container.clientWidth) {
    ball.style.left = (left + step) + "px";
  }
};
const right = document.getElementById("right");
right.onclick = moveRight;

const moveLeft = function () {
  const ball = document.getElementById("ball");
  let left = parseInt(ball.style.left) || 0;
  if (left - step >= 0) {
    ball.style.left = (left - step) + "px";
  }
};

const left = document.getElementById("left");
left.onclick = moveLeft;

const moveTop = function () {
  const ball = document.getElementById("ball");
  let top = parseInt(ball.style.top) || 0;
  if (top - step >= 0) {
    ball.style.top = (top - step) + "px";
  }
};

const up = document.getElementById("up");
up.onclick = moveTop;

const moveBottom = function () {
  const ball = document.getElementById("ball");
  let top = parseInt(ball.style.top) || 0;
  if (top + step + ball.offsetHeight <= container.clientHeight) {
    ball.style.top = (top + step) + "px";
  }
};

const down = document.getElementById("down");
down.onclick = moveBottom;

// console.log(parseInt("15px"));

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

header.setAttribute("class", "my-header");

const subHeader = document.createElement("h2");
subHeader.innerHTML = "ever ever";
subHeader.setAttribute("class", "sub-header");
document.body.appendChild(subHeader);

const box = document.getElementById("box");
const box2 = document.getElementById("box2");

const enterColor = function () {
  box.style.backgroundColor = "#c0392b";
  box.innerHTML = "AHH GO AWAY";
};

const leaveColor = function () {
  box.style.backgroundColor = "#1abc9c";
  box.innerHTML = "Hover over me!";
};

// addEventListener("click", (event) => {box.style.backgroundColor = "#8e44ad" })

// onclick = (event) => {addEventListener }
const clickColor = function () {
  box2.style.backgroundColor = "#8e44ad";
};
