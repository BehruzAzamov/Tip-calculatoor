function selectTip(tip: number): void {
    const tipInput = document.getElementById('tipPercentage') as HTMLInputElement;
    if (tipInput) {
        tipInput.value = tip.toString();
    }
}

function calculateTip(): void {
    const billAmountInput = document.getElementById('billAmount') as HTMLInputElement;
    const tipPercentageInput = document.getElementById('tipPercentage') as HTMLInputElement;
    const peopleCountInput = document.getElementById('peopleCount') as HTMLInputElement;
    
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);
    const peopleCount = parseInt(peopleCountInput.value);

    if (!billAmount || !tipPercentage || !peopleCount) {
        alert('Please fill out all fields.');
        return;
    }

    const tipAmount = (billAmount * (tipPercentage / 100)) / peopleCount;
    const totalAmount = (billAmount + tipAmount * peopleCount) / peopleCount;

    const tipAmountElement = document.getElementById('tipAmount');
    const totalAmountElement = document.getElementById('totalAmount');

    if (tipAmountElement) {
        tipAmountElement.innerText = `$${tipAmount.toFixed(2)}`;
    }

    if (totalAmountElement) {
        totalAmountElement.innerText = `$${totalAmount.toFixed(2)}`;
    }
}

function resetCalculator(): void {
    const billAmountInput = document.getElementById('billAmount') as HTMLInputElement;
    const tipPercentageInput = document.getElementById('tipPercentage') as HTMLInputElement;
    const peopleCountInput = document.getElementById('peopleCount') as HTMLInputElement;
    const tipAmountElement = document.getElementById('tipAmount') as HTMLParagraphElement;
    const totalAmountElement = document.getElementById('totalAmount') as HTMLParagraphElement;

    if (billAmountInput) billAmountInput.value = '';
    if (tipPercentageInput) tipPercentageInput.value = '';
    if (peopleCountInput) peopleCountInput.value = '';
    if (tipAmountElement) tipAmountElement.innerText = '$0.00';
    if (totalAmountElement) totalAmountElement.innerText = '$0.00';
}

(window as any).selectTip = selectTip;
(window as any).calculateTip = calculateTip;
(window as any).resetCalculator = resetCalculator;
