const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3("https://eth-goerli.g.alchemy.com/v2/R5rHnKGPRAG2_lMkMh3ilNECc01NBLC5")
const privatekey = "0feb07211dcb7bece044c787c37bb9109df60ed2b9db5018073c0019f4df3d7d"

const transferAmount = async () => {
  try {

    const nonce = await web3.eth.getTransactionCount("0xCC9b1020F25e9C568DeC27d3f035218ec06298f9")
    const transaction = {
      to: "0x71E8e2B56ae56FD6364Cdad8c6A72058dCC3a748",
      value: 0.000001 * 10 ** 18,
      gas: "0x7EF40", //equivalent to 52000 GWEI
      nonce: nonce
    }

    console.log("nonce", nonce)

    //
    const signedTransaction = await web3.eth.accounts.signTransaction(transaction, privatekey)

    const sendSingedTransaction = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction, function (error, hash) {

      if (!error) {
        console.log("transaction hash", hash)


      } else {
        console.log("something went wrong", error);

      }
    })
    console.log({ sendSingedTransaction })

  } catch (error) {
    console.log(error)

  }
}
transferAmount()