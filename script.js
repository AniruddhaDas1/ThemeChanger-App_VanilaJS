const dkt = document.getElementById("dk");
const wht = document.getElementById("wh");
const body = document.getElementById("body");

function themeSwith() {
  dkt.addEventListener("click", (e) => {
    body.style.color = "white";
    body.style.backgroundColor = "black";
    body.style.cursor = "pointer";
  });

  wht.addEventListener("click", (e) => {
    body.style.color = "black";
    body.style.backgroundColor = "white";
    body.style.cursor = "pointer";
  });
}

/*
const darkThm = window.getComputedStyle(dkt);
const whThm = window.getComputedStyle(wht);

function themeSwith() {
    ( ? : );
}*/
