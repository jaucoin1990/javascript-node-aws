//account: name, expenses, income

//addExpense
//addIncome
//getAccountSummary
//resetAccount

let createAccountObject = function (name, expenses=0, income=0) {
    return {
        name: name,
        expenses: expenses,
        income: income
    }
}

let addExpenses = function (accountName, expenses) {
    accountName.expenses = accountName.expenses + expenses
    return accountName
}

let addIncome = function (accountName, income) {
    accountName.income += income
    return accountName
}

let resetAccount = function (accountName) {
    accountName.name = undefined
    accountName.expenses = 0
    accountName.income = 0
}

let account = createAccountObject("Jeremy")

let expenseReport = addExpenses(account, 45)
expenseReport = addExpenses(account, 450)
expenseReport = addIncome(account, 5000)
console.log(expenseReport)

resetAccount(account)
console.log(account)