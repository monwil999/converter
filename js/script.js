{
  const calculateResult = (amount, currency) => {
    const rateEUR = 4.35;
    const rateUSD = 4.0;
    const rateGBP = 5.06;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "USD":
        return amount / rateUSD;

      case "GBP":
        return amount / rateGBP;
    }

    const updateResultText = (amount, result, currency) => {
      const resultElement = document.querySelector(".js-result");
      resultElement.innerHTML = `${amount.toFixed(
        2
      )} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFromSubmit = (event) => {
      event.preventDefault();

      const amountElement = document.querySelector(".js-amount");
      const currencyElement = document.querySelector(".js-currency");

      const amount = +amountElement.value;
      const curency = currencyElement.value;

      const result = calculateResult(amount, currency);

      updateResultText(amount, result, currency);
    };
    const init = () => {
      const formElement = document.querySelector(".js-form");

      formElement.addEventListener("submit", onFromSubmit);
    };
    init();
  };
}
