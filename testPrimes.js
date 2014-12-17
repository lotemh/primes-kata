/**
 * Created by lotemh on 12/17/2014.
 */

describe("Primes kata", function () {

    it("should generate empty array for 1", function () {
        expect(PrimeFactors.generate(1)).toEqual([]);
    });

    it("should generate [2] for 2", function () {
        expect(PrimeFactors.generate(2)).toEqual([2]);
    });

    it("should generate [3] for 3", function () {
        expect(PrimeFactors.generate(3)).toEqual([3]);
    });

    it("should generate [2,2] for 4", function () {
        expect(PrimeFactors.generate(4)).toEqual([2,2]);
    });

    it("should generate [2,3] for 6", function () {
        expect(PrimeFactors.generate(6)).toEqual([2,3]);
    });

    it("should generate [2,2,2] for 8", function () {
        expect(PrimeFactors.generate(8)).toEqual([2,2,2]);
    });

    it("should generate [3,3] for 9", function () {
        expect(PrimeFactors.generate(9)).toEqual([3,3]);
    });
});