const add = (a,b) => a+b;
const generateGreeting = (name) => `hello ${name}!`;

//making assertion about a value in program

test('should add 2 numbers', () => {
    const result = add(3,4);

    // here we have made an assertion using if conditions
        //if(result !== 7)
        //throw new Error(`you added 4 and 3 and result is ${result}. Expected value: 7`);
    //good news is that jest provide us with something called assertion library which contain functions to make these assertions

    expect(result).toBe(7);
});

test('should generate greeting',() => {
    const result = generateGreeting('milek');

    expect(result).toBe('hello milek!');
})