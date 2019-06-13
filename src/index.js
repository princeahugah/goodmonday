/**
 * A function that defines the sort order.
 * @function compare.
 * @param a
 * @param b
 * @returns -1, 0, 1
 */
function compare(a, b) {
	if (b > a) {
		return -1;
	}
	if (b < a) {
		return 1;
	}
	return 0;
}

/**
 * Accept 2 numbers and checks if the product of the numbers is greater than the sum
 * @function isProductGreaterThanSum.
 * @param a
 * @param b
 * @returns {boolean}
 */
function isProductGreaterThanSum(a, b) {
	return (a * b > a + b) ? true : false;
}

/**
 * Sort the array, compute the negative and positive parts differently and handle odd cases
 * @function findMaximumSum.
 * @param arr
 */
export default function findMaximumSum(A) {
	let n = A.length;
	let sum = 0;
	let sequence = '';
  
	// Sort the array first 
	const arr = A.sort(compare);
  
	// Multiply negative numbers as a pair and sum up from start of sorted array
	let i=0;
	for(; i<n && arr[i] < 0; i+=2) {
		if (i !== n - 1 && arr[i + 1] <= 0) {
			sum += arr[i] * arr[i + 1];
			sequence += (sequence !== '') ? ` + (${arr[i]} * ${arr[i + 1]})` : `(${arr[i]} * ${arr[i + 1]})`;
		}
		else {
			break;
		}
	}
  
	// Multiply positive numbers as a pair and sum up from the end of the sorted array to get maximum sum. 
	let j = n - 1;
	for(; j >= 0 && arr[j] > 0; j-=2) {
		if (j !== 0 && arr[j - 1] > 0) {
			if (isProductGreaterThanSum(arr[j], arr[j - 1])) {
				sum += arr[j] * arr[j - 1];
				sequence += (sequence !== '') ? ` + (${arr[j]} * ${arr[j - 1]})` : `(${arr[j]} * ${arr[j - 1]})`;
			} else {
				sum += arr[j] + arr[j - 1];
				sequence += (sequence !== '') ? ` + (${arr[j]} + ${arr[j - 1]})` : `(${arr[j]} + ${arr[j - 1]})`;
			}
		}
		else {
			break;
		}
	}

	// Handle cases where positive and negative numbers are odd in counts.
	if (j > i) {
		if (isProductGreaterThanSum(arr[i], arr[j])) {
			sum += arr[i] * arr[j];
			sequence += (sequence !== '') ? ` + (${arr[i]} * ${arr[j]})` : `(${arr[i]} * ${arr[j]})`;
		} else {
			sum += arr[i] + arr[j];
			sequence += (sequence !== '') ? ` + (${arr[i]} + ${arr[j]})` : `(${arr[i]} + ${arr[j]})`;
		}
	}
	// Handle cases where positive and negative numbers are even in counts. 
	else if (i === j) {
		sum += arr[i];
		sequence += (sequence !== '') ? ` + ${arr[i]}` : `${arr[i]}`;
	}
  
	return {
		sum,
		sequence
	};
}
