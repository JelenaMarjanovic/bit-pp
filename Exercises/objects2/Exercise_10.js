"use strict";

// Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

function Point(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.getData = function() {
        return "(" + this.x + ", " + this.y + ", " + this.z + ")";
    }
}

// Write a function that calculates the distance between two points in the space.

function distanceBetweenPoints(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) + Math.pow(p1.z - p2.z, 2));
}

var point1 = new Point(3, 5, 1);
var point2 = new Point(2, 1, 4);

console.log(distanceBetweenPoints(point1, point2));