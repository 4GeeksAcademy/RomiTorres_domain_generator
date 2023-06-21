/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generateDomain(pronoun, adj, noun, domin) {
    let dominios = "<table class='table table-striped'>";

    for (const i in pronoun) {
      for (const j in adj) {
        for (const k in noun) {
          for (const l in domin) {
            const pronombres = pronoun[i];
            const adjetivo = adj[j];
            const element = noun[k];
            const dominio = domin[l];

            dominios +=
              "<tr><td >" +
              pronombres +
              adjetivo +
              element +
              dominio +
              " " +
              "</td></tr>";
            console.log(dominios);
          }
        }
      }
    }
    dominios += "</table>";
    return dominios;
  }
  var pronoun = ["the", "our", "Mrs"];
  var adj = ["great", "big", "fun"];
  var noun = ["jogger", "racoon", "dog"];
  var domin = [".com", ".net", ".ar", ".es"];

  const misDominios = document.querySelector("#domain");
  const dominios = generateDomain(pronoun, adj, noun, domin);
  misDominios.innerHTML = dominios;

  console.log("Hello Rigo from the console!");
};
