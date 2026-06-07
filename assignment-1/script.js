
/************/
//VARIABLES
/************/

// mission agent types array
const agentTypes = ["Spy", "Hacker", "Scout", "Assassin", "Infiltrator"];

// mission location array
const missionLocations = ["Abandoned Warehouse", "Underground Bunker", "Enemy Headquarters", "Secret Lab", "Space Station"];

// mission weapons array
const weaponLoadouts = ["Pistol", "EMP Device", "Drones", "Snipper Rifle", "Katar"];

// mission objectives array
const missionObjectives = ["Gather Intel", "Rescue Hostages", "Collect Secret Files", "Disable Security System", "Recover Stolen Artifact"];

// mission risk level array
const riskLevels = ["Low", "Medium", "High", "Extreme"];

//mission output paragraph
const missionOutput = document.querySelector("#missionOutput");

// selection indexes
let agentIndex = -1;
let locationIndex = -1;
let weaponIndex = -1;
let objectiveIndex = -1;
let riskIndex = -1;

/*******************/
//BUTTON FUNCTIONS
/*******************/

//function to change agent type
function changeAgent() {
    // move to the next index in the array
    agentIndex++;

    //when end of the array start over
    if (agentIndex >= agentTypes.length) {
        agentIndex = 0;
    }

    // display the selected agent on the page
    document.querySelector("#agentDisplay").textContent = agentTypes[agentIndex];
}

//function to change mission location
function changeLocation() {

    locationIndex++;

    if (locationIndex >= missionLocations.length) {
        locationIndex = 0;
    }

    document.querySelector("#locationDisplay").textContent = missionLocations[locationIndex];
}

//function to change weapon
function changeWeapon() {

    weaponIndex++;

    if (weaponIndex >= weaponLoadouts.length) {
        weaponIndex = 0;
    }

    document.querySelector("#weaponDisplay").textContent = weaponLoadouts[weaponIndex];
}

//function to change mission objective
function changeObjective() {

    objectiveIndex++;

    if (objectiveIndex >= missionObjectives.length) {
        objectiveIndex = 0;
    }

    document.querySelector("#objectiveDisplay").textContent = missionObjectives[objectiveIndex];
}

//function to change risk level
function changeRisk() {

    riskIndex++;

    if (riskIndex >= riskLevels.length) {
        riskIndex = 0;
    }

    document.querySelector("#riskDisplay").textContent = riskLevels[riskIndex];
}

//function to generate mission briefing
function generateMission() {

    // check if all mission selections have been made
    if (agentIndex === -1 || locationIndex === -1 || weaponIndex === -1 || objectiveIndex === -1 || riskIndex === -1) {

        // display warning if selections are incomplete
        missionOutput.textContent = "** Please complete all mission selections!! **";

    } else {

        //safety mission status depending on risk level
        let riskSentence = "";

        if (riskLevels[riskIndex] === "Low") {
            riskSentence = "Safe for deployment!";
        }
        else if (riskLevels[riskIndex] === "Medium") {
            riskSentence = "Proceed with caution!";
        }
        else if (riskLevels[riskIndex] === "High") {
            riskSentence = "High threat level detected!";
        }
        else if (riskLevels[riskIndex] === "Extreme") {
            riskSentence = "Survival probability is low!";
        }

        // display the mission briefing if all selection are made
        missionOutput.textContent =
            "MISSION BRIEFING Agent: " + agentTypes[agentIndex] + " Location: " + missionLocations[locationIndex] + " Weapon: " + weaponLoadouts[weaponIndex] + " Objective: " + missionObjectives[objectiveIndex] + " Risk level: " + riskLevels[riskIndex] + " Safety Status: " + riskSentence;
    }
}

// function to reset all mission selections
function resetMission() {

    // reset indexes
    agentIndex = -1;
    locationIndex = -1;
    weaponIndex = -1;
    objectiveIndex = -1;
    riskIndex = -1;

    // clear displays
    document.querySelector("#agentDisplay").textContent = "None Selected";
    document.querySelector("#locationDisplay").textContent = "None Selected";
    document.querySelector("#weaponDisplay").textContent = "None Selected";
    document.querySelector("#objectiveDisplay").textContent = "None Selected";
    document.querySelector("#riskDisplay").textContent = "None Selected";

    // clear mission output
    missionOutput.textContent = "Mission details will appear here...";
}

/*******************/
 // EVENT LISTENERS
/*******************/

document.querySelector("#agentBtn")
    .addEventListener("click", changeAgent);

document.querySelector("#locationBtn")
    .addEventListener("click", changeLocation);

document.querySelector("#weaponBtn")
    .addEventListener("click", changeWeapon);

document.querySelector("#objectiveBtn")
    .addEventListener("click", changeObjective);

document.querySelector("#riskBtn")
    .addEventListener("click", changeRisk);

document.querySelector("#launchBtn")
    .addEventListener("click", generateMission);

document.querySelector("#resetBtn")
    .addEventListener("click", resetMission);