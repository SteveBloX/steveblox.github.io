console.log(
  "%c  ____  _                 ____  _     __  __\r\n / ___|| |_ _____   _____| __ )| | ___\\ \\/ /\r\n \\___ \\| __/ _ \\ \\ / / _ \\  _ \\| |/ _ \\\\  / \r\n  ___) | ||  __/\\ V /  __/ |_) | | (_) /  \\ \r\n |____/ \\__\\___| \\_/ \\___|____/|_|\\___/_/\\_\\\r\n                                            \n%cWelcome !%c\nFind the code on https://github.com/SteveBloX/steveblox.github.io\n\nYou can disable animations manually with pauseResumeMorph(true) and pauseResumeBg(true)",
  "font-weight:bold;font-size: 20px;",
  "font-size: 30px;font-weight:bold;color:#121212",
  ""
);

const homeContent = document.querySelector(".home");
const projectsContent = document.querySelector(".projects");
const techStackContent = document.querySelector(".techstack");
const socialContent = document.querySelector(".social");
const homeNav = document.querySelector(".nhome");
const projectsNav = document.querySelector(".nprojects");
const techStackNav = document.querySelector(".nts");
const socialNav = document.querySelector(".nsocial");
let hd = 100;
let pd = 75;
let tsd = 100;
let sd = 75;
let act = "h";
let dnc = false;
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

let hn = [
  "STEEVE<br>BLLOX",
  "STTEVE<br>BLOOX",
  "STEVEE<br>BLLOX",
  "STTEVE<br>BLOOX",
  "STEEVE<br>BBLOX",
  "STEVEE<br>BLLOX",
  "STEEVE<br>BBLOX",
  "STTEVE<br>BLOOX",
];
let pn = [
  "MY<br>PROOJECTS",
  "MY<br>PRROJECTS",
  "MY<br>PPROJECTS",
  "MY<br>PROJEECTS",
  "MY<br>PROJJECTS",
];
let tsn = [
  "TEECH<br>STACKK",
  "TECHH<br>STTACK",
  "TTECH<br>STAACK",
  "TEECH<br>STACKK",
  "TECHH<br>STAACK",
];
let sn = [
  "MY<br>SOOCIALS",
  "MY<br>SOCIAALS",
  "MY<br>SOCIALLS",
  "MY<br>SOCCIALS",
];
updateTexts(hn);

/*
function setBackground() {
  const bgs = 11;
  let backgrounds = [];
  for (let i = 1; i <= bgs; i++) {
    backgrounds.push(i + ".png");
  }
  const bg = backgrounds.random();
  document.querySelector(
    ".bg"
  ).style = `background-image:url("assets/backgrounds/${bg}");background-size:cover;background-attachment: fixed;`;
  console.log("Using bg " + bg);
}
setBackground();*/

function shuffle(array) {
  const newArray = [...array];
  const length = newArray.length;

  for (let start = 0; start < length; start++) {
    const randomPosition = Math.floor(
      (newArray.length - start) * Math.random()
    );
    const randomItem = newArray.splice(randomPosition, 1);

    newArray.push(...randomItem);
  }

  return newArray;
}

const localLag = localStorage.getItem("lag") === "true";
document.getElementById("nolag").checked = localLag;
disableLag(localLag);

function disableLag(d) {
  pauseResumeMorph(d);
  pauseResumeBg(d);
}

// when checkbox
document.getElementById("nolag").addEventListener("change", (e) => {
  disableLag(e.target.checked);
  document.querySelector(".lag-text").innerHTML = e.target.checked
    ? "Lag disabled"
    : "Lag enabled";
  localStorage.setItem("lag", e.target.checked ? "true" : "false");
});

document.querySelectorAll("img").forEach((img) => {
  let parent = img.parentElement;
  let wrapper = document.createElement("a");
  parent.replaceChild(wrapper, img);
  wrapper.appendChild(img);
  img.style = "max-width: 100%;";
});
homeNav.addEventListener("click", () => {
  if (act === "h") return;
  updateTexts(hn);
  document.querySelectorAll(".home *").forEach((e) => {
    e.style.display = "";
    e.style.opacity = "0";
    e.style.transform = "translateY(" + 50 + "px)";
  });
  homeContent.style.display = "";
  for (let i = 0; i < document.querySelectorAll(".home *").length; i++) {
    eval(
      `
                setTimeout(() => {
                    var els = document.querySelectorAll(".home *")
                    els[${i}].style.transition = "al 0.5s;"
                    els[${i}].style.transform = "translateY(0px)"
                    els[${i}].style.opacity = "1"
                }, ` +
        i +
        `*
            hd
            )
            `
    );
  }
  setTimeout(() => {
    dnc = false;
  }, 450);
  projectsContent.style.display = "none";
  techStackContent.style.display = "none";
  socialContent.style.display = "none";
  homeNav.classList.add("act");
  projectsNav.classList.remove("act");
  techStackNav.classList.remove("act");
  socialNav.classList.remove("act");
  act = "h";
});
projectsNav.addEventListener("click", () => {
  if (act === "p") return;
  updateTexts(pn);
  dnc = true;
  document.querySelectorAll(".projects *").forEach((e) => {
    e.style.display = "";
    e.style.opacity = "0";
    e.style.transform = "translateY(" + 50 + "px)";
  });
  projectsContent.style.display = "flex";
  for (let i = 0; i < document.querySelectorAll(".projects *").length; i++) {
    eval(
      `
                setTimeout(() => {
                    var els = document.querySelectorAll(".projects *")
                    els[${i}].style.transform = "translateY(0px)"
                    els[${i}].style.opacity = "1"
                }, ` +
        i +
        `*
            pd
            )
            `
    );
  }
  setTimeout(() => {
    dnc = false;
  }, 450);
  homeContent.style.display = "none";
  techStackContent.style.display = "none";
  socialContent.style.display = "none";
  homeNav.classList.remove("act");
  projectsNav.classList.add("act");
  techStackNav.classList.remove("act");
  socialNav.classList.remove("act");
  act = "p";
});
let els = "";
techStackNav.addEventListener("click", () => {
  if (act === "ts") return;
  updateTexts(tsn);
  dnc = true;
  document.querySelectorAll(".techstack img").forEach((e) => {
    e.style.display = "";
    e.style.opacity = "0";
    e.style.transform = "translateY(" + 50 + "px)";
  });
  techStackContent.style.display = "flex";
  els = document.querySelectorAll(".techstack img");
  els = shuffle(els);
  for (let i = 0; i < els.length; i++) {
    eval(
      `
                setTimeout(() => {
                    let el = els[0]
                    el.style.transition = "opacity 0.5s, transform 0.5s, scale 0.5s"
                    el.style.transform = "translateY(0px)"
                    el.style.opacity = "1"
                    els.shift()
                }, ` +
        i +
        `*
            tsd
            )
            `
    );
  }
  setTimeout(() => {
    dnc = false;
  }, 450);
  homeContent.style.display = "none";
  projectsContent.style.display = "none";
  socialContent.style.display = "none";
  homeNav.classList.remove("act");
  projectsNav.classList.remove("act");
  techStackNav.classList.add("act");
  socialNav.classList.remove("act");
  act = "ts";
});
socialNav.addEventListener("click", () => {
  if (act === "s") return;
  updateTexts(sn);
  let oldOpacitys = [];
  document.querySelectorAll(".social *").forEach((e) => {
    e.style.display = "";
    oldOpacitys.push(e.style.opacity);
    e.style.opacity = "0";
    e.style.transform = "translateY(" + 50 + "px)";
  });
  socialContent.style.display = "";
  for (let i = 0; i < document.querySelectorAll(".social *").length; i++) {
    eval(
      `
                setTimeout(() => {
                    var els = document.querySelectorAll(".social *")
                    els[${i}].style.transform = "translateY(0px)"
                    els[${i}].style.opacity = oldOpacitys[${i}]
                }, ` +
        i +
        `*
            sd
            )
            `
    );
  }
  setTimeout(() => {
    dnc = false;
  }, 450);
  homeContent.style.display = "none";
  projectsContent.style.display = "none";
  techStackContent.style.display = "none";
  homeNav.classList.remove("act");
  projectsNav.classList.remove("act");
  techStackNav.classList.remove("act");
  socialNav.classList.add("act");
  act = "s";
});
