let button = document.querySelector('#button');
let myColor = document.querySelector('#color-name');

function getNextRandomColor() {
  let color = '#';
  const hexChar = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += hexChar[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener('click', function (){
  const color = getNextRandomColor()
  document.body.style.backgroundColor = color;
  myColor.innerHTML=color;
}, false);


 

 
 
/*
  button = Math.random();
  button = Math.floor(Math.random() * 6) + 1;
  console.log(button);   */