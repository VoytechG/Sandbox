class Triangle {
    constructor(xs, ys) {
        this.xs = xs;
        this.ys = ys;
    }
    /**
     * formats triangles coordinates into css polygon
     * e.g. srting: polygon(4em 4em, 7em 6em, 6em 4em)
     * @returns css polygon string
     */
    toCSSPolygon() {
        let polygonCSS = "polygon(";
        for (let i = 0; i < this.xs.length; i++) {
            const [x, y] = [this.xs[i], this.ys[i]];
            polygonCSS += `${x}em ${y}em`;
            if (i < this.xs.length - 1)
                polygonCSS += ", ";
        }
        return polygonCSS + ")";
    }
}
const a = new Triangle([1, 5, 3], [3, 4, 5]);
a.toCSSPolygon();
