const { Vector2, Vector3, Euler } = require("./node_modules/three");

const a = new Vector3(...[1, 1, 1]);
const b = new Vector3(...[3, 5, 7]);

const c = [2, 3, 4] || [0, 0, 0];
console.log(c);

const centerOfTheEdge = a
  .add(b)
  .divideScalar(2)
  .toArray();

console.log(centerOfTheEdge);

const xRotation = Math.atan2(a.z, a.x);
const yRotation = Math.atan2(a.y, new Vector2(a.z, a.x).length());
console.log();
const eulerRotationXYZ = new Euler(xRotation, yRotation, 0)
  .toArray()
  .slice(0, 3)
  .map(angle => (angle * 180) / Math.PI);

console.log(eulerRotationXYZ);
