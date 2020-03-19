let ob1 = { o: "1" },
  ob2 = { o: "2" };

let a = { a: ob1, b: "5" };

console.log(a);

ob1 = { ...ob1, o: "12" };

let b = { a: ob1, b: "7" };
console.log(a, b);
console.log({ ...ob1 });
