// JavaScript code for Simple Interest Calculator

// Function to calculate and display the interest and total amount
function calculate() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);

    var interest = (principal * rate * time) / 100;
    var totalAmount = principal + interest;

    document.getElementById('result').innerHTML = "Interest: $" + interest.toFixed(2) + "<br>Total Amount: $" + totalAmount.toFixed(2);
}

// Event listener for the "Calculate" button
document.getElementById('calculateBtn').addEventListener('click', calculate);
