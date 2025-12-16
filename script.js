let start = document.querySelector(".start-btn");
let imagediv = document.querySelector(".images");
let images = document.querySelectorAll(".images img");
let timepara = document.querySelector(".time");
let scorepara = document.querySelector(".score");
let gayab = document.querySelector(".gayab");
const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

let count = 60;
let score = 0;
let interval;
let selectavtar = "";

start.addEventListener("click", () => {
  imagediv.style.display = "flex";
  start.style.display = "none";
});

images.forEach((e) => {
  e.addEventListener("click", (e) => {
    selectavtar = e.target.src;
    imagediv.style.display = "none";
    showimage();
    console.log(selectavtar);

    interval = setInterval(() => {
      if (count >= 1) {
        timepara.innerText = `Time: ${count}`;
        scorepara.innerText = ` score: ${score}`;
        showimage();
      }
      count--;
    }, 1000);
  });
});

function showimage() {
  const img = document.createElement("img");
  img.classList.add("chotiimage");
  [img.style.left, img.style.top] = randomgetcoordinate();
  img.src = selectavtar;

  img.addEventListener("click", () => {
    score++;
    img.remove();
  });
  gayab.append(img);
}

function randomgetcoordinate() {
  const x = Math.random() * (innerWidth - 100);
  const y = Math.random() * (innerHeight - 100);
  if (x <= 0 || y <= 0 || x >= innerWidth - 100 || y >= innerHeight - 100) {
    return randomgetcoordinate();
  }
  return [x + "px", y + "px"];
}
