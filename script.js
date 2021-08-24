// get input value of deposite nad withdraw
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    input.value = '';
    return inputValue;
}

// set the values in the deposite-total and withdraw-total
function getAmount(inputId, amount) {
    const fieldAmount = document.getElementById(inputId);
    const fieldText = fieldAmount.innerText;
    const fieldValue = parseFloat(fieldText);
    const fieldTotal = fieldValue + amount;
    fieldAmount.innerText = fieldTotal;
}

//update balance
function balance(depositeAmount, withdrawAmount) {
    const totalBalance = document.getElementById('balance-total');
    const balanceAmount = parseFloat(totalBalance.innerText);
    const totalBalanceAmount = balanceAmount + parseFloat(depositeAmount) - parseFloat(withdrawAmount);
    totalBalance.innerText = totalBalanceAmount;
}

// handle deposite
document.getElementById('deposite-button').addEventListener('click', function () {
    const count = getInputValue('deposite-input');
    getAmount('deposite-total', count);
});

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const count = getInputValue('withdraw-input');
    getAmount('withdraw-total', count);
});


