function extendProrotype(classToExtend) {

    classToExtend.prototype.species = "Human"; //holds a string value "Human"

    classToExtend.prototype.toSpeciesString = function () { //returns the prototype function, that has been set in our created object by a construction function

        return `I am a ${this.species}. ${this.toString()}`;
    }
}

//new classToExtend("Maria", "maria@gmail.com").toSpeciesString()
// "I am a Human. Person (name: Maria, email: maria@gmail.com)"