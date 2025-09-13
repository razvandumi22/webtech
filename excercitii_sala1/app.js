let inputCapapcitateCilindrica = document.getElementById(
  "capapcitate-cilindrinca"
);
let paragrafRezultat = document.getElementById("rezultat");

function calculeazaImpozit() {
  let impozitAuto = 0;
  let capacitateCilindrica = Number(inputCapapcitateCilindrica.value);
  if (capacitateCilindrica <= 1600) {
    impozitAuto = (capacitateCilindrica / 200) * 10;
  } else if (capacitateCilindrica > 1600 && capacitateCilindrica <= 2000) {
    impozitAuto = (capacitateCilindrica / 200) * 28;
  } else if (capacitateCilindrica > 2000 && capacitateCilindrica <= 2600) {
    impozitAuto = (capacitateCilindrica / 200) * 107;
  } else if (capacitateCilindrica > 2600 && capacitateCilindrica <= 3000) {
    impozitAuto = (capacitateCilindrica / 200) * 215;
  } else impozitAuto = (capacitateCilindrica / 200) * 434;
  paragrafRezultat.innerHTML = "Aveti de platit " + impozitAuto + " lei";
}
