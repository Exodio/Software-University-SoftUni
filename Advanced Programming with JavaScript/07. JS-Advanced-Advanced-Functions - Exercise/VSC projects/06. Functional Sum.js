function add(value) {

    function sum(newValue) {
        value += newValue;
        return sum;
    }
    
    sum.toString = () => value; //Added to remember an initial value different than 0
    return sum;
}

add(1)(6)(-3);