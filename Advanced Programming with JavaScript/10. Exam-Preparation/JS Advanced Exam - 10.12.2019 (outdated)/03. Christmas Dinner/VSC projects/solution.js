class ChristmasDinner {
    constructor(budget) {

        if (budget < 0) { //we check in the very beginning if it is equal to a negative number
            throw new Error("The budget cannot be a negative number");
        }

        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = [];
    }

    shopping(product) {

        if (this.budget < Number(product[1])) {
            throw new Error("Not enough money to buy this product");
        }

        this.products.push(product[0]);
        this.budget -= Number(product[1]);

        return `You have successfully bought ${product[0]}!`;
    }

    recipes(recipe) {

        for (const product of recipe.productsList) {

            if (!this.products.includes(product)) { //if we do not include the needed product
                throw new Error("We do not have this product");
            }
        }

        this.dishes.push(recipe); //else we have the product and we cook the dish, so we add it to our dishes arr

        return `${recipe.recipeName} has been successfully cooked!`; //we inform which recipe we cooked
    }

    inviteGuests(name, dish) {

        if (!this.dishes.find(x => x.recipeName === dish)) { //we check if our dish is not present in our dishes obj
            throw new Error("We do not have this dish"); // if it is not present
        }

        if (this.guests.includes(name)) { //we check if we have the guest in our list
            throw new Error("This guest has already been invited"); //if he is in it
        }

        this.guests[name] = dish; //else we create a new kvp and add it to our guest list with props {{guestName}: {dish}}

        return `You have successfully invited ${name}!`;
    }

    showAttendance() { //result option 1
        let result = [];

        for (const eachName in this.guests) { //we go through each guest name in our guests list
            let productsArr = []; //we save all of the products for each guest 
            let pickedDish = this.guests[eachName]; //we save the location of each dish, that eachGuest has picked

            for (const eachDishObj of this.dishes) { //we go through each dish by our already saved guest name + dish of choise

                if (eachDishObj.recipeName === pickedDish) { //we check if the name of the recipe is included under the name of the guest's dish of choise
                    eachDishObj.productsList.forEach((eachProduct) => productsArr.push(eachProduct)); //if it is we take the properties of eachProduct and we save it in our products list
                }
            }

            result.push(`${eachName} will eat ${pickedDish}, which consists of ${productsArr.join(", ")}`); //we add to the arr result each guest name and each dish that he will eat plus an arr joined by (,) for each product in their meal of choise
        }

        return result.join("\n"); //we return the result arr for each line joined on a new line
    }

    // showAttendance() { //result option 2
    //     let result = Object.keys(this.guests).reduce((acc, dishName) => {
    //         let recipeProducts = null;
    //         let pickedDish = this.guests[dishName];

    //         for (const eachDishObj of this.dishes) {
    //             recipeProducts = eachDishObj.productsList.join(", ");
    //         }

    //         acc += `${dishName} will eat ${pickedDish}, which consists of ${recipeProducts}\n`;
    //         return acc;
    //     }, "").trim();

    //     return result;
    // }
}

//input
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

//output
// Ivan will eat Oshav, which consists of Fruits, Honey
// Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory
// Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt