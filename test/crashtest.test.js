const fib = require('../src/crashtest');
test('If function exists', () => {
    expect(typeof fib === "function");
  });

  
test('String input', () => {
	expect(()=>{fib('abc').toThrow()});
});


test('Expected output', () => {
	expect(fib(8)).toEqual([ 0, 1, 1, 2, 3, 5, 8, 13 ]);
});


test('Negative number input ', () => { 
	expect(()=>{fib(2.5).toThrow()});
});

