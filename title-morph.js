// From https://codepen.io/Valgo/pen/PowZaNY

const elts = {
  text1: document.getElementById("title1"),
  text2: document.getElementById("title2"),
};

let current = [];

function updateTexts(t) {
  current = t;
}
let pause = false;
function pauseResumeMorph(p) {
  pause = p;
  // clear states
  elts.text1.style.filter = `blur(0px)`;
  elts.text1.style.opacity = `0`;
  elts.text2.style.filter = `blur(0px)`;
  elts.text2.style.opacity = `1`;
  console.log("Morph", p ? "paused" : "resumed");
}

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 1;

let textIndex = current.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = current[textIndex % current.length];
elts.text2.textContent = current[(textIndex + 1) % current.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
  // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

  if (!pause) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  }

  elts.text1.innerHTML = current[textIndex % current.length];
  elts.text2.innerHTML = current[(textIndex + 1) % current.length];
}

function doCooldown() {
  morph = 0;
  if (!pause) {
    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
  }
}

// Animation loop, which is called every frame.
function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

// Start the animation.
animate();
