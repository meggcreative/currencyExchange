let currencyEUR = document.querySelector(".js-currencyEUR");
let currencyUSD = document.querySelector(".js-currencyUSD");
let currencyGBP = document.querySelector(".js-currencyGBP");

let currencyEUROut = document.querySelector(".out-js-currencyEUR");
let currencyUSDOut = document.querySelector(".out-js-currencyUSD");
let currencyGBPOut = document.querySelector(".out-js-currencyGBP");

let convertElement = document.querySelector(".js-convert");

let formElement = document.querySelector(".js-form");

let amountElement = document.querySelector(".js-amount");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let convertFromPrice = arrayToPrice([currencyEUR, currencyUSD, currencyGBP])
    let convertToPrice = arrayToPrice([currencyEUROut, currencyUSDOut, currencyGBPOut])
    let outValue = amountElement.value * convertFromPrice / convertToPrice

    convertFromPrice = magdaFuncInput()
    let outputCurrency = magdaFuncOutput(convertFromPrice)
    console.log(outValue.toFixed(2), convertFromPrice)
        // convertElement.innerText = `${convert.toFixed(2)}`

});


function arrayToPrice(inputChecks) {
    let inputValues = [4.56, 3.78, 5.25]
    let outputValue = 0
    for (let i = 0; i < inputChecks.length; i++) {
        if (inputChecks[i].checked) {
            outputValue += inputValues[i]
        }
    }
    return outputValue
}

function magdaFuncInput() {
    let valueInPLN = null
    switch (true) {
        case currencyEUR.checked:
            valueInPLN = amountElement.value * 4.56;
            break;
        case currencyUSD.checked:
            valueInPLN = amountElement.value * 3.78;
            break;
        case currencyGBP.checked:
            valueInPLN = amountElement.value * 5.25;
            break;
    }
    return valueInPLN
}

function magdaFuncOutput(amountOfPLN) {
    let amountOfCurrency = null
    switch (true) {
        case currencyEUROut.checked:
            amountOfCurrency = amountOfPLN / 4.56
            break;
        case currencyUSDOut.checked:
            amountOfCurrency = amountOfPLN / 3.78
            break;
        case currencyGBPOut.checked:
            amountOfCurrency = amountOfPLN / 5.25
            break;
    }
    return amountOfCurrency
}