const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(`https://eth-goerli.g.alchemy.com/v2/${API_KEY}`)
const privatekey = "your_wallet_private_key"

export const transferAmount = async (addressX, amount) => {
    try {

        const { ethereum } = window
        const accounts = await ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        const nonce = await web3.eth.getTransactionCount(account)
        const transaction = {
            to: addressX,
            value: amount * 10 ** 18,
            gas: "0x7EF40", //equivalent to 52000 GWEI
            nonce: nonce
        }

        console.log("nonce", nonce)
        
        //
        const signedTransaction = await web3.eth.accounts.signTransaction(transaction, privatekey)

        const sendSingedTransaction = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction, function (error, hash) {

            if (!error) {
                console.log("transaction hash", hash)
                //console.log("token_metadata", metadata)
                alert("sure to send some eth from ur wallet? click ok");

            } else {
                console.log("something went wrong", error);
                console.log("your are sending from", account);
                alert("an error occurred, try minimum amount!!")
                }
        })
        console.log({ sendSingedTransaction })
        window.location.reload()
        

    } catch (error) {
        console.log(error)

    }
}


