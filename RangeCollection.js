// Task: Implement a 'Range Collection' class.
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range collection is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

/**
 * RangeCollection class
 * NOTE: Feel free to add any extra member variables/functions you like.
 */
class RangeCollection {
  constructor() {
    this.ranges = [];
  }

  /**
   * Parameter verification
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  paramVerify(range) {
    if (!Array.isArray(range)) {
      console.error("I'm sorry! Input is wrong, it should be an Array!");
      return false;
    }
    if (range.length != 2) {
      console.error("I'm sorry! Input is wrong, it should have 2 items!");
      return false;
    }
    const start = range[0],
      end = range[1];
    if (start === end) {
      console.error("I'm sorry! Input is invalid!");
      return false;
    }
    return true;
  }

  /**
   * Compare 2 ranges
   * @param {Array<number>} rA/rB - Array of two integers that specify beginning and end of range.
   */
  compareRange(rA, rB) {
    if (rA[0] > rB[1]) {
      return "left";
    } else if (rA[1] < rB[0]) {
      return "right";
    } else if (rA[0] <= rB[0] && rA[1] >= rB[1]) {
      return "contain";
    } else if (rA[0] >= rB[0] && rA[1] <= rB[1]) {
      return "contained";
    } else if (rA[0] >= rB[0] && rA[1] > rB[1]) {
      return "leftCross";
    } else if (rA[0] < rB[0] && rA[1] <= rB[1]) {
      return "rightCross";
    }
  }
  /**
   * Adds a range to the collection
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add(range) {
    // TODO: implement this
    if (!this.paramVerify(range)) {
      return false;
    }
  }

  /**
   * Removes a range from the collection
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove(range) {
    // TODO: implement this
    if (!this.paramVerify(range)) {
      return false;
    }
  }

  /**
   * Prints out the list of ranges in the range collection
   */
  print() {
    // TODO: implement this
  }
}

// Example run
const rc = new RangeCollection();

rc.add([1, 5]);
rc.print();
// Should display: [1, 5)

rc.add([10, 20]);
rc.print();
// Should display: [1, 5) [10, 20)

rc.add([20, 20]);
rc.print();
// Should display: [1, 5) [10, 20)

rc.add([20, 21]);
rc.print();
// Should display: [1, 5) [10, 21)

rc.add([2, 4]);
rc.print();
// Should display: [1, 5) [10, 21)

rc.add([3, 8]);
rc.print();
// Should display: [1, 8) [10, 21)

rc.remove([10, 10]);
rc.print();
// Should display: [1, 8) [10, 21)

rc.remove([10, 11]);
rc.print();
// Should display: [1, 8) [11, 21)

rc.remove([15, 17]);
rc.print();
// Should display: [1, 8) [11, 15) [17, 21)

rc.remove([3, 19]);
rc.print();
// Should display: [1, 3) [19, 21)
