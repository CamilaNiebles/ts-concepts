type DomesticAnimal = {
  name: string
  voice(): string
}

/**
 * The keyword reserved implements ensure, if the class implements
 * the type, all the properties defined in the type, has to be
 * implemented in the class.
 */
class Cat implements DomesticAnimal {
  constructor(public name: string) {}
  voice(): string {
    return 'meeeeow'
  }
}
