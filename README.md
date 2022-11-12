## Lesson 5 - Installs
---

Run the following code

```git clone https://github.com/OpenZeppelin/openzeppelin-contracts.git```

Then move into directory after cloning

```cd openzeppelin-contracts```

Inside `openzeppelin-contracts`

Run `yarn install`

Running `yarn compile`

`yarn compile` looks into scripts and runs `compile` with hardhat.

`code .` opens folder in VScode

> see entire file structure

> look at ./test/token/ERC20.test.js

### Running Test example
---
Run `yarn test ./test/token/ERC20.test.js`

### Changing Gears
---
* Going to create a new folder at different level than openzeppelin.
* avoid git issues 

`cd ..` to be outside `openzeppelin-contracts`
`mkdir project` to create empty folder called "project"