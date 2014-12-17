#Prime Factors Kata
A javascript kata, with Jasmine tests. 

For each number n, we want to have a list of all the prime number that are it's factors.

Example: for 12 we should have (2,2,3)

## Running the tests
Just open the test file (tests.js) in a browser, and refresh to get the latest changes.

##Instructions

You start with PrimeFactors.js file that has a method generate that returns null.

```
function generate(num){
  return null;
}
```

And a test class tests.js with one **failing** test, for 1 

```
it("should generate empty array for 1", function () {
  expect(PrimeFactors.generate(1)).toEqual([]);
});
```
Start by implementing the generate method in a way that will make the test pass.

**Notice**: you do not need to thinks about the general solution. Just make the test green.

###Next 
add tests for 2,3,4,6,8,9 one by one:

1. add a test
2. if the test fails fix the code
3. verify the test passes
