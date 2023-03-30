import { fizzBuzz } from './fizzbuzz'

describe("fizzbuzz", () => {

    it('returns a string', () => {
        expect(typeof fizzBuzz(5)).toBe('string')
    })
    it('returns Fizz for three', () => {
        expect(fizzBuzz(3)).toEqual('Fizz')
    })
    it('returns Buzz for five', () => {
        expect(fizzBuzz(5)).toEqual('Buzz')
    })
    it('returns Fizz for multiple of three', () => {
        expect(fizzBuzz(6)).toEqual('Fizz')
    })
     it('returns Buzz for multiple of five', () => {
        expect(fizzBuzz(10)).toEqual('Buzz')
    })
     it('returns FizzBuzz for multiple of both three and five', () => {
        expect(fizzBuzz(30)).toEqual('FizzBuzz')
    })
});
