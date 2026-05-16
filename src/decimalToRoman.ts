const decimal_values: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function decimalToRoman(decimal: number): string {
  let result: string = "";

  for (const [value, symbol] of decimal_values) {
    while (decimal >= value) {
      result += symbol;
      decimal -= value;
    }
  }

  return result;
}

function validateInput(decimal: number): boolean {
  if (decimal <= 0 || decimal >= 4000) return false;
  return true;
}

function main(): void {
  const input = process.argv[2];

  if (!input || !/^\d+$/.test(input)) {
    console.log(
      "Usage: node --experimental-strip-types src/decimalToRoman.ts <number>",
    );
    process.exit(1);
  }

  const decimal = parseInt(input, 10);

  if (!validateInput(decimal)) {
    console.log("Please enter a number between 1 and 3999.");
    process.exit(1);
  }
  console.log(decimalToRoman(decimal));
}

main();
