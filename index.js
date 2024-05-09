import inquirer from 'inquirer';
const myPin = 2313;
let myBalance = 10000;
const pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAns.pin === myPin) {
    console.log("Correct Pin");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select one option",
            type: "list",
            choices: ["check balance", "Withdraw"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "amountToWithdraw",
                message: "select Amount to withdraw",
                type: "list",
                choices: ["fast cash", "other amount"]
            }
        ]);
        if (withdrawAmount.amountToWithdraw === "fast cash") {
            let fastcash = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Select one amount to withdraw",
                    type: "list",
                    choices: [1000, 5000, 10000, 20000]
                }
            ]);
            if (fastcash.amount <= myBalance) {
                console.log("your new balance is :  " + (myBalance - fastcash.amount));
            }
            else {
                console.log(`not have ${fastcash.amount} amount to withdraw`);
            }
        }
        if (withdrawAmount.amountToWithdraw === "other amount") {
            let withdrawCash = await inquirer.prompt([
                {
                    name: "amountWithdraw",
                    message: "enter amount to withdraw",
                    type: "number"
                }
            ]);
            if (withdrawCash.amountWithdraw <= myBalance) {
                let afterWithdraw = myBalance - withdrawCash.amountWithdraw;
                console.log(`Your remaining balance is   :  ${afterWithdraw}`);
            }
            else {
                console.log(`not have ${withdrawCash.amountWithdraw} amount to withdraw`);
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your Balance is  :  ${myBalance}`);
    }
}
else
    (console.log(" Enter correct Pin"));
