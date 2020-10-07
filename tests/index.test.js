const {sum, momIsMadRandomAnswer, reverseArray, promise, multiplication, birthdayGift} = require('../index');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('return boolean value', () => {
    expect(typeof momIsMadRandomAnswer()).toBe('boolean') 
});

const arr = [1,2,3,4,5];
test('reverse array', () => {
    expect(reverseArray(arr)).toEqual([5,4,3,2,1])
});

test('promise returns 3', () => {
    expect(promise).resolves.toBe(3)
});

test('promise returns multiplication of array', () => {
    expect(multiplication()).resolves.toBe([1,2,3,4])
});

test('promise returns Mi madre decidió no comprarme un nuevo teléfono', () => {
    const momIsMad = true;
    expect(birthdayGift(momIsMad)).rejects.toBe('Mi madre decidió no comprarme un nuevo teléfono')
});

test('promise returns Mi mamá está feliz!, me compró un nuevo teléfono', () => {
    const momIsMad = false;
    expect(birthdayGift(momIsMad)).resolves.toBe('Mi mamá está feliz!, me compró un nuevo teléfono')
});

test('promise with async and await', async() => {
    const momIsMad = false;
    try {const mom = await birthdayGift(momIsMad);
        expect(mom).toBe('Mi mamá está feliz!, me compró un nuevo teléfono')}
    catch (e) {
    }
});

test('promise with async and await', async() => {
    const momIsMad = true;
    try {const mom = await birthdayGift(momIsMad);
        }
    catch (e) {
        expect(e).toStrictEqual(new Error ('Mi madre decidió no comprarme un nuevo teléfono'))
    }
});