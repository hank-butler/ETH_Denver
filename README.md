# Lesson 5 - Installs
---

[Link to Lesson 5 Repo](https://github.com/Encode-Club-Solidity-Bootcamp/Lesson-05)

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

---
### Changing Gears
---
* Going to create a new folder at different level than openzeppelin.
* avoid git issues 

`cd ..` to be outside `openzeppelin-contracts`

`mkdir project` to create empty folder called "project"

Make sure you don't have projects initialized in same directory!
* pick place free of other projects on local machine

[Let's look at hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#overview)

* hardhat is a dev environment for ETH
* great for using smart contracts to do things on blockchain
* use hardhat that Remix did for us.

### Start a new project with yarn berry

`yarn init -2` in terminal

`yarn config set nodeLinker node-modules`
* need nodeLinker for later extension

`yarn add hardhat --dev`
* adding dev dependency

`yarn hardhat init`
* initialize 
* create a TypeScript project
* Yes, create a `.gitignore`
* Will get an error because there's already a `README.md`
* run `rm README.md` and then `yarn hardhat init` again

Run `code .` inside project

Looking at `package.json`

`yarn hardhat` to see commands we can run

`yarn add --dev mocha`
* helps with VScode tests

### adding mocha arc file
`.mocharc.json` add code from repo.

adding paths to `hardhat.config.ts`

`paths: {tests: "tests" },`

configuring `tsconfig.json`
add following code to front of file:

`"include": ["./scripts", "./tests", "./typechain-types"],
  "files": ["./hardhat.config.ts"],
`

create a `.env` file, make sure it is in `.gitignore`

---
### Test it out

```
yarn hardhat compile
yarn hardhat test
```
---

Take accounts code from repo, copy and paste into `hardhat.confict.ts`
* make sure to import `task` from hardhat

Now run the line below to test

```
yarn hardhat accounts
```

### Clear out the template files
```
rm .\contracts\*
rm .\scripts\*
rm .\tests\*
yarn hardhat clean
```

Now we can start building new files :)

___

# Lesson 6 - Unit Tests for HelloWorld.Sol

[Lesson 6 Repo](https://github.com/Encode-Club-Solidity-Bootcamp/Lesson-06)

Review initial hardhat setup

```
yarn add --dev @nomicfoundation/hardhat-toolbox@^2.0.0 @nomicfoundation/hardhat-network-helpers@^1.0.0 @nomicfoundation/hardhat-chai-matchers@^1.0.0 @nomiclabs/hardhat-ethers@^2.0.0 @nomiclabs/hardhat-etherscan@^3.0.0 chai@^4.2.0 ethers@^5.4.7 hardhat-gas-reporter@^1.0.8 solidity-coverage@^0.8.0 @typechain/hardhat@^6.1.2 typechain@^8.1.0 @typechain/ethers-v5@^10.1.0 @ethersproject/abi@^5.4.7 @ethersproject/providers@^5.4.7 @types/chai@^4.2.0 @types/mocha@^9.1.0 @types/node@>=12.0.0 ts-node@>=8.0.0 typescript@>=4.5.0
```

Should have environment set up now.

Check with `yarn hardhat compile`

Test failed when running because was in project not where review was initialized.

Matheus removed everything from contracts, scripts, tests.

Copied code for `HelloWorld.sol` from Lesson 6 repo.

Want to write a .ts file for unit testing.

Creating a new file in `./tests/` folder called `HelloWord.ts` to test `HelloWorld.sol`

run it with `node ./tests/HelloWorld.ts`

Adding describe to `HelloWorld.ts`

Lots of fun stuff in this file.

Exploring with different ethers methods.

Updating describe in `HelloWorld.ts`

Copying code from lesson readme.md

There are some errors intentionally put in the code that will be updated in Lesson 7.

---

# Lesson 7 - 