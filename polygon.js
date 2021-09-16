measurements = [
  [36, 30, 36, 30],
  [15, 15, 15, 15],
  [46, 96, 90, 100],
  [86, 86, 86, 86],
  [100, 200, 100, 200],
  [-100, 200, -100, 200],
];

let square = 0,
  rectangle = 0,
  others = 0;
measurements.forEach((elem) => {
  if (elem[0] == elem[2] && elem[1] && elem[3]) {
    if (elem[0] == elem[1] && elem[2] && elem[3]) {
      square++;
    } else if (!elem.some((val) => val < 1)) rectangle++;
    else others++;
  } else {
    others++;
  }
});

console.log(square, rectangle, others);
