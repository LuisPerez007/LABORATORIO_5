const modify = document.querySelector('#root');
modify.innerHTML = `
<div>
    <a href="https://www.google.com"> GOOGLE </a> <br>
    <a href="https://keybr.com"> otro enlace </a>
    <h1>MANIPULANDO EL DOM...</h1>
</div>
`

const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
  ];

const lista = document.createElement('ul');

buyList.forEach(esto=>{
    const myList = document.createElement('li');
    myList.textContent = esto;
    lista.appendChild(myList);  
});

document.querySelector('#root').appendChild(lista);