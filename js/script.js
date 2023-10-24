window.addEventListener("load", function () {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
});
function showImage() {
  var image = document.getElementById("image");
  if (image) {
    image.style.display = "block";
  }
}
function showImage2() {
  var image = document.getElementById("image2");
  if (image) {
    image.style.display = "block";
  }
}
function showImage3() {
  var image = document.getElementById("image3");
  if (image) {
    image.style.display = "block";
  }
}
function hideImage() {
  var image = document.getElementById("image");
  if (image) {
    image.style.display = "none";
  }
}
function hideImage2() {
  var image = document.getElementById("image2");
  if (image) {
    image.style.display = "none";
  }
}
function hideImage3() {
  var image = document.getElementById("image3");
  if (image) {
    image.style.display = "none";
  }
}
function showHideButton1() {
  var buttons = document.getElementsByClassName("hidebutton");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "block";
  }
}
function dshowHideButton1() {
  var buttons = document.getElementsByClassName("hidebutton");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
}
function dshowHideButton2() {
  var buttons = document.getElementsByClassName("hidebutton2");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
}
function dshowHideButton3() {
  var buttons = document.getElementsByClassName("hidebutton3");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
}
function showHideButton2() {
  var buttons = document.getElementsByClassName("hidebutton2");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "block";
  }
}
function showHideButton3() {
  var buttons = document.getElementsByClassName("hidebutton3");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "block";
  }
}
