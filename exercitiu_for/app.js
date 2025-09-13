let pNumbers = document.getElementById("numbers-container");

let numbers = [];

for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let i = 0;
while (i < numbers.length) {
  pNumbers.innerHTML += `
      <p>${numbers[i]}</p>
   `;
  i++;
}
