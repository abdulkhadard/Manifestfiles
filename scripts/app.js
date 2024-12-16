// scripts/app.js
const jsContent = `
const creditForm = document.getElementById('creditForm');
const debitForm = document.getElementById('debitForm');
let balance = 0;

if (creditForm) {
    creditForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const creditAmount = parseFloat(document.getElementById('creditAmount').value);
        if (creditAmount > 0) {
            balance += creditAmount;
            alert('Amount credited successfully! Current balance: ' + balance);
        } else {
            alert('Please enter a valid amount.');
        }
    });
}

if (debitForm) {
    debitForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const debitAmount = parseFloat(document.getElementById('debitAmount').value);
        if (debitAmount > 0 && debitAmount <= balance) {
            balance -= debitAmount;
            alert('Amount debited successfully! Current balance: ' + balance);
        } else {
            alert('Invalid debit amount or insufficient balance.');
        }
    });
}
`;
