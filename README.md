# Lesson 5 - Installs
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

# Lesson 6

