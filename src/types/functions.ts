/**
 * TS allows define arrow function in this way
 */
let add: (a: number, b: number) => number

add = function (x: number, y: number): number {
  return x + y
}

/**
 * Duck typing, looks like a duck, quacks like a duck but mustn't be a duck
 */

type Point2D = { x: number; y: number }
type Point3D = { x: number; y: number; z: number }
const point2D: Point2D = { x: 10, y: 10 }
const point3D: Point3D = { x: 10, y: 10, z: 10 }
function takesPoint2D(point: Point2D) {
  console.log(point)
}
/**
 * This works because in TS extra info is ok so, point3D variable has the enough
 * information to has the same behavior than point2D variable. Achieving the Duck typing.
 */
takesPoint2D(point3D)
