const gridSize = document.querySelector("#grid-size");
const createBtn = document.querySelector(".create-btn");
const resetBtn = document.querySelector(".reset-btn");
const easGrid = document.querySelector(".eas-grid");

createBtn.addEventListener('click', () => {
    if (gridSize.value < 1 || gridSize.value > 100) {
        gridSize.value = '';
        alert("Please enter a valid input (between 1 - 100)");
        gridSize.focus();
        return;
    }
    easGrid.replaceChildren();
    for (let i = 0; i < gridSize.value; i++) {
        const easRow = document.createElement("div");
        easRow.classList.add("eas-grid-row");
        for (let j = 0; j < gridSize.value; j++) {
            const easBox = document.createElement("div");
            easBox.classList.add("eas-box");
            easBox.addEventListener('mouseover', (e) => {
                const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
                e.target.style["background-color"] = randomColor;
            })
            easRow.appendChild(easBox);
        }
        easGrid.appendChild(easRow);
    }
})

resetBtn.addEventListener('click', () => {
    Array.from(easGrid.children).forEach(child => {
        Array.from(child.children).forEach(grandChild => grandChild.style['background-color'] = 'white')
    });
})