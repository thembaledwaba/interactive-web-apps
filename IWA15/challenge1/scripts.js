const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [,firstA] = data.lists[0];
const [,secondA] = data.lists[1]; 
const [,thirdA] = data.lists[2];

// Checking that values are extracted
console.log(firstA);
console.log(secondA);
console.log(thirdA);

const result = [];

let biggestValue;

const extractBiggest = () => {
const firstAValue = firstA.length > 0 ? firstA[firstA.length - 1] : undefined;
const secondAValue = secondA.length > 0 ? secondA[secondA.length - 1] : undefined;
const thirdAValue = thirdA.length > 0 ? thirdA[thirdA.length - 1] : undefined;  

if (firstAValue !== undefined && (secondAValue === undefined || firstAValue > secondAValue) && (thirdAValue === undefined || firstAValue > thirdAValue)) {
  biggestValue = firstAValue;
  firstA.pop();
} else if (secondAValue !== undefined && (firstAValue === undefined || secondAValue > firstAValue) && (thirdAValue === undefined || secondAValue > thirdAValue)) {
  biggestValue = secondAValue;
  secondA.pop();
} else if (thirdAValue !== undefined) {
  biggestValue = thirdAValue;
  thirdA.pop();
	}

	return biggestValue;
};

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)