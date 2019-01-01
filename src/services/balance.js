export function addMoney(amount, stateAmount) {
  return +amount / 100 + stateAmount;
}

export function makeChange(total, coinsArr) {
  const coins = coinsArr.sort().reverse();
  const coin = coins[0];
  if (!coin)
    return total;
  if (total >= coin) {
    return makeChange(total - coin, coins);
  } else if (total < coin) {
    coins.shift();
    return makeChange(total, coins);
  }
}