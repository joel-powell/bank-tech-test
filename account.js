module.exports = class Account {
  transactions = [];

  statement() {
    let total = 0;

    const formattedRow = this.transactions.map(({ date, amount }) =>
      [
        this.#formatDate(date),
        this.#formatAmount(amount),
        (total += amount).toFixed(2),
      ].join(" || ")
    );

    formattedRow.push("date || credit || debit || balance");

    const formattedStatement = formattedRow.reverse().join("\n");

    console.log(formattedStatement);
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
};
