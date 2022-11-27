const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const expected = ['M', 'O', 'D']
    test('return an array with the same items', () => {
        expect(shuffleArray(['D', 'O', 'M'])).toEqual(expect.arrayContaining(expected))
    });

    test('return array with same initial length', () => {
        expect(shuffleArray(['dom', 'ini', 'que'])).toHaveLength(3)
    });

    test('return an aray', () => {
        expect(shuffleArray([])).toEqual([])
    })
})

//how to check that items have been shuffled around