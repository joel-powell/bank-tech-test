const Account = require("./account");

describe("Account", () => {
  const account = new Account();
  const consoleSpy = jest.spyOn(console, "log");

  describe("initially", () => {
    it("returns an empty array", () => {
      expect(account.transactions).toEqual([]);
    });
  });

  describe("#statement", () => {
    describe("initially", () => {
      it("returns only the headings", () => {
        account.statement();

        expect(consoleSpy).toHaveBeenCalledWith(
          expect.stringContaining("date || credit || debit || balance")
        );
      });
    });

    describe("given a single deposit", () => {
      it("returns the headings and the deposit details", () => {
        jest.setSystemTime(new Date("2023-01-10"));

        account.deposit(1000);
        account.statement();

        expect(consoleSpy).toHaveBeenCalledWith(
          expect.stringContaining("date || credit || debit || balance")
        );
        expect(consoleSpy).toHaveBeenCalledWith(
          expect.stringContaining("10/01/2023 || 1000.00 || || 1000.00")
        );
      });
    });
  });
});
