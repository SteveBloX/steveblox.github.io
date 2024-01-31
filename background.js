// From https://codepen.io/tahazsh/pen/gOqNZyw

const MIN_SPEED = 1.5;
const MAX_SPEED = 3.2;

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const container = document.querySelector(".bouncing-blobs");
// create blue blobs
const colors = ["1C66BF", "144D91", "17447A", "4D80BD", "4674AB"];
const am = Math.floor(randomNumber(4, 6));
for (let i = 0; i < am; i++) {
  const el = document.createElement("div");
  el.classList.add("bouncing-blob");
  el.style.background =
    "#" + colors[Math.floor(randomNumber(0, colors.length - 1))];
  console.log(`I am a ${el.style.background} blob ! I'm blob no ${i}`);
  container.appendChild(el);
}
// create gray blobs
const am2 = Math.floor(randomNumber(2, 3));
for (let i = 0; i < am2; i++) {
  const el2 = document.createElement("div");
  el2.classList.add("bouncing-blob", "bouncing-blob--gray");
  container.appendChild(el2);
}
console.log(`Created ${am} blue blobs and ${am2} gray blobs`);

let paused = false;
function pauseResumeBg(p) {
  console.log("Background", p ? "paused" : "resumed");
  paused = p;
  if (!paused) {
    document.querySelector(".bouncing-blobs").style.display = "";
    document.querySelector(".bouncing-blobs-glass").style.display = "";
    requestAnimationFrame(update);
  } else {
    document.querySelector(".bouncing-blobs").style.display = "none";
    document.querySelector(".bouncing-blobs-glass").style.display = "none";
  }
}

class Blob {
  constructor(el) {
    this.el = el;
    const boundingRect = this.el.getBoundingClientRect();
    this.size = boundingRect.width;
    this.initialX = randomNumber(0, window.innerWidth - this.size);
    this.initialY = randomNumber(0, window.innerHeight - this.size);
    this.el.style.top = `${this.initialY}px`;
    this.el.style.left = `${this.initialX}px`;
    this.vx =
      randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.vy =
      randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.x = this.initialX;
    this.y = this.initialY;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x >= window.innerWidth - this.size) {
      this.x = window.innerWidth - this.size;
      this.vx *= -1;
    }
    if (this.y >= window.innerHeight - this.size) {
      this.y = window.innerHeight - this.size;
      this.vy *= -1;
    }
    if (this.x <= 0) {
      this.x = 0;
      this.vx *= -1;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.vy *= -1;
    }
  }

  move() {
    this.el.style.transform = `translate(${this.x - this.initialX}px, ${
      this.y - this.initialY
    }px)`;
  }
}

const blobEls = document.querySelectorAll(".bouncing-blob");
const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl));

function update() {
  if (!paused) requestAnimationFrame(update);
  blobs.forEach((blob) => {
    blob.update();
    blob.move();
  });
}

requestAnimationFrame(update);
