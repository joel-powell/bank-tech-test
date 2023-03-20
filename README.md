# Bank tech test

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command
  line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Installation

The project is written in JavaScript and uses NPM for its package manager.

1. Fork and clone the repo to your local machine
2. Install Node.js dependencies:

```
npm install
```

## Run

Example running of program in terminal:

```javascript
bank-tech-test % node
Welcome to Node.js v19.5.0.
Type ".help" for more information.
> const Account = require("./account");
undefined
> const account = new Account();
undefined
> account.deposit(1000)
undefined
> account.deposit(2000)
undefined
> account.withdraw(500)
undefined
> account.statement()
date || credit || debit || balance
20/03/2023 || || 500.00 || 2500.00
20/03/2023 || 2000.00 || || 3000.00
20/03/2023 || 1000.00 || || 1000.00
```

## Testing

The project uses Jest for testing.

To run all the tests with code coverage you can use the command:

```
npm test
```