
// Add the grid of divs to the container div upon page loading, or upon button push
function createDivs(number_per_side) {
    // Need to add following items to the container div
    // <div class="grid-item"></div>

    let div_grid_container = document.getElementsByClassName("grid-container")[0];

    let individual_grid_item; 

    for(let i = 0; i < number_per_side*number_per_side; i++) {
        individual_grid_item = document.createElement("div");
        individual_grid_item.className = "grid-item";

        div_grid_container.appendChild(individual_grid_item);
        
    }

    // Set the css side
    div_grid_container.style.gridTemplateColumns = "repeat(" + number_per_side + ", auto)";

    // Make them change color
    mousOverColorChange();

}

// Function for each 'grid-item' dive for when it is hovered over
function mousOverColorChange() {
    let grid_items = document.querySelectorAll('.grid-item');
    grid_items.forEach(function(grid_item) {
        grid_item.addEventListener('mouseover', function() {
            grid_item.style.backgroundColor = getRandomColor();
      });
    });
}


// Function to get a random color - from https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to reset and draw a new grid
function resetAndDrawNew() {

    // Prompt a number between 1 and 100
    let new_size = -1;
    while(new_size < 1 || new_size > 100){
        new_size = parseInt(prompt("How many boxes would you like per side? (1-100, full integers only)"));
    }

    // Delete all grid-items from the DOM
    let container_div = document.querySelector(".grid-container");
    while (container_div.firstChild) {
        container_div.removeChild(container_div.firstChild);
    }
    
    // Create new grid-items
    createDivs(new_size);    

}
