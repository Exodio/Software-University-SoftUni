class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {
        return Math.sqrt((point1.x - point2.y) ** 2 + (point1.y - point2.y) ** 2);
    }
}