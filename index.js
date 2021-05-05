// Add the 16 x 16 grid of divs to the container div upon page loading
function createDivs() {
    // Need to add 16x16 of the following items to the container div
    // <div class="grid-item"></div>

    let div_grid_container = document.getElementsByClassName("grid-container")[0];

    let individual_grid_item; 

    for(let i = 0; i < 16*16; i++) {
        individual_grid_item = document.createElement("div");
        individual_grid_item.className = "grid-item";
        
        div_grid_container.appendChild(individual_grid_item);
        
    }

}
