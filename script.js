let start = document.querySelector(".start-btn");
let imagediv = document.querySelector(".images");
let images = document.querySelectorAll(".images img");
let timepara = document.querySelector(".time");
let scorepara = document.querySelector(".score");
let gayab = document.querySelector(".gayab");
let wrapper = document.querySelector(".wrapper")

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

let count = 10;
let score = 0;
let interval;
let interval2;
let selectavtar = "";

start.addEventListener("click", () => {
  imagediv.style.display = "flex";
  start.style.display = "none";
});

images.forEach((e) => {
  e.addEventListener("click", (e) => {
    selectavtar = e.target.src;
    imagediv.style.display = "none";
    // showimage();
    console.log(selectavtar);

    starttime();

    setTimeout(() => {
      interval2 = setInterval(() => {
        showimage();
      },3000);
    },100);
  });
});

function starttime() {
  interval = setInterval(() => {
  
    if (count === 1) {
      clearInterval(interval);
      clearInterval(interval2)

      gayab.style.display = "none"

    wrapper.innerText = `your score is ${score}`

    }

    timepara.innerHTML = `Time: ${--count}`;
    scorepara.innerText = ` score: ${score}`;
    showimage();
   
  }, 500);
}

function showimage() {
  const img = document.createElement("img");
  img.classList.add("chotiimage");
  [img.style.left, img.style.top] = randomgetcoordinate();
  img.src = selectavtar;

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

gayab.addEventListener("click" , (e)=>{
  if(e.target.tagName ===  "IMG"){
    score++;
    scorepara.innerText = ` score: ${score}`;
    e.target.remove()
   }
})
