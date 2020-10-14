function solve() {

    return {
        extend: function (template) {
            Object.keys(template).forEach(key => {

                if (typeof template[key] === "function") {
                    Object.getPrototypeOf(this)[key] = template[key]; //copies all properties of the template to the parent object and adds them to the object's prototype
                } else {
                    this[key] = template[key];
                }
            });
        }
    };
}