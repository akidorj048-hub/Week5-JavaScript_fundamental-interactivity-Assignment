// SpendWise - JavaScript Foundation

// 1. Store application data
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Expense-related data
let expenses = [
    { name: "Groceries", amount: 3500, category: "Food" },
    { name: "Transport", amount: 1500, category: "Transport" },
    { name: "Entertainment", amount: 1000, category: "Entertainment" }
];

// 2. Collect user input
let userBudget = prompt("Enter your monthly budget:");

budget = Number(userBudget);

// Check that the budget is a valid number
if (isNaN(budget) || budget <= 0) {
    console.log("Invalid budget. Please enter a positive number.");
} else {

    // 3. Calculate total expenses
    totalExpenses = calculateTotalExpenses(expenses);

    // 4. Calculate remaining balance
    remainingBalance = calculateRemainingBalance(budget, totalExpenses);

    // 5. Display results in the console
    console.log("===== SpendWise Budget Summary =====");
    console.log("Monthly Budget: KSh " + budget);
    console.log("Total Expenses: KSh " + totalExpenses);
    console.log("Remaining Balance: KSh " + remainingBalance);

    if (remainingBalance >= 0) {
        console.log("Status: You are within your budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }
}


// Function to calculate total expenses
function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (let expense of expenseList) {
        total += expense.amount;
    }

    return total;
}


// Function to calculate remaining balance
function calculateRemainingBalance(budgetAmount, expensesAmount) {
    return budgetAmount - expensesAmount;
}