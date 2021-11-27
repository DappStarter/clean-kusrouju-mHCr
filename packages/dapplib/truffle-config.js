require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword stove rival soccer evil install father equal gauge'; 
let testAccounts = [
"0xdd47f0b3605f3a90ea53ed88d40910541e96f7a027371cd52a6de8afe88e6c32",
"0x7e4919a969e8c8219d50649f51d2defb5f0110a9a9375b0f2c8651c3275ec560",
"0x3bbeed703980412e9ef98abcdbf9c31efad490b8945217ec89e96f31e4252fe7",
"0x41f13b9f6239c1c89a7caf99c6938f6926e297708abf1591245161fc2ef0feb7",
"0xadae34280d9e12cb230edd5a50f0adc17bda696222b4ef2a7ddfe81e512b61e3",
"0x691165bb5af9ac1100d50ced010f8bc9f0a03e8e4e2904e98d1c6dead6bb65a0",
"0x7087d6f61ea55c014b82c627b21ff3985ce5a7294148c20116cafb7a2a16c532",
"0xc659a9326e7e062b2cc4eebd3eabf947bed6f1fb4d75ed28f1320992db1feeb8",
"0x29a8e7c36518ebae344e515830bb4b2241aec6cb42bd803c99b6ad524c248c45",
"0x5b75fcf722584917cbad624dc84d962809122a433b67fbcaa1ba2b41b42f111a"
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

