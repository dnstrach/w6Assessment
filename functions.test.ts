const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let expected = ['M', 'O', 'D']
    test('return an array with the same items', () => {
        expect(shuffleArray(['D', 'O', 'M'])).toEqual(expect.arrayContaining(expected))
    });

    test('return array with same initial length', () => {
        expect(shuffleArray(['dom', 'ini', 'que'])).toHaveLength(3)
    });

    test('return an array', () => {
        expect(shuffleArray([])).toEqual([])
    });

    test('should shuffle array of items', () => {
        let myArray = [1, 2, 3, 4, 5]
        let result = shuffleArray(myArray)

        expect(result.join()).not.toEqual(myArray.join())
    })
})

