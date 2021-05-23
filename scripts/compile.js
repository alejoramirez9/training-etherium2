const path = require('path');
const fs = require('fs');
const solc = require('solc');
const chalk = require('chalk');

const contractPath = path.resolve(__dirname, "../Contracts", 'UsersContract.sol');
const source = fs.readFileSync(contractPath, 'utf8');

let jsonContractSource = JSON.stringify({
    language: 'Solidity',
    sources: {
        'UsersContract': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['abi', "evm.bytecode"]
            },
        },
    },
});

/*let solcResult = solc.compile(jsonContractSource);
const abi = JSON.parse(solcResult).contracts.UsersContract.UsersContract.abi;
const bytecode = JSON.parse(solcResult).contracts.UsersContract.UsersContract.evm.bytecode.object;*/

module.exports = JSON.parse(solc.compile(jsonContractSource)).contracts.UsersContract.UsersContract;

//console.log(chalk.green(JSON.parse(solc.compile(jsonContractSource)).contracts.UsersContract.UsersContract.abi));