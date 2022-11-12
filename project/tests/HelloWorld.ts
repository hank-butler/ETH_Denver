import { expect } from "chai";
import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";

describe("Hello World", () => {
    it("should give a Hello World message", async () => {
        const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
        const helloWorldContract = await helloWorldFactory.deploy();
        await helloWorldContract.deployed();
        const helloWorldText = await helloWorldContract.helloWorld();
        expect(helloWorldText).to.eq("Hello World"); 
    });
});