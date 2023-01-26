/**
 * Classes are supported in JS, TS allows the typed of the variables and methods.
 * The target version used in the tsconfig file it's very important because, not all EcmaScript
 * versions support classes and, if the classes are not supported the result after the transpilation
 * it's a code with the right functionality but different syntaxis.
 * Some features are not supported in old ECS versions.
 */

class Animal {
  /**
   * If the variable is created as protected, access outside the class is a compile error but,
   * access by hierachy is possible.
   */
  protected name: string

  constructor(name: string) {
    this.name = name
  }

  move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m`)
  }
}
const cat = new Animal('Michi')
cat.move(10)

class Dog extends Animal {
  bark() {
    console.log(`guaaaf, ${this.name} is barking`)
  }
}

// **************** Parameters properties ******************

/**
 * This class is defined in a traditional way. Here, the properties are assigned
 * in the constructor with the information sent to the instance.
 */
class Person {
  public name: string
  public age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

/**
 * Here new functionality of TS. This syntax is equivalent to the
 * class above.
 */
class PersonNew {
  constructor(public name: string, public age: number) {}
}
