/**
 * Function that will return back whatever is passed in.
 * With this typed function we know the type of the return and the type expected
 * by the function.
 * @param arg param to make echo
 * @returns
 */
function identityNumber(arg: number): number {
  return arg
}

console.log(identityNumber(5))

/**
 * The function above works just with numbers, but if the type of the argument is
 * unknown is necessary use another kind of definition in the function
 */

function identity<Type>(arg: Type): Type {
  return arg
}

console.log(identity<string>('hellow'))
