
const pizzaForm = document.querySelector("#pizzaForm");
const orderOutput = document.querySelector("#orderOutput");

class Pizza {
    size;
    crust;
    sauce;
    cheese;
    toppings;
    seasoning;
    quantity;
    instructions;

    constructor(size, crust, sauce, cheese, toppings, seasoning, quantity, instructions) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheese = cheese;
        this.toppings = toppings;
        this.seasoning = seasoning;
        this.quantity = quantity;
        this.instructions = instructions;
    }

}