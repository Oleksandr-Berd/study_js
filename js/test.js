function howManyGifts(maxBudget, gifts) {
  let total = 0;
  let ableGifts = [];
  ableGifts = gifts.map((gift) => {
    total = total + gift;
    if (total < maxBudget) {
      return total;
    }
  }, 0);

  return ableGifts;
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1]));
