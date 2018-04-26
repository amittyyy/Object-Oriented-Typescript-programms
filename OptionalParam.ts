function add( num1: number, num2:number, num3?:number): number
{
  let total = num1 + num2;
  if(num3 != undefined)
  {
      total += num3;
  }
  return total;
}

let answer = add(12,23,22);
console.log("adding three numbers" + answer);

answer = add(32,18);
console.log("adding two numbers" + answer);