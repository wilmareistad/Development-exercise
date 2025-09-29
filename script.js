const helloWorld = document.getElementById("helloWorld");

let rotation = 0;

function rotateText() {
  rotation += 5;
  helloWorld.style.transform = `rotate(${rotation}deg)`;
}

setInterval(rotateText, 10);
