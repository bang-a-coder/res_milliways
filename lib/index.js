"use strict";

var _reserve = require("./reserve.js");

var content = document.querySelector("#content");
var options = document.querySelectorAll(".option");
options.forEach(function (e) {
  return e.addEventListener("click");
});

function contentSwitch(id) {
  content.innerHTML = "";

  if (id == reserve) {
    (0, _reserve.showReserve)(content);
  }
}