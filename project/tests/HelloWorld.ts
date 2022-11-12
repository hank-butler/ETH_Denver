import { expect } from "chai";
import { ethers } from "hardhat";

describe("Hello World", () => {
    it("should give a Hello World message", async () => {
        // Let's just do some exploration
        const signers = await ethers.getSigners();
        signers.forEach((signer) => {
            console.log(`This signer has the address of: `)

        })

        expect(false).to.eq(true); 
    });
});