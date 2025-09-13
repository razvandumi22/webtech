let inputGreutate = document.getElementById("greutate");
let inputInaltime = document.getElementById("inaltime");

let paragrafInputRezultat = document.getElementById("output");
let paragrafIMC = document.getElementById("imc");

function calculeazaIMC() {
  let greutate = Number(inputGreutate.value);
  let inaltime = Number(inputInaltime.value) / 100;
  let imc = greutate / inaltime ** 2;
  console.log(imc);
  paragrafIMC.innerHTML = "IMC = " + imc.toFixed(2);
  if (imc <= 18.5) {
    paragrafInputRezultat.innerHTML = "Risc pentru sanatate: ridicat";
  } else if (imc >= 18.5 && imc <= 24.9) {
    paragrafInputRezultat.innerHTML = "Risc pentru sanatate: minim/scazut";
  } else if (imc >= 25 && imc <= 29.9) {
    paragrafInputRezultat.innerHTML = "Risc pentru sanatate: scazut/moderat";
  } else if (imc >= 30 && imc <= 34.9) {
    paragrafInputRezultat.innerHTML = "Risc pentru sanatate: moderat/ridicat";
  } else paragrafInputRezultat.innerHTML = "Risc pentru sanatate: ridicat";
}
