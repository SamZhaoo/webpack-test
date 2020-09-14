require('./css/app.css');
require('./imgs/dog1.jpg');
import style from './css/app.css';

var img12 = document.createElement("img");
img12.src = './imgs/dog1.jpg';
img12.className = style.img1;
document.body.appendChild(img12);

var div1 = document.createElement("div");
document.body.appendChild(div1);
div1.className = 'div1';
$('.div1').html('asdasdasd')





// let txt1 = _.indexOf([1, 2, 1, 2], 1);
let txt1 = _.indexOf([1, 2, 1, 2], 2, 2);
var div2 = document.createElement("div");
document.body.appendChild(div2);
div2.className = 'div2';
$('.div2').html(txt1)

