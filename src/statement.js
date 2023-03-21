module.exports = class Statement {
  generate(transactions) {
    const formatted = this.#formatTransactions(transactions);
    formatted.push("date || credit || debit || balance");
    console.log(formatted.reverse().join("\n"));
  }

  #formatTransactions(transactions) {
    let total = 0;
    return transactions.map(({ date, amount }) =>
      [
        this.#formatDate(date),
        this.#formatAmount(amount),
        (total += amount).toFixed(2),
      ].join(" || ")
    );
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
