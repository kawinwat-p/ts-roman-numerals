const roman_values: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function seperateRomanNumber(roman: string): string[] {
  let romanNumber: string[] = [];

  let number: string = "";
  for (let i = 0; i < roman.length; i++) {
    const current: string = roman[i] || "";
    const next: string = roman[i + 1] || "";

    if (!roman_values[current] || !roman_values[next]) {
      number += current;
      romanNumber.push(number);
      number = "";
      break;
    }
    if (roman_values[current] > roman_values[next]) {
      number += current;
      romanNumber.push(number);
      number = "";
    } else {
      number += current;
    }
  }
  return romanNumber;
}

function romanToDecimal(roman: string): number {
  let result: number = 0;

  for (let i = 0; i < roman.length; i++) {
    const current: string = roman[i] || "";
    const previous: string = roman[i - 1] || "";
    if (!roman_values[current] || !roman_values[previous]) {
      result += roman_values[current] || 0;
      continue;
    }
    if (roman_values[current] > roman_values[previous]) {
      result = roman_values[current] - result;
    } else {
      result += roman_values[current];
    }
  }
  return result;
}

function validateInput(roman: string): boolean {
  // only valid characters
  if (/[^IVXLCDM]/.test(roman)) return false;

  // D, L, V cannot be repeated
  if (/DD|LL|VV/.test(roman)) return false;

  // I, X, C, M cannot repeat more than 3 times in succession
  if (/IIII|XXXX|CCCC|MMMM/.test(roman)) return false;

  // V, L, D can never be subtracted
  if (/VX|VL|VC|VD|VM/.test(roman)) return false;
  if (/LX|LC|LD|LM/.test(roman)) return false;
  if (/DM/.test(roman)) return false;

  // I can only subtract from V and X
  if (/IL|IC|ID|IM/.test(roman)) return false;

  // X can only subtract from L and C
  if (/XD|XM/.test(roman)) return false;

  // only one small-value symbol may be subtracted
  for (let i = 0; i < roman.length - 2; i++) {
    const current = roman[i] || 0;
    const next = roman[i + 1] || 0;
    const after = roman[i + 2] || 0;

    if (!roman_values[current] || !roman_values[next] || !roman_values[after]) {
      continue;
    }

    if (
      roman_values[current] < roman_values[after] &&
      roman_values[next] <= roman_values[after]
    )
      return false;
  }

  return true;
}

export function romanToDecimalMain(roman: string): number | string {
  if (!validateInput(roman)) {
    return "Invalid Roman numeral.";
  }

  let result: number = 0;

  const romanNumber: string[] = seperateRomanNumber(roman);

  for (let i = 0; i < romanNumber.length; i++) {
    const current: string = romanNumber[i] || "";
    if (!current) {
      continue;
    }
    result += romanToDecimal(current);
  }

  return result;
}

export function main(): void {
  const roman = process.argv[2];
  console.log(`Input: ${roman}`);
  if (!roman) {
    console.error("Please provide a Roman numeral as an argument.");
    process.exit(1);
  }

  const result = romanToDecimalMain(roman);
  console.log(`Output: ${result}`);
}

const isMain = process.argv[1]?.endsWith("romanToDecimal.ts");

if (isMain) {
  main();
}
