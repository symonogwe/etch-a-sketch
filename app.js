
// html variables
let etchContainer = document.getElementById("etch");


function setDimension () {
    let input = Number(prompt("16 or 32 or 64"));
    if (input === 16 || input === 32 || input === 64) {
        for (let i = 0; i < (input * input); i++) {
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-div");
            gridDiv.style.width = "calc(322 / input)";
            gridDiv.style.height = "calc(322 / input)";
            gridDiv.style.backgroundColor = "white";
            gridDiv.style.border = "1px solid black";
            etchContainer.appendChild(gridDiv);
        }
    } else {
        alert("enter valid")
    }
}

//add Event Listener to button
let button = document.getElementById("dimension-prompt");
button.addEventListener("click", setDimension);



// // for loop to create grid div of 16 by 16
// for (let i = 0; i < (64 * 64); i++) {
//     let gridDiv = document.createElement("div");
//     gridDiv.classList.add("grid-div");
//     etchContainer.appendChild(gridDiv);
// }

// add Event Listener to all div grids
const allDivGrid = document.querySelectorAll(".grid-div");
allDivGrid.forEach(div => {
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "black";
    });
});