const account = {
    name: 'Jeremy Aucoin',
    expenses: [],
    income: [],
    addExpenses: function (description, amount) {
        this.expenses.push({description: description, amount: amount})
    },
    addIncome: function (description, amount) {
        this.income.push({description: description, amount: amount})
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0

        this.expenses.forEach(function (item) {
            totalExpenses = totalExpenses + item.amount
        })

        this.income.forEach(function (item) {
            totalIncome = totalIncome + item.amount
        })
        
        return `${this.name} has $${totalExpenses} in expenses and $${totalIncome} in income`
    }
}

//Expenses -> des, amount
//addExpense -> des, amount
//getAccountSummary -> total up all expenses -> name + expenses

account.addExpenses("Mortgage", 2000)
account.addExpenses("Food", 600)
account.addExpenses("Utilities, trash, and misc", 1400)
account.addIncome("Paycheck", 4400)
console.log(account.getAccountSummary())



