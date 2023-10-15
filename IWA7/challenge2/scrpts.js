const nickname= "Timmy";
const firstname = "Timothy";
const greeting = nickname || firstname;

// if(nickname === "Timmy" || firstname === "Timothy"){
// console.log(`Good Morning, ${greeting}!`)
// }
// else{
// console.log(`Good Morning!`)	
// }


console.log((nickname === "Timmy" || firstname === "Timothy") ? `Good Morning, ${greeting}!` : "Good Morning!");