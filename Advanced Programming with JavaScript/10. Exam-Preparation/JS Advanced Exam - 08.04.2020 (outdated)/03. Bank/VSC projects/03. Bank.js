class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        this.allCustomers.find((x) => { //checks if the given customer is in the bank list arr

            if (x.personalId === customer.personalId) { // if he is throw error
                throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
            }
        });

        this.allCustomers.push(customer); //if he isn`t, add him as a new customer to the arr

        return customer;
    }

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find((customer) => { //we check if the custoemr corresponds to a custoemr in the array
            return customer.personalId === personalId; //we return the received data
        });

        if (customer === undefined) { //we check the recieved, data and if customer does not exist, we throw an error
            throw new Error("We have no customer with this ID!");
        }

        if (!Number(customer.totalMoney)) { //we check if th listed amount is not a number
            customer.totalMoney = amount; // if it isn`t we make it
        } else {
            customer.totalMoney += amount; //if it is a number we add it
        }

        if (!Array.isArray(customer.transactionInfo)) { // we check if the customer has records of their transaction, if they don't we create a new arr of it
            customer.transactionInfo = [];
        }

        let outputMessage = `${customer.transactionInfo.length + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`; //we create the transaction info 
        customer.transactionInfo.push(outputMessage); //we add the transaction info to the arr

        return `${customer.totalMoney}$`; //we return the total money deposit
    }

    withdrawMoney(personalId, amount) {
        let customer = this.allCustomers.find((customer) => {
            return customer.personalId === personalId;
        });

        if (customer === undefined) {
            throw new Error("We have no customer with this ID!");
        }

        if (!Number(customer.totalMoney)) {
            customer.totalMoney = amount;
        }

        if (!Array.isArray(customer.transactionInfo)) {
            customer.transactionInfo = [];
        }

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        } else {
            customer.totalMoney -= amount;
        }

        let outputMessage = `${customer.transactionInfo.length + 1}. ${customer.firstName} ${customer.lastName} withdraw ${amount}$!`; //we create the transaction info 
        customer.transactionInfo.push(outputMessage);

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        let result = ""; //output
        let customer = this.allCustomers.find((x) => {
            return x.personalId === personalId;
        });

        if (customer === undefined) {
            throw new Error("We have no customer with this ID!");
        }

        result += `Bank name: ${this._bankName}\n`;
        result += `Customer name: ${customer.firstName} ${customer.lastName}\n`;
        result += `Customer ID: ${customer.personalId}\n`;
        result += `Total Money: ${customer.totalMoney}$\n`;
        result += `Transactions:\n`;

        for (let i = customer.transactionInfo.length - 1; i >= 0; i--) { //We need to print each transaction in the arr backwards, from the smallest to the biggest
            result += customer.transactionInfo[i] + "\n"; //Each transaction added to the final result on a new line(customer.transaction details + new line)
        }

        return result; //.trim(); may be needed;
    }
}

//input
let bank = new Bank("SoftUni Bank");
console.log(bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267
}));
console.log(bank.newCustomer({
    firstName: "Mihaela",
    lastName: "Mileva",
    personalId: 4151596
}));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));