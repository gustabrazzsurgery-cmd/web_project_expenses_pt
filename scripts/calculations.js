let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
  ['groceries', 33],
  ['restaurants', 50],
  ['transport', 12],
  ['home', 70],
  ['subscriptions', 14],
  ['groceries', 28],
  ['subscriptions', 12]
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  let balance = calculateBalance();
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < 0.25 * budgetValue) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
  let categories = ['groceries', 'restaurants', 'transport', 'home', 'subscriptions'];
  let categoriesTotals = [];

  for (let i = 0; i < categories.length; i++) {
    let categoryName = categories[i];
    let total = calculateCategoryExpenses(categoryName);
    categoriesTotals.push([categoryName, total]);
  }

  let largestCategory = categoriesTotals[0][0];
  let maxTotal = categoriesTotals[0][1];

  for (let i = 1; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > maxTotal) {
      maxTotal = categoriesTotals[i][1];
      largestCategory = categoriesTotals[i][0];
    }
  }

  return largestCategory;
}

function addExpenseEntry(expense) {
  expenseEntries.push(expense);
  totalExpensesValue += e
    xpense[1];
}
