
const gridContainer = document.getElementById("grid-container");


    
    



function addGrid(num){
    
    for (let i = 0; i < num * num; i++) {
        const gridElement = document.createElement("div");
        gridElement.className ="grid-element";
        gridElement.style.height = ((100 / num)+"%")    
        gridElement.style.width =  ((100 / num)+"%")  
        gridContainer.appendChild(gridElement)
    }

    
}
addGrid(10)

gridContainer.addEventListener("mouseover", etch)
    

function etch(e) {
    if(e.target !== gridContainer) {
        let currentElement = e.target;
        currentElement.style.border = "1px solid green"
    }
}


    






