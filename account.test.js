const Account = require("./account");

describe("Account", () => {
  const account = new Account();

  describe("initially", () => {
    it("returns an empty array", () => {
      expect(account.transactions).toEqual([]);
    });
  });

  describe("#statement", () => {
    describe("#initially", () => {
      it("returns only the headings", () => {
        expect(account.statement()).toBe("date || credit || debit || balance");
      });
    });
  });
});
