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
          `date || credit || debit || balance`
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
          `date || credit || debit || balance
10/01/2023 || 1000.00 || || 1000.00`
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
          `date || credit || debit || balance
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00`
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
          `date || credit || debit || balance
14/01/2023 || || 500.00 || -500.00`
        );
      });
    });

    describe("given two deposits and a withdrawal", () => {
      it("returns the headings and the transaction details with running balance", () => {
        const account = new Account();

        jest.setSystemTime(new Date("2023-01-10"));
        account.deposit(1000);
        jest.setSystemTime(new Date("2023-01-13"));
        account.deposit(2000);
        jest.setSystemTime(new Date("2023-01-14"));
        account.withdraw(500);
        account.statement();

        expect(consoleSpy).toHaveBeenCalledWith(
          `date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00`
        );
      });
    });

    describe("given decimal amounts", () => {
      it("returns the headings and the transaction details with running balance", () => {
        const account = new Account();

        jest.setSystemTime(new Date("2023-01-10"));
        account.deposit(10.23);
        jest.setSystemTime(new Date("2023-01-13"));
        account.deposit(25.4);
        jest.setSystemTime(new Date("2023-01-14"));
        account.withdraw(5.02);
        account.statement();

        expect(consoleSpy).toHaveBeenCalledWith(
          `date || credit || debit || balance
14/01/2023 || || 5.02 || 30.61
13/01/2023 || 25.40 || || 35.63
10/01/2023 || 10.23 || || 10.23`
        );
      });
    });
  });
});
