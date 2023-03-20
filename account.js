module.exports = class Account {
  transactions = [];

  statement() {
    let total = 0;

    const formatted = this.transactions
      .map(
        ({ date, amount }) =>
          `${this.#formatDate(date)} || ${amount.toFixed(2)} || || ${(total +=
            amount).toFixed(2)}`
      )
      .reverse();

    formatted.unshift("date || credit || debit || balance");

    console.log(formatted.join("\n"));
  }

  deposit(amount) {
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
};
