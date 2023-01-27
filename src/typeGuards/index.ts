/**
 * This function calculate the area for the different shapes comparing the variables
 * presents in the variable shape. We can improve this code using a variable inside the
 * shapes, like kind, to validate the kind of shapes or, we can use TypeGuards.
 * @param shape geometric shape
 * @returns
 */
function area2(shape: Shape) {
  if ('size' in shape) {
    return shape.size * shape.size
  } else if ('width' in shape) {
    return shape.width * shape.height
  } else if ('radius' in shape) {
    return shape.radius * shape.radius * Math.PI
  }
  /**
   * This variable is useful to ensure that all validation with the different
   * shapes is applied.
   * If any of the conditions are true, the validation will be a value that never happen,
   * for that reason, if any of the different shapes is not included in the validation
   * the compiler will return an error.
   */
  const _ensure: never = shape
  return _ensure
}

/**
 * Type guards are functions that return a boolean, and are annotaded as
 * value is Type.
 * If the function returns true means, shape is Square.
 * @param shape geometric shape
 * @returns
 */
function isSquare(shape: Shape): shape is Square {
  return 'size' in shape
}
function isRectangle(shape: Shape): shape is Rectangle {
  return 'width' in shape
}
function isCircle(shape: Shape): shape is Circle {
  return 'radius' in shape
}

function areaUsingTypeGuard(shape: Shape) {
  if (isSquare(shape)) {
    return shape.size * shape.size
  } else if (isRectangle(shape)) {
    return shape.width * shape.height
  } else if (isCircle(shape)) {
    return shape.radius * shape.radius * Math.PI
  }
}
