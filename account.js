module.exports = class Account {
  transactions = [];

  statement() {
    let total = 0;

    const formatted = this.transactions.map(({ date, amount }) =>
      [
        this.#formatDate(date),
        amount > 0 && amount.toFixed(2),
        amount < 0 && Math.abs(amount).toFixed(2),
        (total += amount).toFixed(2),
      ]
        .join(" || ")
        .replace(" false ", " ")
    );

    formatted.push("date || credit || debit || balance");

    console.log(formatted.reverse().join("\n"));
  }

  deposit(amount) {
    const date = new Date();
    this.transactions.push({ date, amount });
  }

  withdraw(amount) {
    const date = new Date();
    this.transactions.push({ date, amount: -amount });
  }

  #formatDate(date) {
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }
};
