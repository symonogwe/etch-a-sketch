
// html variables
let etchContainer = document.getElementById("etch");


// for loop to create grid div of 16 by 16
for (let i = 0; i < (16 * 16); i++) {
    let gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-div");
    etchContainer.appendChild(gridDiv);
}

// add Event Listener to all div grids
const allDivGrid = document.querySelectorAll(".grid-div");
allDivGrid.forEach(div => {
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "black";
    });
});