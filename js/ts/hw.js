const getText = async url => {
  const stream = await fetch(url);
  const text = await stream.text();
  return text;
};

const text = getText("http://localhost:3000");
console.log(text);
