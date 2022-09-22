function feast(beast, dish) {
  beast.toLowerCase();
  dish.toLowerCase();

  if (
    beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(feast("brown bear", "bear claw"));
