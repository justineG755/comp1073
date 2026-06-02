
//select the output paragraph
const output = document.querySelector('#missionStatus');

//mission variables
let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;

//CONDITIONAL STATEMENTS

//critical failure
if (health < 30 && enemyNearby === true) 
    {
        output.textContent = 'CRITICAL ALERT: Immediate Evacuation Required';
    }

//low resource warning

//mid mission status

//high progress status

//mission complete

//default state