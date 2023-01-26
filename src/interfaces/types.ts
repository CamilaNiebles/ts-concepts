// *********** Extend properties *****************

/**
 * Add a new property in the same type is not possible, with types
 * it's necessary the union of the properties.
 */
type user = {
  name: string
  age: number
}
/**
 * If I want to add the address property, I can not do it in the same type
 * I have to create a new one and make the union, if the property already exists it's defined
 * as never, since a type can never be both, string and number at the same time.
 */
type userWithAddress = user & {
  age: string
}

// ************ Merge properties *********************

/**
 * This functionality is not possible in types, once you define a type, it's not possible
 * to add a new property outside the first declaration.
 */

type cat = {
  name: string
}
/**
 * The comment code will throws a compile error.
 */
// type cat = {
//     color:string
// }

// ************* Extend for primative *****************

/**
 * In types, we can create an alias for a primative types like this,
 */
type myName = string

// ************* Create unions *****************

/**
 * Types can create unions, interfaces can not.
 */
type userId = string | number
