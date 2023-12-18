window.onload = init;

const textcolor = [
  {
    color: "green",
    bg: "black",
    nm: "네이버"
  },
  {
    color: "yellow",
    bg: "navy",
    nm: "다음"
  },
  {
    color: "blue",
    bg: "pink",
    nm: "쿠팡"
  },
  {
    color: "black",
    bg: "gold",
    nm: "구글"
  }
]

function init() {
  for (x in textcolor) {
    startfun2(x, textcolor[x].nm, textcolor[x].bg, textcolor[x].color);

  }
  document.getElementById("delhtml").addEventListener('click', inithtml)
}

function startfun2(a, b, c, d) {
  document.querySelectorAll("#gnb li")[a].innerHTML = b
  document.querySelectorAll("#gnb li")[a].style.backgroundColor = c
  document.querySelectorAll("#gnb li")[a].style.color = d
}

function inithtml() {
  document.body.innerHTML = "";
}