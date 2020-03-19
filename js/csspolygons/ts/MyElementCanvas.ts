class MyCanvas {
  element: HTMLElement;
  mousePos: Object;
  polygons: Array<Array<Number>>;
  polygonStates: any;
  static polygonStates = ["first vertex", "second vertex", "third vertex"];

  constructor(element: HTMLElement) {
    this.element = element;
    this.mousePos = {
      x: 0,
      y: 0
    };

    this.getMousePos = this.getMousePos.bind(this);
    this.polygonDrawer = this.polygonDrawer.bind(this);

    this.element.addEventListener("mousemove", this.getMousePos);
    this.element.addEventListener("mousedown", this.polygonDrawer);

    // this.polygonStates = ["first vertex", "second vertex", "third vertex"];
  }

  getMousePos(event) {
    this.mousePos = {
      x: event.offsetX,
      y: event.offsetY
    };

    // const element = event.target || event.srcElement;
    // console.log({
    //   x: ((event.offsetX / element.offsetWidth) * 100).toFixed(2),
    //   y: ((event.offsetY / element.offsetHeight) * 100).toFixed(2)
    // });
    console.log(this.mousePos);
  }

  polygonDrawer() {}
}
