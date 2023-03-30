import { fizzBuzz } from './fizzbuzz'

describe("fizzbuzz", () => {

    it('returns a string', () => {
        expect(typeof fizzBuzz(5)).toBe('string')
    })
    it('returns Fizz for multiples of three', () => {
        expect(fizzBuzz(3)).toEqual('Fizz')
    })
});
