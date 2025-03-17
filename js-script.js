
const gridContainer = document.getElementById("grid-container");
const rangeDisplay = document.getElementById("range-display");
const rangeElement = document.getElementById("range-element");
const body = document.getElementById("body")
const btn = document.getElementById("btn");
rangeDisplay.textContent = "16x16"

body.onload = addGrid;
btn.addEventListener("click", addGrid)
rangeElement.addEventListener("input", rangeUpdate)

function rangeUpdate(e) {
    rangeDisplay.textContent = (e.target.value + "x" + e.target.value)
}

function debug() {
    console.log("debug")
}

function addGrid() {
    num = rangeElement.value
    removeGrid()

    for (let i = 0; i < num * num; i++) {
        const gridElement = document.createElement("div");
        gridElement.className = "grid-element";
        gridElement.style.height = ((100 / num) + "%")
        gridElement.style.width = ((100 / num) + "%")
        gridContainer.appendChild(gridElement)
    }

}

function removeGrid() {

    gridContainer.innerHTML = ""
}



gridContainer.addEventListener("mouseover", etch)


function etch(e) {
    if (e.target !== gridContainer) {
        let currentElement = e.target;
        currentElement.style.border = "1px solid green"
    }
}









