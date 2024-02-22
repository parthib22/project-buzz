const decryptValue = () => "100";

const score =
  Number(decryptValue()) % 10 > 0
    ? Number(decryptValue()).toFixed(1)
    : Number(decryptValue()).toFixed(0);

console.log(score);
