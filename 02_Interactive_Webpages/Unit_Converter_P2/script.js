function convert() {
    const inputValue = document.getElementById("userInput").value;
    var unit = document.getElementById("unit").value;
    const milesToKm = unit ==="milesToKm";
    
    let result = 0;
    
    if (milesToKm === true) {
     result = inputValue * 1.60934;
    } else {
     result = inputdddValue / 1.60934;
    }
    
    const resultString = inputValue + " miles are " + result + " km";
    document.getElementById('resultElement').innerHTML = result;
    
    const resultElement = document.getElementById('resultElement');
    resultElement.innerHTML = resultString;
    }
    