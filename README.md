# Week5-JavaScript_fundamental-interactivity-Assignment
# SpendWise – JavaScript Foundation

## Project Overview

SpendWise is a simple budget-tracking web application designed to help users understand their monthly spending. The project allows a user to enter a monthly budget, processes existing expense data, calculates the total amount spent, and determines the remaining balance. The JavaScript foundation makes the application capable of processing and displaying budgeting information through the browser console.

## JavaScript Concepts Implemented

The project demonstrates several JavaScript concepts covered during the week, including:

* Variables
* Data types
* Arrays
* Objects
* User input with `prompt()`
* Number conversion with `Number()`
* Conditional statements
* Loops
* Arithmetic calculations
* Functions
* Console output using `console.log()`

These concepts work together to transform SpendWise from a static webpage into an application that can process budgeting data.

## How Variables Are Being Used

Variables are used to store important information used by the application. For example, the `budget` variable stores the user's monthly budget, while `totalExpenses` stores the total amount spent.

The `remainingBalance` variable stores the amount left after expenses have been subtracted from the budget.

The project also uses an `expenses` array containing expense objects. Each object stores information such as the expense name, amount, and category.

Example:

```javascript
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

let expenses = [
    { name: "Groceries", amount: 3500, category: "Food" },
    { name: "Transport", amount: 1500, category: "Transport" },
    { name: "Entertainment", amount: 1000, category: "Entertainment" }
];
```

## How User Input Is Collected

SpendWise collects the user's monthly budget using the JavaScript `prompt()` function.

```javascript
let userBudget = prompt("Enter your monthly budget:");
budget = Number(userBudget);
```

The `prompt()` function displays a dialog box where the user can enter their budget. Since the value returned by `prompt()` is text, the `Number()` function converts it into a number so that mathematical calculations can be performed.

The program also checks whether the user entered a valid positive number.

## How Calculations Are Performed

SpendWise calculates the total expenses by going through the expenses stored in the array and adding their amounts together.

```javascript
function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (let expense of expenseList) {
        total += expense.amount;
    }

    return total;
}
```

The remaining balance is then calculated by subtracting total expenses from the user's budget.

```javascript
function calculateRemainingBalance(budgetAmount, expensesAmount) {
    return budgetAmount - expensesAmount;
}
```

For example, if the user enters a budget of KSh 10,000 and the total expenses are KSh 6,000:

```text
Remaining Balance = 10,000 - 6,000
Remaining Balance = KSh 4,000
```

## How Functions Help Organize the Code

Functions help organize the SpendWise code by separating different tasks into reusable sections. Instead of writing the same calculation repeatedly, the project creates functions that can be called whenever the calculations are needed.

The `calculateTotalExpenses()` function calculates the total amount spent, while `calculateRemainingBalance()` determines how much money remains.

Using functions makes the code easier to read, maintain, test, and reuse. It also separates the application's logic into smaller and more manageable parts.

## Displaying Results

After the calculations are completed, SpendWise displays the results in the browser console using `console.log()`.

The output includes:

* Monthly Budget
* Total Expenses
* Remaining Balance
* Budget Status

Example output:

```text
===== SpendWise Budget Summary =====
Monthly Budget: KSh 10000
Total Expenses: KSh 6000
Remaining Balance: KSh 4000
Status: You are within your budget.
```

If expenses exceed the budget, the application displays a message indicating that the budget has been exceeded.

## Files in the Project

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

* **index.html** – Provides the structure of the SpendWise webpage.
* **style.css** – Provides the visual styling and layout.
* **script.js** – Contains the JavaScript logic for processing budget and expense data.
* **README.md** – Documents the project and explains how the JavaScript features work.

## Conclusion

The JavaScript foundation has transformed SpendWise from a purely visual budget dashboard into a basic interactive application. It now accepts user input, stores data in variables and objects, performs calculations, uses reusable functions, applies conditional logic, and displays budgeting results in the browser console.
