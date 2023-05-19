
// html variables
let etchContainer = document.getElementById("etch");

//Btn  setDimension function
function setDimension () {
    let input = Number(prompt("Enter either 16, 32 or 64 for grid dimensions"));
    if (input === 16) {
        for (let i = 0; i < (16 * 16); i++) {
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-div", "div-16");
            gridDiv.addEventListener("mouseover", function () {
                gridDiv.style.backgroundColor = "black";
            })
            etchContainer.appendChild(gridDiv);
        }
    } else if (input === 32) {
        for (let i = 0; i < (32 * 32); i++) {
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-div", "div-32");
            gridDiv.addEventListener("mouseover", function () {
                gridDiv.style.backgroundColor = "black";
            })
            etchContainer.appendChild(gridDiv);
        }
    } else if (input === 64) {
        for (let i = 0; i < (64 * 64); i++) {
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-div", "div-64");
            gridDiv.addEventListener("mouseover", function () {
                gridDiv.style.background = "black";
            })
            etchContainer.appendChild(gridDiv);
        }
    } else {
        alert("Enter a valid input");
    }
}



//add Event Listener to button
let button = document.getElementById("dimension-prompt");
button.addEventListener("click", setDimension);





