require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name release saddle concert hunt person bridge suggest'; 
let testAccounts = [
"0x115f86bea55b1588989a5db0cc5b2b42ceeb4ad309e4a696bc70370fc829e24e",
"0xbb7eeb6dcec5c0cddb1b1b323f2b46df0ad993f5c721643fe08e9de5b6ded41a",
"0xa54bf510505ede815b6bdc277861bce27c48a0c10bb1e26bb18a1e44dab52364",
"0xe6c1b361c489d62f3501b5899aacc22f5792b8ec0c9605bf5abc9627a4ecd030",
"0x3eae33c824b39c34d95a4c39da8c71b70036cb0d8311ff974bfd1140041aad49",
"0xab8697cd35bda8eb4be4d07444517ae0abaf583b8d9f9642e77725cdb51f35a7",
"0xa6661c38c1c04005b2b23ebd3a9c73abe6a22a634e58cbfc07506825011865e1",
"0x7f4f661557c66c8797dea5174b1916a55923bb4c137d1b0ce0852e3546721f75",
"0xe966ddd551e2d597c24a40002333104b3c116ef738a755e1cfae4bca0020b7e6",
"0xfb8898d23a831de3891f91cb12b44b911821e72ae4ec69b81a62d95b770bf9d7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

