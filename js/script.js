let currencyEUR = document.querySelector(".js-currencyEUR");
let currencyUSD = document.querySelector(".js-currencyUSD");
let currencyGBP = document.querySelector(".js-currencyGBP");
let convertElement = document.querySelector(".js-convert");

let formElement = document.querySelector(".js-form");

let amountElement = document.querySelector(".js-amount");

let rateEUR = 4.56
let rateUSD = 3.78
let rateGBP = 5.25


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (true) {
        case currencyEUR.checked:
            convert = amountElement.value / rateEUR;
            convertElement.innerText = `${convert.toFixed(2)} EUR`
            break;
        case currencyUSD.checked:
            convert = amountElement.value / rateUSD;
            convertElement.innerText = `${convert.toFixed(2)} USD`
            break;
        case currencyGBP.checked:
            convert = amountElement.value / rateGBP;
            convertElement.innerText = `${convert.toFixed(2)} GBP`
            break;
    }

});