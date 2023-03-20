module.exports = class Account {
  transactions = [];

  statement() {
    return "date || credit || debit || balance";
  }
};
