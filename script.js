const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');

const exchangeRates = {
    USD: { USD: 1, EUR: 0.88, GBP: 0.76, INR: 82.65 },
    EUR: { USD: 1.13, EUR: 1, GBP: 0.86, INR: 93.45 },
    GBP: { USD: 1.32, EUR: 1.16, GBP: 1, INR: 108.65 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0092, INR: 1 },
};

convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (isNaN(amount)) {
        resultElement.textContent = 'Please enter a valid amount';
        return;
    }

    const exchangeRate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * exchangeRate;
    resultElement.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
});


