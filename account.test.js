const Account = require("./account");

describe("Account", () => {
  const account = new Account();

  it("initialises", () => {
    expect(account.transactions).toEqual([]);
  });
});
