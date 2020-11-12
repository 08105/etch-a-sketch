const container = document.querySelector(".gridContainer");
const reset = document.querySelector(".resetButton");

function createGrid(divSquares){
  container.innerHTML = "";
  for(i=0;i<divSquares;i++){
    let gridCol = document.createElement("div");
    gridCol.className="gridCol";
    
    for(j=0;j<divSquares;j++){
      let row=document.createElement("div");
      row.className="row";
      gridCol.appendChild(row);
      row.addEventListener("mouseenter", () => {
        row.style.background = "black";
      });
      reset.addEventListener("click", () =>{
        row.style.background = "gray";
      });
      container.appendChild(gridCol);
    }
  }
}

createGrid(16);