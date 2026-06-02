
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
else if (ammo < 5 || shield === false) 
    {
        output.textContent = "Warning: Low Resources";
    }

//mid mission status
else if (missionProgress >= 1 && missionProgress <= 70) 
    {
        output.textContent = "Mission In Progress";
    }

//high progress status

//mission complete

//default state