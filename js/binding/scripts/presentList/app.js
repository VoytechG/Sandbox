class App {
  constructor(presentContainer, titleContainer) {
    this.presentContainer = presentContainer;
    this.titleContainer = titleContainer;

    this.presents = [];
    this._onPresentOpened = this._onPresentOpened.bind(this);
    this._fillPresentContainer();

    this.openedCount = 0;
  }

  _fillPresentContainer() {
    this.presents = PRESENT_SOURCES.map(source => {
      new Present(this.presentContainer, source, this._onPresentOpened);
    });
  }

  _onPresentOpened() {
    this.openedCount++;
    if (this.openedCount === this.presents.length) {
      this.titleContainer.textContent = "Enjoy your presents!";
    }
  }
}
