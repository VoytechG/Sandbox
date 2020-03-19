const f = (a, b = a[0]) => {
  console.log(a);
  console.log(b);
};

f([1, 2], 3);
