/**
 * readOnly is a reserved word to mantain the inmutability in an object, class etc.
 */

type Point = {
  x: number
  y: number
}

/**
 * In this way the variable is inmutable, because is declared as const but,
 * the properties could be change them using dot notation.
 */
const point: Point = {
  x: 1,
  y: 1
}

/**
 * With dot notation is possible to reassign a property
 */
point.x = 2

type PointReadOnly = {
  readonly x: number
  readonly y: number
}

const pointReadOnly: PointReadOnly = {
  x: 2,
  y: 2
}

/**
 * The next line throw an error because the property is readonly
 */
//pointReadOnly.x = 4
