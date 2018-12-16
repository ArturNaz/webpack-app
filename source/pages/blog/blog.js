import './blog.scss';
import 'normalize.css';
import  createMenu from '../../components/menu/menu';

let menu = createMenu(['Main menu','About me','Portfolio'],'menu');

document.body.appendChild(menu);

console.log('in blog.js');
