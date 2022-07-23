// const tokenData = async () => {
//     try {
//         const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
//         // Initialize an alchemy-web3 instance:
//         const web3 = createAlchemyWeb3(`https://eth-mainnet.g.alchemy.com/v2/R5rHnKGPRAG2_lMkMh3ilNECc01NBLC5`);
//         // The token address we want to query for metadata:
//         const metadata = await web3.alchemy.getTokenMetadata("0x1985365e9f78359a9B6AD760e32412f4a445E862");
//         console.log("TOKEN METADATA->");
//         console.log(metadata);
//     } catch (error) {
//         console.log('samu:>> ', error);

//     }
// }
// tokenData()

// const getTokenList = async () => {
//     try {
//         console.log("initializing...");
//         const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
//         const response = await fetch('https://bridge.arbitrum.io/token-list-42161.json')
//         const tokenListJSON = await response.json();
//         const metadata = tokenListJSON;
//         //const symbol = metadata.symbol
//         // if (symbol === "BUSD") {
//         //     console.log("busd address is ", metadata.address)
//         // }

//         // const sellTokenAddress = metadata[0].address + "  " + metadata[0].name;
//         // const BuyTokenAddress = metadata[1].address + "  " + metadata[1].name;
//         //console.log("token lists ====", symbol)
//         // console.log("sellTokenAddress", sellTokenAddress)
//         console.log("BuyTokenAddress", metadata)

//             z
//     } catch (error) {
//         console.log("big problem caught", error)
//     }
// }
// getTokenList()



// const qs = require('qs');
// export const getPrice = async () => {
//     try {

//         const params = {
//             sellToken: "0x6b175474e89094c44da98b954eedeac495271d0f", //dai
//             buyToken: "0x4fabb145d64652a948d72533023f6e7a623c7c53", //busd
//             sellAmount: 1 * 10 ** 18
//         }

//         const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
//         const response = await fetch(`https://api.0x.org/swap/v1/price?${qs.stringify(params)}`);
//         const swapPrice = await response.json();
//         console.log("*****************************")
//         //console.log(swapPrice)
//         const estimatedPrice = swapPrice.buyAmount / (10 ** 18);
//         console.log("*****************************")
//         console.log("you sell ==", params.sellAmount / (10 ** 18) + '  DAI')
//         console.log("you receive ==", estimatedPrice + ('  BUSD'))
//     } catch (error) {
//         console.log("wueee big problem", error)
//     }
// }
// getPrice()

const trySwap = async () => {
    try {
        const time = Math.floor(new Date().getTime() / 1000.0)
        console.log("epoch time is", time)

    } catch (error) {
        console.log(error)
    }
}
trySwap()
