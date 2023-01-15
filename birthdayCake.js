function birthdayCakeCandles() {
  let bigCandle = 0;
  let count = 0;

  arr.sort((a, b) => b - a);
  bigCandle = arr[0];

  arr.forEach((candle) => {
    if (candle === bigCandle) {
      countCandle = +1;
    }
  });

  return countCandle;
}
