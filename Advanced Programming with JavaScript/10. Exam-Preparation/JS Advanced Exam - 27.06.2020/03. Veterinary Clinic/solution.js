class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.currentWorkload = 0;
        this.totalProfit = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        //Following structure => this.clients = [{ownerName:ownerName, pets:[],}];

        if (this.currentWorkload >= this.capacity) { //01. Check if we can take more pets deppending on the currentWorload
            throw new Error("Sorry, we are not able to accept more patients!"); //if we cant we print out an error
        }

        let currentOwner = this.clients.find(x => x.ownerName === ownerName); //02. Check if the client is already registered

        if (currentOwner && currentOwner.pets.some(x => x.petName === petName)) { //03. if the client and his pet are already registered with procedures
            let pet = currentOwner.pets.find(x => x.petName === petName); //03.1 Check curr pet in pet arr

            if (pet.procedures.length > 0) { //03.2 if the pet has standing procedures listed
                throw new Error `This pet is already registered under ${currentOwner.ownerName} name! ${pet.petName} is on our lists, waiting for ${this.pet.procedures.join(", ")}.`;
            } else {
                pet.procedures = procedures; //03.3 if no procedures are being listed we add them
            }
        } else if (!currentOwner) { //04. if the owner is new we should register him
            currentOwner = { //04.1 Crete a new owner obj
                ownerName,
                pets: [],
            };

            this.clients.push(currentOwner); //04.2 Add him to the registration list arr
        }
        this.currentWorkload++; //06. increase the current workload

        currentOwner.pets.push({ //05. Add the current pet to the owner's obj list in the arr
            petName,
            kind,
            procedures,
        });

        return `Welcome ${petName}`; //07.
    }

    onLeaving(ownerName, petName) {
        let currentOwner = this.clients.find(x => x.ownerName === ownerName); //01. Check if the client is already registered

        if (!currentOwner) { //01.1 if there is no such current owner;
            throw new Error("Sorry, there is no such client!");
        }

        let currentPet = currentOwner.pets.find(x => x.petName === petName); //02. Check if current pet registered under ownerName

        if (!currentPet || currentPet.procedures.length === 0) { //02.1 Check if procedures array is empty because all the procedures are done
            throw new Error `Sorry, there are no procedures for ${petName}!`;
        }

        this.totalProfit += currentPet.procedures.length * 500; //03. add new price to totals for each and every procedure

        this.currentWorkload--; //04. decreasing the workload

        currentPet.procedures = []; //05. cearing all of the listed procedures

        return `Goodbye ${currentPet.petName}. Stay safe!`; //06. print out the output

    }

    toString() {
        let output = "";

        let clinicBiziness = Math.floor((this.currentWorkload / this.capacity) * 100); //01. calculate the persentage of buziness in the clinic
        output += `${this.clinicName} is ${clinicBiziness}% busy today!`; //01. add the data to the result output on a new line

        output += `\nTotal profit: ${this.totalProfit.toFixed(2)}$`; //02. collect the total profit and add it to the result output on a new line

        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName)); //all owners alphabetically sorted
        for (let client of this.clients) {
            client.pets.sort((a, b) => a.petName.localeCompare(b.petName)); //all pets alphabetically sorted

            output += `\n${client.ownerName} with:`
            for (let pet of client.pets) {
                `\n---${pet.petName} - a ${ pet.kind.toLowerCase()} that needs: ${ pet.procedures.join(", ")}`; //kind printed with lowercase letters 
            }
        }

        return output.trim(); // return the final result output
    }
}

//input
let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());

//output
// Welcome Tom!
// Welcome Max!
// Welcome Tiny!
// Goodbye Tiny. Stay safe!
// SoftCare is 20% busy today!
// Total profit: 500.00$
// Anna Morgan with:
// ---Max - a dog that needs: SK456, DFG45, KS456
// Jim Jones with:
// ---Tiny - a cat that needs: 
// ---Tom - a cat that needs: A154B, 2C32B, 12CDB
// SoftCare is 30% busy today!
// Total profit: 500.00$
// Anna Morgan with:
// ---Max - a dog that needs: SK456, DFG45, KS456
// Jim Jones with:
// ---Sara - a dog that needs: A154B
// ---Tiny - a cat that needs: 
// ---Tom - a cat that needs: A154B, 2C32B, 12CDB