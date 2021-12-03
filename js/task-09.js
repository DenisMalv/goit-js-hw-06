function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function rgb2hex(rgb) {
 var hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

const body = document.body
const span = document.querySelector('.color')
const button = document.querySelector('.change-color')


button.addEventListener('click', () => {
 span.textContent = getRandomHexColor()
  
  body.style.background = `${span.textContent}`
console.log(rgb2hex(body.style.background))
})



// console.log(body.style.background.toString(16))
// console.log(body)
// console.log(span)
// console.log(button)
// console.log(getRandomHexColor())
// console.dir(body)

// function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
// function toHex(n) {
//  n = parseInt(n,10);
//  if (isNaN(n)) return "00";
//  n = Math.max(0,Math.min(n,255));
//  return "0123456789ABCDEF".charAt((n-n%16)/16)
//       + "0123456789ABCDEF".charAt(n%16);
// }



// function rgb2hex(rgb) {
//  var hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
//  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
//  function hex(x) {
//   return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
//  }
//  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
// }

// const changeSpan =()=>  span.textContent = getRandomHexColor()