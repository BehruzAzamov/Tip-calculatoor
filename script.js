function selectTip(tip) {
    document.getElementById('tipPercentage').value = tip.toString();
}
function calculateTip() {
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    var peopleCount = parseInt(document.getElementById('peopleCount').value);
    if (!billAmount || !tipPercentage || !peopleCount) {
        alert('Please fill out all fields.');
        return;
    }
    var tipAmount = (billAmount * (tipPercentage / 100)) / peopleCount;
    var totalAmount = (billAmount + tipAmount * peopleCount) / peopleCount;
    document.getElementById('tipAmount').innerText = "$".concat(tipAmount.toFixed(2));
    document.getElementById('totalAmount').innerText = "$".concat(totalAmount.toFixed(2));
}
function resetCalculator() {
    document.getElementById('billAmount').value = '';
    document.getElementById('tipPercentage').value = '';
    document.getElementById('peopleCount').value = '';
    document.getElementById('tipAmount').innerText = '$0.00';
    document.getElementById('totalAmount').innerText = '$0.00';
}
