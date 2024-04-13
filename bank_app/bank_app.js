class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be greater than 0.");
    }
  }

  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn: $${amount}`);
      } else {
        console.log("Insufficient funds");
      }
    } else {
      console.log("Withdrawal amount must be greater than 0.");
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`
    Account Number: ${this.accountNumber}
    Owner Name: ${this.ownerName}
    Balance: $${this.balance}
    `);
  }
}

// Create two instances of BankAccount
let account1 = new BankAccount(12345, "Nahid Hassan", 1000);
let account2 = new BankAccount(67890, "Emon", 400);

// Deposit, Withdraw, and Display Account Information
account1.displayAccountInfo();
account1.deposit(200);
account1.withdraw(500);
account1.displayAccountInfo();

account2.displayAccountInfo();
account2.deposit(300);
account2.withdraw(700);
account2.displayAccountInfo();
