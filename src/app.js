/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["pacom", "raquenet", "pepe"];
  var ext = [".com", ".net", ".es"];

  let body = document.body;
  for (var obj1 of pronoun) {
    for (var obj2 of adj) {
      for (var obj3 of noun) {
        for (var obj4 of ext) {
          let url = obj3
            .substring(obj3.length - obj4.length)
            .includes(obj4.substring(1))
            ? obj1 + obj2 + obj3.slice(0, obj3.length + 1 - obj4.length) + obj4
            : obj1 + obj2 + obj3 + obj4;
          let añadir2 = document.createElement("p");
          añadir2.innerHTML = url;
          body.appendChild(añadir2);
        }
      }
    }
  }
};
