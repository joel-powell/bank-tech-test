const Account = require("./account");

describe("Account", () => {
  const consoleSpy = jest.spyOn(console, "log");

  describe("initially", () => {
    it("returns an empty array", () => {
      const account = new Account();

      expect(account.transactions).toEqual([]);
    });
  });

  describe("#statement", () => {
    describe("initially", () => {
      it("returns only the headings", () => {
        const account = new Account();

        account.statement();

        expect(consoleSpy).toHaveBeenCalledWith(
          expect.stringContaining("date || credit || debit || balance")
        );
      });
    });

    describe("given a single deposit", () => {
      it("returns the headings and the deposit details", () => {
        const account = new Account();

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

    describe("given two deposits", () => {
      it("returns the headings and the deposit details with running balance", () => {
        const account = new Account();

        jest.setSystemTime(new Date("2023-01-10"));
        account.deposit(1000);
        jest.setSystemTime(new Date("2023-01-13"));
        account.deposit(2000);
        account.statement();

        expect(consoleSpy).toHaveBeenCalledWith(
          [
            "date || credit || debit || balance",
            "13/01/2023 || 2000.00 || || 3000.00",
            "10/01/2023 || 1000.00 || || 1000.00",
          ].join("\n")
        );
      });
    });

    describe("given a single withdrawal", () => {
      it("returns the headings and the deposit details with running balance", () => {
        const account = new Account();

        jest.setSystemTime(new Date("2023-01-14"));
        account.withdraw(500);
        account.statement();

        expect(consoleSpy).toHaveBeenCalledWith(
          [
            "date || credit || debit || balance",
            "14/01/2023 || || 500.00 || -500.00",
          ].join("\n")
        );
      });
    });
  });
});
