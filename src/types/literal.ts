/**
 * Literal types are useful when it's necessary to specify a group of
 * posible values for a variable.
 */

let direction: 'North' | 'East' | 'South' | 'West'

direction = 'East'

/**
 * Any other values throws a compilation error, like the next line.
 */
//direction = 'Esest';

// *************** Discriminated unions **********************

type Circle = {
  kind: 'circle'
  radius: number
}
type Square = {
  kind: 'square'
  size: number
}
type Rectangle = {
  kind: 'rectangle'
  width: number
  height: number
}

type Shape = Square | Rectangle | Circle

/**
 * This function calculates the area for the different shapes. Important! the property
 * kind have to be present in all different shapes, in this way literal values are assigned
 * to this variable and it's possible to compare and determine which shape is.
 * @param shape which shape do we want to calculate the area
 * @returns
 */
function area(shape: Shape) {
  if (shape.kind === 'circle') {
    return shape.radius * shape.radius
  }
  if (shape.kind === 'rectangle') {
    return (shape.width = shape.height)
  }
  if (shape.kind === 'square') {
    return shape.size * shape.size
  }
}
