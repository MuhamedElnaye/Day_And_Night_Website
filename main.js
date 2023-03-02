let start1 = document.getElementById("start1");
let moon2 = document.getElementById("moon2");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let nouvil = document.querySelector(".nouvil");
console.log(start1, moon2, mountains3, mountains4, river5, boat6, nouvil);

window.onscroll = function () {
  let value = scrollY;
  //   console.log(value);
  start1.style.left = value + "px";
  moon2.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river5.style.top = value + "px";
  boat6.style.left = value * 2 + "px";
  nouvil.style.fontSize = value + "px";
  if (scrollY >= 55) {
    nouvil.style.fontSize = 55 + "px";
    nouvil.style.position = "fixed";
    if (scrollY >= 430) {
      nouvil.style.display = "none";
    } else {
      nouvil.style.display = "block";
    }
    if (scrollY >= 165) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281, #10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016, #10001f)";
    }
  }
};
