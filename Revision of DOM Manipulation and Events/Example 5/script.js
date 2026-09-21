const newItem = document.querySelector("#newItem");
const addItem = document.querySelector("button");
const shoppingList = document.querySelector("ul");

addItem.addEventListener('click', () => {
    if (newItem.value == '') {
        alert(`Please enter an item to add to the list ${newItem.textContent}`)
    } else {
        const listItem = document.createElement("li");
        const deleteBtn = document.createElement("button");
        listItem.textContent = newItem.value;
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.textContent = "Delete"
        listItem.appendChild(deleteBtn);
        shoppingList.appendChild(listItem);
    }
    newItem.value = '';
    newItem.focus();
});

shoppingList.addEventListener('click', e => {
    if (e.target.classList.contains('deleteBtn')) {
        e.target.closest('li').remove();
    }
    newItem.focus();
})