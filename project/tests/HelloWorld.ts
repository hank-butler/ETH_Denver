import { expect } from "chai";
import { ethers } from "hardhat";

describe("Hello World", () => {
    it("should give a Hello World message", async () => {
        // Let's just do some exploration
        const signers = await ethers.getSigners();
        signers.forEach(async (signer) => {
            console.log(`This signer has the address of: ${signer.address}`)
            const balance = await signer.getBalance();
            console.log(`This signer has the balance of: ${balance}`)

        })

        expect(false).to.eq(true); 
    });
});