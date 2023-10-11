// Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(balance, owner) {
    this.balance = balance
    this.owner = owner
  }

  deposit(amount) {
    this.balance = this.balance + amount
  }

  withdraw(amount) {
    this.balance = this.balance - amount
  }

  displayBalance() {
    return this.balance
  }
}

const account = new BankAccount(1000, 'Rounak')
account.deposit(1000)
account.withdraw(500)
const balance = account.displayBalance()
console.log(`Account Holder: ${account.owner} \nCurrent Balance is: ${balance}`)
