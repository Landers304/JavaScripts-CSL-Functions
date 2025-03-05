// Task 1: Function to handle deposits
let balance = 0; // Starting balance

function deposit(amount) {
    if (amount > 0) {
        balance += amount;  // Add deposit amount to the balance
        console.log(`Deposited $${amount}. New balance: $${balance}`);
    } else {
        console.log("Deposit amount must be greater than 0.");
    }
}

// Task 2: Function to handle withdrawals
function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;  // Subtract withdrawal amount from the balance
        console.log(`Withdrew $${amount}. New balance: $${balance}`);
    } else if (amount > balance) {
        console.log("Insufficient funds.");
    } else {
        console.log("Withdrawal amount must be greater than 0.");
    }
}

// Task 3: Function to check the current balance
function checkBalance() {
    console.log(`Your current balance is: $${balance}`);
}

// Testing the banking system
deposit(500);    // Deposit $500
withdraw(200);   // Withdraw $200
checkBalance();  // Check balance
withdraw(350);   // Attempt to withdraw $350, insufficient funds
checkBalance();  // Check balance again
