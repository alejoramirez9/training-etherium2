/*const Web3 = require('web3');

let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
const { abi, evm } = require('../scripts/compile');

web3.eth.getAccounts().then(accounts => {


    //Get the account which create the contract
    let creatorAccount = accounts[0];
    //console.log(creatorAccount);

    //Deploy contract
    const contract = new web3.eth.Contract(abi);


    contract.deploy({data: "0x" + evm.bytecode.object, arguments: []}).send({
        from: creatorAccount,
        gas: 1500000,
        gasPrice: '5000000'
    }, (error, transactionHash) => {

        if(error){
            console.log(`error: ${error}`);
        }
        else{
            console.log(`transaction hash: ${transactionHash}`);
        }        
    });
});*/

const assert = require('assert');
const Web3 = require('web3');

const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
const web3 = new Web3(provider);

const { abi, evm } = require('../scripts/compile');

let accounts;
let UsersContract;

beforeEach(async()=>{
    accounts = await web3.eth.getAccounts();
    usersContract = await new web3.eth.Contract(abi)
    .deploy({ data : '0x' + evm.bytecode.object, arguments: []})
    .send({ from : accounts[0], gas: '1000000'});
});

describe('The UsersContract', async() => {

    it('should deploy', async() => {
        console.log(usersContract.options.address);
        assert.ok(usersContract.options.address);
    });
      

});