module.exports = class Account {
  transactions = [];

  statement() {
    const formatted = this.transactions.map(
      ({ date, amount }) =>
        `${this.#formatDate(date)} || ${amount.toFixed(
          2
        )} || || ${amount.toFixed(2)}`
    );

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
