const container = document.getElementById("container");


for (let count = 1; count <= 4; count++) {
  const box = document.createElement("div");
  box.className = `box box${count}`;
  box.style.backgroundColor = "#2b84c0ff";
  

    // Add hover event listener
  box.addEventListener("mouseenter", function () {
    this.style.backgroundColor = getRandomColor();
    checkAllSameColor(); // Check after each change
  });

  container.appendChild(box);
}



function getRandomColor() {
  const niceColors = [
    "#8e44ad", "#3498db", "#c0392b", "#f1c40f",
    "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"
  ];
  const randomIndex = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomIndex];
}

// Function to check if all boxes have the same background color
function checkAllSameColor() {
  const boxes = document.querySelectorAll(".box");
  const firstColor = boxes[0].style.backgroundColor;

  const allSame = [...boxes].every(box => box.style.backgroundColor === firstColor);

  if (allSame) {
    message.textContent = "Nice job!";
  } else {
    message.textContent = "";
  }
}