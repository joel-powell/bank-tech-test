module.exports = class Account {
  transactions = [];

  statement() {
    const formatted = this.#formatTransactions();
    formatted.push("date || credit || debit || balance");
    console.log(formatted.reverse().join("\n"));
  }

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

  #formatDate(date) {
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  #formatAmount(amount) {
    const columns = ["||", Math.abs(amount).toFixed(2)];
    if (amount > 0) columns.reverse();
    return columns.join(" ");
  }

  #formatTransactions() {
    let total = 0;
    return this.transactions.map(
      ({ date, amount }) =>
        `${this.#formatDate(date)} || ${this.#formatAmount(
          amount
        )} || ${(total += amount).toFixed(2)}`
    );
  }
};
