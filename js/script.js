let currencyEUR = document.querySelector(".js-currencyEUR");
let currencyUSD = document.querySelector(".js-currencyUSD");
let currencyGBP = document.querySelector(".js-currencyGBP");
let convertElement = document.querySelector(".js-convert");

let formElement = document.querySelector(".js-form");

let amountElement = document.querySelector(".js-amount");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (true) {
        case currencyEUR.checked:
            convert = amountElement.value * 4.56;
            convertElement.innerText = `${convert.toFixed(2)}`
            break;
        case currencyUSD.checked:
            convert = amountElement.value * 3.78;
            convertElement.innerText = `${convert.toFixed(2)}`
            break;
        case currencyGBP.checked:
            convert = amountElement.value * 5.25;
            convertElement.innerText = `${convert.toFixed(2)}`
            break;
    }

});