function fib(num, i=0) {
	const result = [];
  if (num === 0) {
    return i;
  }
  if (num < 0 || num % 1 !== 0) {
    throw 'Invalid number';
  }
  for (i = 0; i < num; i++) {
		i < 2 ? result[i] = i : result[i] = result[i-2] + result[i-1];
	}
	return result;
}

module.exports = fib;
