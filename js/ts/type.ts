console.log("Hello");

async function hello(a: string) {
  return a + 'world';
}

hello.log = () => 2;

console.log(hello("hello there"));

