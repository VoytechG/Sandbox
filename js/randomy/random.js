const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const generateId = () => {
  return "" + getRandomInt(10 ** 9) + new Date().getTime();
};

for (let i = 0; i < 10; i++) console.log(generateId());

for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 100);
}
