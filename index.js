const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'random text';

const paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.classList.add('paragraph');
paragraph.textContent = 'Hey I\'m red';

const header = document.createElement('h3');
header.style.color = 'blue';
header.classList.add('header');
header.textContent = 'I\'m blue h3';

const maindiv = document.createElement('div');
maindiv.classList.add('maindiv');
maindiv.style.background = 'pink';
maindiv.style.border = 'black'

const hindiv = document.createElement('h1');
hindiv.textContent = 'I\'m in div';

const pindiv = document.createElement('p');
pindiv.textContent = 'ME TOOOO!';

maindiv.appendChild(hindiv);
maindiv.appendChild(pindiv);
container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(header);
container.appendChild(maindiv);