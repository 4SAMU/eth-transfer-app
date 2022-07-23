const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const SwapCryptoFactory = await hre.ethers.getContractFactory("SwapCrypto");
    const SwapCrypto = await SwapCryptoFactory.deploy();
    await SwapCrypto.deployed();

    console.log("Contract deployed to:", SwapCrypto.address);
    console.log("Contract deployed by:", owner.address);

    let waveCount;
    waveCount = await SwapCrypto.getTotalWaves();

    let waveTxn = await SwapCrypto.wave();
    await waveTxn.wait();

    waveCount = await SwapCrypto.getTotalWaves();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();