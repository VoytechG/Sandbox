const o = {
  coinHeight: 1.0,
  minDistanceToCollectItem: 0.3,
  obj: { a: 1, b: 2 },
  setObj: (o, toSet) => {
    o.obj = toSet;
  },
  hudMessages: {
    establishingTracking:
      "Please direct the camera towards the floor calibrate the device.",
    trackingLost: `Motion tracking lost :(\nPlease direct the camera towards the floor.`
  },
  setO: (o, valOfObj) => {
    o.setObj(o, valOfObj);
  }
};

console.log(o);
o.setO(o, { a: 3, b: 4 });
console.log(o);


