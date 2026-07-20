
//get form and output elements
const pizzaForm = document.querySelector("#pizzaForm");
const orderOutput = document.querySelector("#orderOutput");

//student information
const studentInfo = document.createElement("p");
studentInfo.textContent = "Justine - Student ID: 200641729";
document.body.prepend(studentInfo);


//pizza class
class Pizza {
    //declaring properties
    size;
    crust;
    sauce;
    cheese;
    toppings;
    seasoning;
    quantity;
    instructions;

    //pizza contructor
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

    //pizza order description
    pizzaDescription() {
        return `        Quantity: ${this.quantity}
        Size: ${this.size}
        Crust: ${this.crust}
        Sauce: ${this.sauce}
        Cheese: ${this.cheese}

        Toppings:
            • ${this.toppings.join("\n            • ")}

        Seasonings:
            • ${this.seasoning.join("\n            • ")}

        Special Instructions:
            ${this.instructions}`;
    }

}

//wait for user to place order
pizzaForm.addEventListener("submit", function (event) {
    event.preventDefault();//prevents from refreshing

    //store customer information
    const fullName = document.querySelector("#customerName").value;
    const phone = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const orderType = document.querySelector('input[name="orderType"]:checked').value;
    const street = document.querySelector("#streetAddress").value;
    const city = document.querySelector("#city").value;
    const postalCode = document.querySelector("#postalCode").value;

    //store pizza details
    const size = document.querySelector("#size").value;
    const crust = document.querySelector("#crust").value;
    const sauce = document.querySelector("#sauce").value;
    const cheese = document.querySelector('input[name="cheese"]:checked').value;

    //array to store selected toppings
    const toppings = [];
    const selectedToppings = document.querySelectorAll('input[name="toppings"]:checked');
    selectedToppings.forEach(function (topping) {
        toppings.push(topping.value);
    });

    //array to store selected seasonings
    const seasoning = [];
    const selectedSeasonings = document.querySelectorAll('input[name="seasoning"]:checked');
    selectedSeasonings.forEach(function (item) {
        seasoning.push(item.value);
    });

    //store extra details
    const quantity = document.querySelector("#quantity").value;
    const instructions = document.querySelector("#instructions").value;

    //pizza object
    const pizzaOrder = new Pizza(
        size,
        crust,
        sauce,
        cheese,
        toppings,
        seasoning,
        quantity,
        instructions

    );

    orderOutput.textContent = pizzaOrder.pizzaDescription();

});