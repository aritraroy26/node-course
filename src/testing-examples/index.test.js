import { expect } from "chai";
import { getPropertyWithDefault } from "./index.js";

// command to run test using babel
// npx mocha "src/**/*.test.js" --recursive --require @babel/register
// for the above we need to first install @babel/register as dev dependency

describe("getPropertyWithDefault - basic functionality", () => {
  it("returns the correct value when property exists", () => {
    const person = {
      name: "Aritra",
      age: 31,
    };
    const actual = getPropertyWithDefault("name", "NA", person);
    const expected = "Aritra";
    expect(actual).to.equal(expected);
  });

  it("returns the specified default value when property doesn't exist", () => {
    const person = {};
    const actual = getPropertyWithDefault("name", "NA", person);
    const expected = "NA";
    expect(actual).to.equal(expected);
  });
});
