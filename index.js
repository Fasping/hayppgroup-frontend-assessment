module.exports = class Solution {
  constructor(api) {
    this.api = api;
  }

  /**
   * Return the most popular shoe size in the customer list.
   *
   * @return {number} The most popular shoe size, or -1 if there is no unique popular size.
   */
  popularSize() {
    const sizeCounts = new Map();

    // Count the occurrences of each shoe size
    const totalPeople = this.api.getNumberOfPeople();
    for (let i = 0; i < totalPeople; i++) {
      const size = this.api.getSize(i);
      if (sizeCounts.has(size)) {
        sizeCounts.set(size, sizeCounts.get(size) + 1);
      } else {
        sizeCounts.set(size, 1);
      }
    }

    let maxCount = 0;
    let popularSize = -1;

    // Find the most popular shoe size
    for (const [size, count] of sizeCounts.entries()) {
      if (count > maxCount) {
        maxCount = count;
        popularSize = size;
      } else if (count === maxCount) {
        popularSize = -1; // No unique popular size
      }
    }

    return popularSize;
  }

  /**
   * Return the most popular name for the most popular shoe size in the given list.
   *
   * @return {string} The most popular name, or an empty string if there is no unique popular name or size.
   */
  popularName() {
    const popularSize = this.popularSize();
    if (popularSize === -1) {
      return ""; // No unique popular size
    }

    const nameCounts = new Map();

    // Count the occurrences of each name for the most popular shoe size
    const totalPeople = this.api.getNumberOfPeople();
    for (let i = 0; i < totalPeople; i++) {
      const size = this.api.getSize(i);
      if (size === popularSize) {
        const name = this.api.getName(i);
        if (nameCounts.has(name)) {
          nameCounts.set(name, nameCounts.get(name) + 1);
        } else {
          nameCounts.set(name, 1);
        }
      }
    }

    let maxCount = 0;
    let popularName = "";

    // Find the most popular name for the most popular shoe size
    for (const [name, count] of nameCounts.entries()) {
      if (count > maxCount) {
        maxCount = count;
        popularName = name;
      } else if (count === maxCount) {
        popularName = ""; // No unique popular name
      }
    }

    return popularName;
  }
};
