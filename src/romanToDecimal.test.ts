import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { romanToDecimalMain } from "./romanToDecimal.ts";

describe("romanToDecimal", () => {
  describe("single symbols", () => {
    it("converts I to 1", () => assert.equal(romanToDecimalMain("I"), 1));
    it("converts V to 5", () => assert.equal(romanToDecimalMain("V"), 5));
    it("converts X to 10", () => assert.equal(romanToDecimalMain("X"), 10));
    it("converts L to 50", () => assert.equal(romanToDecimalMain("L"), 50));
    it("converts C to 100", () => assert.equal(romanToDecimalMain("C"), 100));
    it("converts D to 500", () => assert.equal(romanToDecimalMain("D"), 500));
    it("converts M to 1000", () => assert.equal(romanToDecimalMain("M"), 1000));
  });

  describe("additive combinations", () => {
    it("converts II to 2", () => assert.equal(romanToDecimalMain("II"), 2));
    it("converts III to 3", () => assert.equal(romanToDecimalMain("III"), 3));
    it("converts VI to 6", () => assert.equal(romanToDecimalMain("VI"), 6));
    it("converts VIII to 8", () => assert.equal(romanToDecimalMain("VIII"), 8));
    it("converts XI to 11", () => assert.equal(romanToDecimalMain("XI"), 11));
    it("converts MMVI to 2006", () =>
      assert.equal(romanToDecimalMain("MMVI"), 2006));
  });

  describe("subtractive combinations", () => {
    it("converts IV to 4", () => assert.equal(romanToDecimalMain("IV"), 4));
    it("converts IX to 9", () => assert.equal(romanToDecimalMain("IX"), 9));
    it("converts XL to 40", () => assert.equal(romanToDecimalMain("XL"), 40));
    it("converts XC to 90", () => assert.equal(romanToDecimalMain("XC"), 90));
    it("converts CD to 400", () => assert.equal(romanToDecimalMain("CD"), 400));
    it("converts CM to 900", () => assert.equal(romanToDecimalMain("CM"), 900));
  });

  describe("complex combinations", () => {
    it("converts MCMXLIV to 1944", () =>
      assert.equal(romanToDecimalMain("MCMXLIV"), 1944));
    it("converts MCMIII to 1903", () =>
      assert.equal(romanToDecimalMain("MCMIII"), 1903));
    it("converts XXXIX to 39", () => assert.equal(romanToDecimalMain("XXXIX"), 39));
    it("converts CDXLVIII to 448", () =>
      assert.equal(romanToDecimalMain("CDXLVIII"), 448));
    it("converts MMXXVI to 2026", () =>
      assert.equal(romanToDecimalMain("MMXXVI"), 2026));
    it("converts MMMCMXCIX to 3999", () =>
      assert.equal(romanToDecimalMain("MMMCMXCIX"), 3999));
  });

  describe("invalid characters", () => {
    it("rejects lowercase i", () => assert.equal(romanToDecimalMain("i"), "Invalid Roman numeral."));
    it("rejects numbers", () => assert.equal(romanToDecimalMain("123"), "Invalid Roman numeral."));
    it("rejects mixed", () => assert.equal(romanToDecimalMain("XIV2"), "Invalid Roman numeral."));
  });

  describe("invalid repetition", () => {
    it("rejects IIII", () => assert.equal(romanToDecimalMain("IIII"), "Invalid Roman numeral."));
    it("rejects XXXX", () => assert.equal(romanToDecimalMain("XXXX"), "Invalid Roman numeral."));
    it("rejects CCCC", () => assert.equal(romanToDecimalMain("CCCC"), "Invalid Roman numeral."));
    it("rejects MMMM", () => assert.equal(romanToDecimalMain("MMMM"), "Invalid Roman numeral."));
    it("rejects VV", () => assert.equal(romanToDecimalMain("VV"), "Invalid Roman numeral."));
    it("rejects LL", () => assert.equal(romanToDecimalMain("LL"), "Invalid Roman numeral."));
    it("rejects DD", () => assert.equal(romanToDecimalMain("DD"), "Invalid Roman numeral."));
  });

  describe("invalid subtractions", () => {
    it("rejects IL", () => assert.equal(romanToDecimalMain("IL"), "Invalid Roman numeral."));
    it("rejects IC", () => assert.equal(romanToDecimalMain("IC"), "Invalid Roman numeral."));
    it("rejects ID", () => assert.equal(romanToDecimalMain("ID"), "Invalid Roman numeral."));
    it("rejects IM", () => assert.equal(romanToDecimalMain("IM"), "Invalid Roman numeral."));
    it("rejects VX", () => assert.equal(romanToDecimalMain("VX"), "Invalid Roman numeral."));
    it("rejects VL", () => assert.equal(romanToDecimalMain("VL"), "Invalid Roman numeral."));
    it("rejects LC", () => assert.equal(romanToDecimalMain("LC"), "Invalid Roman numeral."));
    it("rejects XD", () => assert.equal(romanToDecimalMain("XD"), "Invalid Roman numeral."));
    it("rejects XM", () => assert.equal(romanToDecimalMain("XM"), "Invalid Roman numeral."));
    it("rejects DM", () => assert.equal(romanToDecimalMain("DM"), "Invalid Roman numeral."));
  });

  describe("invalid multiple subtractions", () => {
    it("rejects IIX", () => assert.equal(romanToDecimalMain("IIX"), "Invalid Roman numeral."));
    it("rejects XXL", () => assert.equal(romanToDecimalMain("XXL"), "Invalid Roman numeral."));
    it("rejects IIV", () => assert.equal(romanToDecimalMain("IIV"), "Invalid Roman numeral."));
    it("rejects CCM", () => assert.equal(romanToDecimalMain("CCM"), "Invalid Roman numeral."));
  });
});
