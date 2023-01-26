// *********** Extend properties *****************

/**
 * Using interfaces, we can apply the syntax used in classes to
 * apply inherance
 */
interface userInterface {
  name: string
  age: number
}

/**
 * This is possible if the property it's not already exists, if exists the
 * compiler throws an error.
 */
interface userInterfaceWithAdress extends userInterface {
  address: string
}

// ************ Merge properties *********************

/**
 * In interfaces, this behavior is completely accepted. We can add properties
 * after the first interface declaration like this,
 */

interface Cat {
  name: string
}

/**
 * Now the interface Cat has both properties, name and color.
 */
interface Cat {
  color: string
}

// ************* Extend for primative *****************

/**
 * Interfaces doesn't allow to create alias for primative types
 * the comment below throws an error.
 */

// interface MyName extends string {

// }
