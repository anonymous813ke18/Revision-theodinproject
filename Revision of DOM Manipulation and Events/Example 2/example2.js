const container = document.querySelector('.container');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = "This is the glorious text-content";

container.appendChild(content);
container.classList.add('red-text')