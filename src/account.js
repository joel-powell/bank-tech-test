module.exports = class Account {
  transactions = [];

  deposit(amount) {
    this.#pushTransaction(amount);
  }

  withdraw(amount) {
    this.#pushTransaction(-amount);
  }

  #pushTransaction(amount) {
    const date = new Date();
    this.transactions.push({ date, amount });
  }
};
