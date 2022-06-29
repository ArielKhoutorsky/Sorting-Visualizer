const container = document.getElementById("container");
const generatebutton = document.getElementById("generate-button");
const bubblesort = document.getElementById("bubblesort");
const selectionsort = document.getElementById("selectionsort");

let stop = false;
// bubblesort
let kglob = 0;
let jglob = 0;
let bubbleplaying = false;
// selectionsort
let k1glob = 0;
let j1glob = 0;
let selectionplaying = false;

array = [];

function populate(n) {
  array.length = 0;
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 500) + 10;
  }
  for (let i = 0; i < n; i++) {
    var div1 = document.createElement("div");
    div1.classList.add("element");
    div1.style.height = array[i] + "px";
    container.appendChild(div1);
  }
  barslist = document.querySelectorAll(".element");
}

generatebutton.addEventListener("click", () => {
  let size = 100;
  container.innerHTML = "";
  if (size < 5) {
    size = 5;
  }
  if (size > 200) {
    size = 200;
  }
  populate(size);
  jglob = 0;
  kglob = 0;
});

bubblesort.addEventListener("click", () => {
  if (!bubbleplaying) {
    bubbleplaying = true;
    generatebutton.disabled = "true";
    bubblesort.disabled = "true";
    colorcurr(jglob, jglob + 1);
  }
});

function bubblesortalgorithm(k, j) {
  kglob = k;
  jglob = j;
  barslist[j].classList.remove("curr-element");
  barslist[j + 1].classList.remove("curr-element");

  if (j == array.length - 1 - k) {
    k++;
    kglob++;
    j = 0;
    jglob = 0;
    colorcurr(j, j + 1);
  } else if (k === array.length - 2) {
    kglob = 0;
    jglob = 0;
    bubbleplaying = false;
    generatebutton.removeAttribute("disabled");
    bubblesort.removeAttribute("disabled");
    bubblesort.innerText = "bubblesort";
    return;
  } else if (array[j] > array[j + 1]) {
    let temp = array[j];
    array[j] = array[j + 1];
    barslist[j].style.height = array[j] + "px";
    array[j + 1] = temp;
    barslist[j + 1].style.height = array[j + 1] + "px";
    j++;
    colorcurr(j, j + 1);
  } else {
    j++;
    colorcurr(j, j + 1);
  }
}

function colorcurr(j, c) {
  if (j == array.length - 1 - kglob) {
    kglob++;
    j = 0;
    jglob = 0;
    c = 1;
  }
  barslist[j].classList.add("curr-element");
  barslist[c].classList.add("curr-element");
  setTimeout(bubblesortalgorithm, 0.01, kglob, j);
}

// selectionsort

selectionsort.addEventListener("click", () => {
  if (!selectionplaying) {
    selectionplaying = true;
    generatebutton.disabled = "true";
    selectionsort.disabled = "true";
    colorcurr1(j1glob, j1glob + 1);
  }
});

function colorcurr1(j, c) {
  if (j == array.length - 1 - kglob) {
    kglob++;
    j = 0;
    jglob = 0;
    c = 1;
  }
  barslist[j].classList.add("curr-element");
  barslist[c].classList.add("curr-element");
  setTimeout(selectionsortalgorithm, 0.05, kglob, j);
}

function selectionsortalgorithm(k, j) {
  kglob = k;
  jglob = j;
  barslist[j].classList.remove("curr-element");
  barslist[j + 1].classList.remove("curr-element");

  if (j == array.length - 1 - k) {
    k++;
    kglob++;
    j = 0;
    jglob = 0;
    colorcurr1(j, j + 1);
  } else if (k === array.length - 2) {
    kglob = 0;
    jglob = 0;
    selectionplaying = false;
    generatebutton.removeAttribute("disabled");
    selectionsort.removeAttribute("disabled");
    selectionsort.innerText = "selectionsort";
    return;
  } else if (array[j] > array[j + 1]) {
    let temp = array[j];
    array[j] = array[j + 1];
    barslist[j].style.height = array[j] + "px";
    array[j + 1] = temp;
    barslist[j + 1].style.height = array[j + 1] + "px";
    j++;
    colorcurr(j, j + 1);
  } else {
    j++;
    colorcurr(j, j + 1);
  }
}
