// import { sortNumbers } from './sort-numbers.js';
import { solutionName2, solutionName3 } from './solution-name.js';

for (let solution of [solutionName2, solutionName3]) {
  describe('sortNumbers sorts an array of numbers', () => {
    describe('sorts positive numbers', () => {
      it('whole numbers', () => {
        const expected = [0, 1, 2, 3, 5];
        const received = solution([5, 2, 0, 3, 1]);
        expect(received).toEqual(expected);
      });
      it('[1.5, 1, -1.5, 0, -1]) -> [-1.5, -1, 0, 1, 1.5]', () => {
        const expected = [-1.5, -1, 0, 1, 1.5];
        const received = solution([1.5, 1, -1.5, 0, -1]);
        expect(received).toEqual(expected);
      });
      it('[]) -> []', () => {
        const expected = [];
        const received = solution([]);
        expect(received).toEqual(expected);
      });
      it('[0]) -> [0]', () => {
        const expected = [0];
        const received = solution([0]);
        expect(received).toEqual(expected);
      });

      it('negative number', () => {
        const expected = [-5, -3, -2, -1, 0];
        const received = solution([-1, 0, -3, -2, -5]);
        expect(received).toEqual(expected);
      });
    });
  });
}

// sortNumbers([1.5, 1, -1.5, 0, -1]);
// -> [-1.5, -1, 0, 1, 1.5]
