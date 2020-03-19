function displayMousePos(event) {
  const mousePos = {
    x: event.offsetX,
    y: event.offsetY
  };
  const el = event.target || event.srcElement;

  console.log(event);
  // console.log({
  //   x: ((event.offsetX / el.offsetWidth) * 100).toFixed(2),
  //   y: ((event.offsetY / el.offsetHeight) * 100).toFixed(2)
  // });
  // console.log(mousePos);
}

class Polygon {
  constructor(element) {
    this.element = element;
    this.colors = ["blue", "green", "yellow"];
    // this.positions = [
    //   "40% 40%, 70% 60%, 60% 40%",
    //   "50% 20%, 50% 70%, 30% 20%",
    //   "60% 30%, 40% 80%, 10% 30%"
    // ];
    this.positions = [
      "40% 40%, 70% 60%, 60% 40%",
      "50% 20%, 50% 70%, 30% 20%",
      "60% 30%, 40% 80%, 10% 30%"
    ];
    this.currentSetting = 0;

    this.element.style.backgroundColor = this.colors[0];
    this.element.style["-webkit-clip-path"] = `polygon(${this.positions[0]})`;

    this._changeToNextColor = this._changeToNextColor.bind(this);
    this.element.addEventListener("click", this._changeToNextColor);
  }

  _changeToNextColor() {
    this.currentSetting = (this.currentSetting + 1) % this.colors.length;
    this.element.style["backgroundColor"] = this.colors[this.currentSetting];
    this.element.style["-webkit-clip-path"] = `polygon(${
      this.positions[this.currentSetting]
    })`;
  }
}

const p1_el = document.getElementById("p1");
const p1 = new Polygon(p1_el);

const container = document.getElementById("container");
// container.addEventListener("mousemove", displayMousePos);
const myCanvas = new MyCanvas(container);
