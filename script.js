const numberInput = document.getElementById("number-input");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");

let resultField = document.getElementById("converter-result");

const currencyValues = {
  eur: 1,
  aud: 1.71,
  cad: 1.62,
  usd: 1.19,
};

convertBtn.addEventListener("click", () => {
  let currentValue = Number(numberInput.value);
  if (currentValue === 0) {
    numberInput.classList.add("danger");
  } else {
    numberInput.classList.remove("danger");
    convertBtn.classList.add("used");
    resetBtn.classList.remove("hidden");
    let currentCurrency = fromCurrency.value;
    let base = currentValue / currencyValues[currentCurrency];
    let targetCurrency = toCurrency.value;
    let resultValue = base * currencyValues[targetCurrency];
    let rateBase = 1 / currencyValues[currentCurrency];
    let targetRate = rateBase * currencyValues[targetCurrency];
    resultField.innerHTML = `
  <h3><span>${currentValue.toFixed(2)} ${currentCurrency}</span> is <span>${resultValue.toFixed(2)} ${targetCurrency}</span></h3>
  <p>Rate: <span>1 ${currentCurrency} = ${targetRate.toFixed(2)} ${targetCurrency}</span></p>`;
  }
});

resetBtn.addEventListener("click", () => {
  convertBtn.classList.remove("used");
  resetBtn.classList.add("hidden");
  numberInput.value = "";
  resultField.innerHTML = ``;
  fromCurrency.value = "eur";
  toCurrency.value = "usd";
});
