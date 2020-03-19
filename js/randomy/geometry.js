const applyTranslationAndRotationToPoints = (
  collectiblesPositionsArray,
  { offsetX, offsetZ, offsetYRotation }
) => {
  const rotationAngleInRadians = (Math.PI * offsetYRotation) / 180;

  console.log(rotationAngleInRadians);

  return collectiblesPositionsArray.map(([collectibleX, collectibleZ]) => {
    const x = collectibleX - offsetX;
    const z = collectibleZ - offsetZ;

    const nx =
      x * Math.cos(rotationAngleInRadians) -
      z * Math.sin(rotationAngleInRadians);
    const nz =
      x * Math.sin(rotationAngleInRadians) +
      z * Math.cos(rotationAngleInRadians);

    return [nx, nz];
  });
};

const test = () => {
  const a = applyTranslationAndRotationToPoints(
    [
      [1, 0],
      [1, 3]
    ],
    {
      offsetX: 0,
      offsetZ: 0,
      offsetYRotation: 90
    }
  );
  console.log(JSON.stringify(a));
};

test();
