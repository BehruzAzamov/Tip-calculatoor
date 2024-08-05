function selectTip(tip) {
    var tipInput = document.getElementById('tipPercentage');
    if (tipInput) {
        tipInput.value = tip.toString();
    }
}
function calculateTip() {
    var billAmountInput = document.getElementById('billAmount');
    var tipPercentageInput = document.getElementById('tipPercentage');
    var peopleCountInput = document.getElementById('peopleCount');
    var billAmount = parseFloat(billAmountInput.value);
    var tipPercentage = parseFloat(tipPercentageInput.value);
    var peopleCount = parseInt(peopleCountInput.value);
    if (!billAmount || !tipPercentage || !peopleCount) {
        alert('Please fill out all fields.');
        return;
    }
    var tipAmount = (billAmount * (tipPercentage / 100)) / peopleCount;
    var totalAmount = (billAmount + tipAmount * peopleCount) / peopleCount;
    var tipAmountElement = document.getElementById('tipAmount');
    var totalAmountElement = document.getElementById('totalAmount');
    if (tipAmountElement) {
        tipAmountElement.innerText = "$".concat(tipAmount.toFixed(2));
    }
    if (totalAmountElement) {
        totalAmountElement.innerText = "$".concat(totalAmount.toFixed(2));
    }
}
function resetCalculator() {
    var billAmountInput = document.getElementById('billAmount');
    var tipPercentageInput = document.getElementById('tipPercentage');
    var peopleCountInput = document.getElementById('peopleCount');
    var tipAmountElement = document.getElementById('tipAmount');
    var totalAmountElement = document.getElementById('totalAmount');
    if (billAmountInput)
        billAmountInput.value = '';
    if (tipPercentageInput)
        tipPercentageInput.value = '';
    if (peopleCountInput)
        peopleCountInput.value = '';
    if (tipAmountElement)
        tipAmountElement.innerText = '$0.00';
    if (totalAmountElement)
        totalAmountElement.innerText = '$0.00';
}
window.selectTip = selectTip;
window.calculateTip = calculateTip;
window.resetCalculator = resetCalculator;
