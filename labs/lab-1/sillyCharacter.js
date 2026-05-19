/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/




//DECLARE AND INTIALIZE VARIABLES
let characterName = "Mr. Nugget"; //string
let age = 21; // number 
let isSuperhero = true; //boolean
let specialPowers = ["flying", "super speed", "super strength", "teleportation", "telekinesis"]; //array
let favouriteFood = "pizza"; //string

//variable for power description     
let powerDescription = "";


//FUNCTION TO GENERATE A RANDOM CHARACTER DESCRIPTION
function generateCharacterDescription() {

    //generates a randon number for age
    age = Math.floor(Math.random() * 100) + 1

    //picks a random power from the specialPowers array     
    let randomPower = specialPowers[Math.floor(Math.random() * specialPowers.length)];

    //power descriptions for each power     
    if (randomPower === "flying") {
        powerDescription = "fly faster than light";
    }
    else if (randomPower === "super speed") {
        powerDescription = "run across the city in 10 seconds";
    }
    else if (randomPower === "super strength") {
        powerDescription = "lift 20 school buses";
    }
    else if (randomPower === "teleportation") {
        powerDescription = "teleport whenever they sneeze";
    }
    else if (randomPower === "telekinesis") {
        powerDescription = "move objects using only brain power";
    }

    //create a character description (concantenation)
    let description = "This is " + characterName + ", a " + age + "-year-old superhero who loves " + favouriteFood + " and can " + powerDescription + "!";

    //display the description on the webpage
    document.querySelector("#characterDescription").textContent = description;

    //used to test 
    console.log(randomPower);
}


//FUNCTION TO UPDATE CHARACTERS AGE
//increase age
function increaseAge() {
    age++;
    updateCharacterDescription();
}

//decrease age
function decreaseAge() {
    age--;
    updateCharacterDescription();
}


// Function to update the character's description after changing age



// ADD EVENT LISTENERS FOR BUTTONS USING QUERYSELECTOR
//runs the character description function when the generate button is clicked
document.querySelector("#generateButton").addEventListener("click", generateCharacterDescription);

//increases age when the button is clicked
document.querySelector("#increaseAgeButton").addEventListener("click", increaseAge);

//decreases age when the button is clicked
document.querySelector("#decreaseAgeButton").addEventListener("click", decreaseAge);
