{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.56;
        const rateUSD = 3.78;
        const rateGBP = 5.25;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;
        }


    };
    const updateResult = (result, currency) => {
        let resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const currency = currencyElement.value

        const amountElement = document.querySelector(".js-amount");
        const amount = +amountElement.value

        const result = calculateResult(amount, currency)
        updateResult(result, currency);
        calculateResult(amount, currency);

    };
    const init = () => {
        let formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}