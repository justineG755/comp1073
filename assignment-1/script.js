
/************/
 //VARIABLES
/************/

// mission agent types array
const agentTypes = ["Spy","Hacker","Scout", "Assassin", "Infiltrator"];

// mission location array
const missionLocations = ["Abandoned Warehouse", "Underground Bunker", "Enemy Headquarters", "Secret Lab", "Space Station"];

// mission weapons array
const weaponLoadouts = ["Pistol", "EMP Device", "Drones", "Snipper Rifle", "Katar"];

// mission objectives array
const missionObjectives = ["Gather Intel", "Rescue Hostages", "Collect Secret Files", "Disable Security System", "Recover Stolen Artifact"];

// mission risk level array
const riskLevels = ["Low", "Medium", "High", "Extreme"];

// selection indexes
let agentIndex = 0;
let locationIndex = 0;
let weaponIndex = 0;
let objectiveIndex = 0;
let riskIndex = 0;

/*******************/
 //BUTTON FUNCTIONS
/*******************/

function changeAgent() {
// move to the next index in the array
    agentIndex++;

    //when end of the array start over
    if (agentIndex >= agentTypes.length) {
        agentIndex = 0;
    }

    // display the selected agent on the page
    document.querySelector("#agentDisplay").textContent =
        agentTypes[agentIndex];
}

function changeLocation() {

    locationIndex++;

    if (locationIndex >= missionLocations.length) {
        locationIndex = 0;
    }

    document.querySelector("#locationDisplay").textContent =
        missionLocations[locationIndex];

}

function changeWeapon() {

    
    
}

function changeObjective() {

    
    
}

function changeRisk() {

   
    
}


document.querySelector("#agentBtn")
    .addEventListener("click", changeAgent);

document.querySelector("#locationBtn")
    .addEventListener("click", changeLocation);