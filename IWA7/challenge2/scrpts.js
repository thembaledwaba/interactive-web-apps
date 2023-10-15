const nickname= "Timmy";
const firstname = "Timothy";
const greeting = nickname || firstname

if(nickname === "Timmy" || firstname === "Timothy"){
console.log(`Good Morning, ${greeting}!`)
}
else{
console.log(`Good Morning!`)	
}