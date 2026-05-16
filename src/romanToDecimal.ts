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

function main(): void {
  const roman = process.argv[2];
  console.log(`Input: ${roman}`);
  if (!roman) {
    console.error("Please provide a Roman numeral as an argument.");
    process.exit(1);
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

  console.log(result);
}

main();
