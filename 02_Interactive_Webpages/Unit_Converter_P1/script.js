const inputValue = 10;
const milesToKm = true;

let result = 0;

if (milesToKm === true) {
 result = inputValue * 1.60934;
} else {
 result = inputdddValue / 1.60934;
}

const resultString = inputValue + " miles are " + result + " km";
console.log(resultString);

const resultElement = document.getElementById('resultElement');
resultElement.innerHTML = resultString;