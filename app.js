
// html variables
let etchContainer = document.getElementById("etch");


function setDimension () {
    let input = Number(prompt("16 or 32 or 64"));
    if (input === 16) {
        for (let i = 0; i < (16 * 16); i++) {
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-div", "div-16");
            console.log(gridDiv);
            etchContainer.appendChild(gridDiv);
        }
    } else if (input === 32) {
        for (let i = 0; i < (32 * 32); i++) {
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-div", "div-32");
            console.log(gridDiv);
            etchContainer.appendChild(gridDiv);
        }
    } else if (input === 64) {
        for (let i = 0; i < (64 * 64); i++) {
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-div", "div-64");
            console.log(gridDiv);
            etchContainer.appendChild(gridDiv);
        }
    } else {
        alert("Enter a valid input");
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
// const allDivGrid = document.querySelectorAll(".grid-div");
// allDivGrid.forEach(div => {
//     div.addEventListener("mouseover", function () {
//         div.style.backgroundColor = "black";
//     });
// });