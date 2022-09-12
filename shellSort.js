const handleshellSort = data => {
  let gap =
    data.length % 2 === 0 ? data.length / 2 : Math.round(data.length / 2) - 1;
  let aux = 0;

  console.log(`size current of gap ${gap}`);

  for (let i = 0; i < data.length; i = i + gap) {
    let current = data[i];
    let previous = data[i - gap];

    if (previous > current) {
      data[i] = previous;
      data[i - gap] = current;
      current = data[i];
      previous = data[i - 1];
      aux--;
    }
    if (current > previous) {
      aux++;
    }
    if (gap === 1 && aux === data.length) {
      return;
    }
    if (i >= data.length - 1) {
      gap === 1 ? (gap = 1) : (gap = gap / 2);
      i = 0;
    }
  }
};

const array = [54, 26, 93, 58, 31, 77, 44, 55, 21];
handleshellSort(array);

console.log(array);
