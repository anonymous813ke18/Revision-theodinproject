const select = document.querySelector("select");
const list = document.querySelector("ul");
const heading = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalender(choice);
});

function createCalender(month) {
  let days = 31;
  console.log("1");

  if (month === "April" || month === "June" || month === "September" || month === "November") {
    days = 30;
  } else if (month === "February") {
    days = 28;
  } else {
    days = 31;
  }

  list.textContent = "";
  heading.textContent = month;

  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}