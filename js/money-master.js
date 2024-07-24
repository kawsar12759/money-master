document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeString = document.getElementById('income-field').value;
    const income = parseFloat(incomeString);
    const foodString = document.getElementById('food-field').value;
    const food = parseFloat(foodString);
    const rentString = document.getElementById('rent-field').value;
    const rent = parseFloat(rentString);
    const clothesString = document.getElementById('clothes-field').value;
    const clothes = parseFloat(clothesString);

    const totalExpenses = food + rent + clothes;

    const balance = income - totalExpenses;
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        alert('Please fill all the income and expenses fields with valid numbers');
        document.getElementById('income-field').value = '';
        document.getElementById('food-field').value = '';
        document.getElementById('rent-field').value = '';
        document.getElementById('clothes-field').value = '';
        return;
    }
    if (totalExpenses > income) {
        alert("Expense is greater than Income");
    }
    else {
        document.getElementById('total-expenses').innerText = totalExpenses;
        document.getElementById('balance').innerText = balance;

    }




})

document.getElementById('save-btn').addEventListener('click', function () {
    const incomeString = document.getElementById('income-field').value;
    const income = parseFloat(incomeString);

    const saveString = document.getElementById('save-field').value;
    const save = parseFloat(saveString);
    if (save < 0 || save > 100 || isNaN(save)) {
        alert("Please enter a value within 0-100.");
        return;
    }
    const balanceString = document.getElementById('balance').innerText;
    const balance = parseFloat(balanceString);


    const saveAmount = income * (save / 100);


    const remBalance = balance - saveAmount;

    if (balance > 0 && remBalance >= 0) {
        document.getElementById('rem-balance').innerText = remBalance;
        document.getElementById('saving-amount').innerText = saveAmount;
    }
    else {
        alert('Insufficient Balance');
        document.getElementById('saving-amount').innerText = 0;
        document.getElementById('rem-balance').innerText = document.getElementById('balance').innerText;


    }
})
