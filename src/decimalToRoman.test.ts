import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { decimalToRomanMain } from "./decimalToRoman.ts";

describe("decimalToRoman", () => {
  describe("thousands", () => {
    it("converts 1000 to M", () => assert.equal(decimalToRomanMain(1000), "M"));
    it("converts 2000 to MM", () =>
      assert.equal(decimalToRomanMain(2000), "MM"));
    it("converts 3000 to MMM", () =>
      assert.equal(decimalToRomanMain(3000), "MMM"));
  });

  describe("hundreds", () => {
    it("converts 100 to C", () => assert.equal(decimalToRomanMain(100), "C"));
    it("converts 400 to CD", () => assert.equal(decimalToRomanMain(400), "CD"));
    it("converts 500 to D", () => assert.equal(decimalToRomanMain(500), "D"));
    it("converts 900 to CM", () => assert.equal(decimalToRomanMain(900), "CM"));
  });

  describe("tens", () => {
    it("converts 10 to X", () => assert.equal(decimalToRomanMain(10), "X"));
    it("converts 40 to XL", () => assert.equal(decimalToRomanMain(40), "XL"));
    it("converts 50 to L", () => assert.equal(decimalToRomanMain(50), "L"));
    it("converts 90 to XC", () => assert.equal(decimalToRomanMain(90), "XC"));
  });

  describe("ones", () => {
    it("converts 1 to I", () => assert.equal(decimalToRomanMain(1), "I"));
    it("converts 4 to IV", () => assert.equal(decimalToRomanMain(4), "IV"));
    it("converts 5 to V", () => assert.equal(decimalToRomanMain(5), "V"));
    it("converts 9 to IX", () => assert.equal(decimalToRomanMain(9), "IX"));
  });

  describe("complex numbers", () => {
    it("converts 1903 to MCMIII", () =>
      assert.equal(decimalToRomanMain(1903), "MCMIII"));
    it("converts 1944 to MCMXLIV", () =>
      assert.equal(decimalToRomanMain(1944), "MCMXLIV"));
    it("converts 2006 to MMVI", () =>
      assert.equal(decimalToRomanMain(2006), "MMVI"));
    it("converts 3999 to MMMCMXCIX", () =>
      assert.equal(decimalToRomanMain(3999), "MMMCMXCIX"));
    it("converts 39 to XXXIX", () =>
      assert.equal(decimalToRomanMain(39), "XXXIX"));
    it("converts 448 to CDXLVIII", () =>
      assert.equal(decimalToRomanMain(448), "CDXLVIII"));
  });

  describe("boundary / error cases", () => {
    it("returns error message on 0", () =>
      assert.equal(decimalToRomanMain(0), "Invalid input."));
    it("returns error message on 4000", () =>
      assert.equal(decimalToRomanMain(4000), "Invalid input."));
    it("returns error message on -1", () =>
      assert.equal(decimalToRomanMain(-1), "Invalid input."));
  });
});
