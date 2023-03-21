const Account = require("./account");

describe("Account", () => {
  describe("initially", () => {
    it("returns an empty array", () => {
      const account = new Account();

      expect(account.transactions).toEqual([]);
    });
  });

  describe("given a single deposit", () => {
    it("returns an array containing the transaction object", () => {
      const account = new Account();

      jest.setSystemTime(new Date("2023-01-10"));
      account.deposit(1000);

      expect(account.transactions).toEqual([
        {
          date: new Date("2023-01-10"),
          amount: 1000,
        },
      ]);
    });
  });

  describe("given two deposits", () => {
    it("returns an array containing two transaction objects", () => {
      const account = new Account();

      jest.setSystemTime(new Date("2023-01-10"));
      account.deposit(1000);
      jest.setSystemTime(new Date("2023-01-13"));
      account.deposit(2000);

      expect(account.transactions).toEqual([
        {
          date: new Date("2023-01-10"),
          amount: 1000,
        },
        {
          date: new Date("2023-01-13"),
          amount: 2000,
        },
      ]);
    });
  });

  describe("given a single withdrawal", () => {
    it("returns an array containing the transaction object", () => {
      const account = new Account();

      jest.setSystemTime(new Date("2023-01-14"));
      account.withdraw(500);

      expect(account.transactions).toEqual([
        {
          date: new Date("2023-01-14"),
          amount: -500,
        },
      ]);
    });
  });

  describe("given two deposits and a withdrawal", () => {
    it("returns an array containing three transaction objects", () => {
      const account = new Account();

      jest.setSystemTime(new Date("2023-01-10"));
      account.deposit(1000);
      jest.setSystemTime(new Date("2023-01-13"));
      account.deposit(2000);
      jest.setSystemTime(new Date("2023-01-14"));
      account.withdraw(500);

      expect(account.transactions).toEqual([
        {
          date: new Date("2023-01-10"),
          amount: 1000,
        },
        {
          date: new Date("2023-01-13"),
          amount: 2000,
        },
        {
          date: new Date("2023-01-14"),
          amount: -500,
        },
      ]);
    });
  });

  describe("given decimal amounts", () => {
    it("returns an array containing three transaction objects", () => {
      const account = new Account();

      jest.setSystemTime(new Date("2023-01-10"));
      account.deposit(10.23);
      jest.setSystemTime(new Date("2023-01-13"));
      account.deposit(25.4);
      jest.setSystemTime(new Date("2023-01-14"));
      account.withdraw(5.02);

      expect(account.transactions).toEqual([
        {
          date: new Date("2023-01-10"),
          amount: 10.23,
        },
        {
          date: new Date("2023-01-13"),
          amount: 25.4,
        },
        {
          date: new Date("2023-01-14"),
          amount: -5.02,
        },
      ]);
    });
  });
});
