class Present {
  constructor(containerElement, presentSrc, onPresentOpenedCallback) {
    this.containerElement = containerElement;
    this.presentSrc = presentSrc;

    // bind,  otherwise this in the callback will refer
    // to the element which to which the callback is attached
    this._onPresentOpened = onPresentOpenedCallback;
    this._openPresent = this._openPresent.bind(this);

    this.image = document.createElement("img");
    this.image.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png";
    this.image.addEventListener("click", this._openPresent);
    this.containerElement.append(this.image);
  }

  _openPresent(event) {
    this.image.src = this.presentSrc;
    this.image.removeEventListener("click", this._openPresent);
    this._onPresentOpened();
  }
}
