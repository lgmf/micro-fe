import arrayPartition from './ArrayPartition';

describe('Utils / Array Partition', () => {
  const isEvenNumber = (n) => n % 2 === 0;

  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('happy path', () => {
    const [evens, odds] = arrayPartition(arr, isEvenNumber);
    expect(evens).toEqual([0, 2, 4, 6, 8]);
    expect(odds).toEqual([1, 3, 5, 7, 9]);
  });

  describe('when the condition function is not defined', () => {
    it('should consider all values as truthy', () => {
      const [truthyValues, falsyValues] = arrayPartition(arr);
      expect(truthyValues).toEqual(arr);
      expect(falsyValues).toEqual([]);
    });
  });

  describe('when the given array is not defined', () => {
    it('should return empty arrays', () => {
      expect(arrayPartition()).toEqual([[], []]);
    });
  });
});
