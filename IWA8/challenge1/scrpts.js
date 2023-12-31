const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name: leoName,
    age: 24,
	balance: 'R' + -leoBalance,
	access_id: '47afb389-8014-4d0b-aff3-e40203d2107f',
	leoAddress: {
		number: leoNumber,
		street: leoStreet,
		postalCode: leoPostal
	}
};

const sarah = {
	name: sarahName.trim() + " " + sarahSurname,
	age: 62,
    balance: 'R' + -sarahBalance,
	access_id: '6b279ae5-5657-4240-80e9-23-f6b635f7a8',
	sarahAddress: {
     sarahStreetNumber: sarahNumber,
		sarahStreetName: sarahStreet,
		postalCode: sarahPostal
	}
};
console.log(leo, leo.leoAddress.postalCode);
console.log(sarah, sarah.sarahAddress.postalCode);