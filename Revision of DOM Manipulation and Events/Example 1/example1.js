const container = document.querySelector("#container");
console.log(container.firstElementChild);

const controls = document.querySelector('.controls');
console.log(controls.previousElementSibling);

const newDiv = document.createElement("div");
newDiv.setAttribute('id', 'newDiv');
container.appendChild(newDiv);
console.log(controls.nextElementSibling);

const blueDiv = document.createElement("div")
blueDiv.style['height'] = '400px';
blueDiv.style['background-color'] = 'skyblue';
container.insertBefore(blueDiv, newDiv);
blueDiv.setAttribute('class', 'blueDiv');
blueDiv.classList.add('test');
console.log(blueDiv);
blueDiv.classList.remove('test');
console.log(blueDiv);
blueDiv.classList.toggle('test');
console.log(blueDiv);
blueDiv.classList.toggle('test');
console.log(blueDiv);
