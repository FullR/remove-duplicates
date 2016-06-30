const filterDuplicate = require("../lib/filter-duplicate");
const {sample, randomInt, timeFunction} = require("../lib/util");

describe("filterDuplicate", function() {
  it("Should leave the resulting list in the original order", function() {
    const addresses = ["a", "c", "b", "c", "d", "d", "r", "f", "g", "r", "a", "f", "e", "c"];
    const expectedResult = ["a", "c", "b", "d", "r", "f", "g", "e"];
    const result = filterDuplicate(addresses);

    // check if result matches expectedResult
    const isInOrder = result.length === expectedResult.length && result.every((value, i) => {
      return value === expectedResult[i];
    });

    if(!isInOrder) {
      throw new Error("filterDuplicate failed to maintain the original list's order");
    }
  });

  it("should be able to handle 100,000 email addresses containing 50% randomly placed duplicates in under 1 second", function() {
    this.timeout(10000); // generating the addresses takes several seconds
    const addresses = getRandomEmailAddresses(50000, 50000);
    const {elapsed} = timeFunction(() => filterDuplicate(addresses)); // run and time filterDuplicate
    if(elapsed >= 1000) {
      throw new Error("filterDuplicate took longer than expected to complete");
    }
  });
});

function getRandomEmailAddresses(count, duplicateCount) {
  const addresses = [];
  const duplicates = [];
  // create random addresses
  for(let i = 0; i < count; i++) {
    const address = `${i}${Math.random() * 1000000}@${Math.floor(Math.random() * 1000000)}.net`; // creates an address like "5323213.321@421482.net"
    addresses.push(address);
  }
  // pick duplicates
  for(let i = 0; i < duplicateCount; i++) {
    const address = sample(addresses);
    duplicates.push(address);
  }
  // insert duplicates at random indexes
  duplicates.forEach((address) => {
    const insertIndex = randomInt(count + 1); // add one to allow inserting at the end
    addresses.splice(insertIndex, 0, address);
  });
  return addresses;
}
