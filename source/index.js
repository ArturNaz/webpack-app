import  createMenu from './menu';

let menu = createMenu()(['Main','About me','Portfolio'],'menu');
document.body.appendChild(menu);