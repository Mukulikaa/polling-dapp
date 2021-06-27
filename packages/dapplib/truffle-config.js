require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note payment coach just infant force stable'; 
let testAccounts = [
"0x3fcb5e49ceb3b380a99c00b3989217c92b15fe26a69466a086c03d1b30f3675f",
"0xcbb5278c66048ce3e49df96ba2396ce3f5187798d447ccc89b9377708b5fe6d4",
"0x71ffcb310ee9ed2b660c00ef361178ac05eca0d540229fb325fc74cd8cc7c265",
"0x8d44bf0b5707943f10ee35e86d25c740bf8b0f23c4a609b872ff68a80d10ffd2",
"0x7be6342c4ec0f0f8c332771de9c1b7dd42cbb58e17de64db71b7e8340bd9481e",
"0xbcef750a4736bfaf0821082230dab3e6d6de34044f7d79c861dff2c4fbeadfd2",
"0x64911b4ca850987f827aa356b1b988f482236bbb7f9157f7b6407cb94a1556ea",
"0x62b8d5019d38b5749d07637574fbcd8b63b41761eb997ec758a6311f437a5b4f",
"0xb8860d9272a636af02566798069bbba62bbc8b5461af630d37aaea1e8b536875",
"0x82984d69a903e06ba2b3f284310855f21fa1885c0d7a1b36b2316f32aa5fc1bc"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

