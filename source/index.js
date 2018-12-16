import  createMenu from './menu';

let menu = createMenu(['Main menu','About me','Portfolio'],'menu');
console.log(menu);
document.body.appendChild(menu);