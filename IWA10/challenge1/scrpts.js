const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[9] ? holidays[9].name : 'ID 9 not created yet')

const copied = { ...holidays[6]}; // Make a copy of the Christmas object and update it
copied === holidays[6]
copied.name = 'X-mas'; // change name to X-mas
const correctDate = new Date(copied.date)
correctDate.setHours(0); //setting hours to 0
correctDate.setMinutes(0); //setting mins to 0



isEarlier = correctDate < holidays[6].date;
console.log("New date is earlier:", isEarlier);

const formatDate = date => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const formattedCorrectDate = formatDate(correctDate);

// Log changes
console.log('ID change:', holidays[christmas].id !== copied.id ? copied.id : 'false');
console.log('Name change:', holidays[christmas].name !== copied.name ? copied.name : 'false');
console.log('Date change:', holidays[christmas].date !== correctDate ? formattedCorrectDate: 'false');

const firstHolidayTimestamp = Math.min(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
  ); 


const lastHolidayTimestamp = Math.max(
  new Date(holidays[0].date).getTime(),
  new Date(holidays[1].date).getTime(),
  new Date(holidays[2].date).getTime(),
  new Date(holidays[3].date).getTime(), 
  new Date(holidays[4].date).getTime(),
  new Date(holidays[5].date).getTime(),
  new Date(holidays[6].date).getTime(),
  new Date(holidays[7].date).getTime(),
  new Date(holidays[8].date).getTime(),
); 

/**
 * Change timestamps into date objects using new date
 */
const firstHolidayDate = new Date(firstHolidayTimestamp);
const lastHolidayDate = new Date(lastHolidayTimestamp);

const formattedfirstHolidayDate = formatDate(firstHolidayDate);
const formattedLastHolidayDate = formatDate(lastHolidayDate);

// /**
//  * Extracting the day and month 
//  */
// const firstDay = firstHolidayDate.getDate();
// const firstMonth = (firstHolidayDate.getMonth() + 1);
// const lastDay = lastHolidayDate.getDate();
// const lastMonth = (lastHolidayDate.getMonth() +1);

/**
 * fixed interpolation syntax
 */
console.log(`The first holiday in the year as date:`, formattedfirstHolidayDate );
console.log(`The last holiday in the year as date:`, formattedLastHolidayDate);

// Generate a random holiday date in the same format
const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomIndex];
const randomHolidayDate = new Date(randomHoliday.date);



const formattedRandomHolidayDate = formatDate(randomHolidayDate);

console.log('A randomly selected holiday date in the same format:', formattedRandomHolidayDate);

