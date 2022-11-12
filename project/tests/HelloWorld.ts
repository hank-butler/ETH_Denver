import { expect } from "chai";
import { ethers } from "hardhat";

describe("Hello World", () => {
    it("should give a Hello World message", async () => {
        const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
        const helloWorldContract = await helloWorldFactory.deploy();
        await helloWorldContract.deployed();
        const helloWorldText = await helloWorldContract.helloWorld();
        expect(helloWorldText).to.eq("Hello World"); 
    });
    
    it("should set the owner as the deployer", async () => {
        const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
        const helloWorldContract = await helloWorldFactory.deploy();
        await helloWorldContract.deployed();
        const helloWorldText = await helloWorldContract.helloWorld();
        const accounts = await ethers.getSigners();
        const contractOwner = await helloWorldContract.owner();
        expect(contractOwner).to.eq(accounts[0].address)
    });
});