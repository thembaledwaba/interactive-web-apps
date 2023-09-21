const date = 2050 //added equal sign
const status = 'parent' // added equal sign & changed value to parent as requested.
let count = 0 // changed to let as it will be changed with relation

if (date === 2050) { //added three equal signs
	console.log('January', 'New Year’s Day') //added the closed bracket
	console.log('March', 'Human Rights Day')
	let date = 'April' // added let as Im redifining the date and will redefine it
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day');
	count += 4  // wrote the code properly

	if (status === 'student') { //added three equal signs
	  console.log('June', 'Youth Day')
	  count += 1 // wrote the code properly
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	count += 3 // wrote the code properly

	if (status === 'parent') { //added three equal signs
	  console.log(date, 'Christmas Day')
	  count += 1 // wrote the code properly
  }

	console.log(date, 'Day of Goodwill')
	count += 1 // wrote the code properly
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)