

const list = document.getElementById("myList")
const addItem = function () {
    const newItem = document.createElement("li")
    newItem.innerHTML = "A new item!"
    list.appendChild(newItem)
}

const box = document.getElementById("box")
box.onclick = function () {
    box.innerHTML = "clicked"
}


// const box = document.createElement("div"); // creates a new div
// box.setAttribute("class", "box");
// box.textContent = "Click or hover me!";

// box.onclick = function () {
//   box.innerHTML = "I'm alive!";
// };

// box.onmouseenter = function () {
//   box.style.backgroundColor = "lightblue";
// };

// document.getElementById("some-id").appendChild(box); // make sure this element exists in the HTML

// box.addEventListener("click", () => {
//   box.innerHTML = "Clicked with addEventListener!";
// });