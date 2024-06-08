const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");
const createBtn = document.getElementById("create");
const containerSize = 32;

function createGrid(size) {
    container.innerHTML = "";
    const cellSize = containerSize / size;

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = `${cellSize}rem`;
            cell.style.height = `${cellSize}rem`;

            cell.addEventListener("mouseenter", () => {
                cell.classList.add("active");
            });

            row.append(cell);
        }

        container.append(row);
    }
}

function resetGrid() {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.classList.remove("active");
    });
}

function promptForGridSize() {
    const gridSize = parseInt(window.prompt("Set size (2-100):"), 10);
    if (gridSize >= 2 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert("Please enter a number between 2 and 100.");
    }
}

resetBtn.addEventListener("click", resetGrid);
createBtn.addEventListener("click", promptForGridSize);

createGrid(16);
