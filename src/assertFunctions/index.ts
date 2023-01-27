type Code = {
  urlRepository: string
  language: 'Typescript' | 'Javascript' | 'Kotlin' | 'Java'
}

function assert(condition: unknown, message: string) {
  if (!condition) throw new Error(message)
}

const javaRepository: Code = {
  urlRepository: 'https://fakeJavaRepository.com',
  language: 'Java'
}
const kotlinRepository: Code = {
  urlRepository: 'https://fakeKotlinRepository.com',
  language: 'Kotlin'
}
const javascriptRepository: Code = {
  urlRepository: 'https://fakeJavascriptRepository.com',
  language: 'Javascript'
}
const typescriptRepository: Code = {
  urlRepository: 'https://fakeTypescriptRepository.com',
  language: 'Typescript'
}

const randomRequest = [
  null,
  javaRepository,
  kotlinRepository,
  null,
  null,
  null,
  javascriptRepository,
  null,
  typescriptRepository,
  null,
  null
]

function getCode() {
  return randomRequest[Math.floor(Math.random() * randomRequest.length)]
}

const code = getCode()
assert(code != null, 'Could not load code')

/**
 * TS can not get the assert function execution as an enought validation of the
 * variable code. For that reason if the function assert doesn't specify the assertion,
 * The code below throws an error.
 */
// console.log('Language code', code.language)

/**
 * In the other hand if the function has the annotation asserts parameter, in this case condition.
 *
 * @param condition
 * @param message
 */
function assertFunction(
  condition: unknown,
  message: string
): asserts condition {
  if (!condition) throw new Error(message)
}

/**
 * The annotation asserts specify the value only will be return if it's an
 * instance of Date
 * @param value
 * @returns
 */
function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) return
  else throw new TypeError('Value is not a date')
}

const code2 = getCode()
assertFunction(code2 != null, 'Could not load code')
console.log('Language code', code2.language)
