function getRealFloor(n) {
  let euroFloor = 0;

  if (n < 13 && n > 0) {
    return (euroFloor = n - 1);
  } else if (n <= 0) {
    return euroFloor === n;
  } else {
    return (euroFloor = n - 2);
  }
}

console.log(getRealFloor(0));
