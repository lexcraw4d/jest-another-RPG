

const Potion = require('../lib/Potion.js');
//Potion created with args:
test('creates a health potion object', () => {
	//args here:
	const potion = new Potion('health');

	expect(potion.name).toBe('health');
	expect(potion.value).toEqual(expect.any(Number));
});

//Potion without args passed test:
test('creates a random potion object', () => {
	//no args here:
	const potion = new Potion();

	expect(potion.name).toEqual(expect.any(String));
	expect(potion.name.length).toBeGreaterThan(0);
	expect(potion.value).toEqual(expect.any(Number));
});
