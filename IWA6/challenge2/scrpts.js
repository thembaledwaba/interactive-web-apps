const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = '00';
const minuteOfDay = '00';

// Only change below this line
const taxAsDecimal = parseInt(tax) / 100
const startingAfterTax = (salary * 1) - (taxAsDecimal * salary)
const balance = startingAfterTax - transport - food - rent
const comms = 'Balance not calculated'
if ((hourOfDay && minuteOfDay) === parseInt('00')) {
 
}
if ((hourOfDay === null) && (minuteOfDay == null)){
	console.log(comms)
}
	
console.log('R',balance.toFixed(2))