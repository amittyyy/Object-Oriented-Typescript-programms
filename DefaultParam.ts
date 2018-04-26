function addit(num1:number, num2:number, num3: number = 0): number
{
  let total = num1 + num2 + num3;
  return total;
}

let answers = addit(12,18,50);
console.log(`Adding three numbers: ${answers}`);

answers = addit(12,18);
console.log(`Adding two NUmbers: ${answers}`);

