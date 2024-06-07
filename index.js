const container = document.getElementById("container");
const GRID_SIZE = 16;

for (let i = 0; i < GRID_SIZE; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let j = 0; j < GRID_SIZE; j++) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");

        row.append(cell);
    }

    container.append(row);
}

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.classList.add("active");
    });
});

const resetBtn = document.getElementById("reset");

resetBtn.onclick = () => {
    cells.forEach((cell) => {
        cell.classList.remove("active");
    });
};
