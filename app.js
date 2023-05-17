
// html variables
let etchContainer = document.getElementById("etch");


// for loop to create grid div 32 times
for (let i = 0; i < 32; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-div");
    etchContainer.appendChild(gridDiv);
}

console.log(etchContainer);