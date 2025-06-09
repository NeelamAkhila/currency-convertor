# currency-convertor

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="converter">
        <h2>Currency Converter</h2>
        <form>
            <input type="number" id="amount" placeholder="Enter amount">
            <select id="from-currency">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
            </select>
            <select id="to-currency">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
            </select>
            <button id="convert-btn">Convert</button>
            <p id="result"></p>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>

cascade (style.css)

.converter {
    width: 300px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input[type="number"] {
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
}

select {
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
}

button {
    width: 100%;
    height: 30px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #3e8e41;
}
#result {
    margin-top: 10px;
    font-weight: bold;
}


java script (script.js)

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






