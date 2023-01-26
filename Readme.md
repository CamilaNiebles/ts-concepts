# Typescript course

Typescript is a strongly typed programming language to build Javascript. With TS the developers can catch errors early.
NodeJs can not execute TS, for that reason, it's necessary to make the tranpilation of the code to JS.

The command `npx tsc --init --rootdir src --outdir dist` inicialize the TS configuration and assign the src dir as the source of the code and the dist dir as the folder to save the javascript code generated after the compiler.
To execute the typescript compiler run `npx tsc`

# Basic concepts, Types

## Primitive types Javascript

- boolean
- number
- string

### Special primitive types

- undefined, the value it's not defined
- null, the value it's not present.
- symbol, to create specific types
- bigint, large numbers.

Also for JS exists different classes to specify another kinds of types:

- RegExp, for regular expressions.
- Array<T>, for arrays.
- Set<T>, for collections.

TS provides tuples, this types allows to define an array with specific types and lenght, example

```javascript
let tuple: [number, string]
tuple = [0, 'zero']
```

Definition of objects is very simple, an object can be defined in this way

```javascript
let center: { x: number, y: number } = {
  x: 0,
  y: 0
}
```

To define a specific type of objects, TS allows to use `type` as an alias to define different kinds of objects like this,

```javascript
type Point = { x: number, y: number }
let center: Point = {
  x: 0,
  y: 0
}
```

### **Generics**

A big challenge on software engineering is building components reusables. The function `identityNumber` described below is useful just to make echo by numbers but if the echo is for a string, doesn't work and we will have to define a new function like `identityString`. In this way, the principle DRY _(Don't repeat yourself)_ it's not applied. To avoid repeat code, generics being able to create a component that can work over a variety of types rather than a single one.

```javascript
function identityNumber(arg: number): number {
  return arg
}
```

Function using generics

```typescript
function identity<Type>(arg: Type): Type {
  return arg
}
const message = identity<string>('hellow')

console.log(message)
```

**Difference between any and generic**, the function `identity` can be define with `any` instead `Type` however, we actually are losing information about what type was when the function returns. If we passed a number the only information that we have is that any type could be returned by the function.

### **Any and unknown**

Both types are super types in TS, `any` basically is a escape hatch of typed with any you can do everything you think with the variable like this,

```typescript
let anyValue: any
anyValue.toUpperCase()
anyValue.messages.hey(':)')
```

With `any`, TS allows to make any assumptions about the variable. Instead `unknown` allows to assign anything to the variable but can not make any assumptions about the variable. Very useful to prevent accidentally accessing non-existent properties.

```typescript
let unknownValue: unknown
//Error in TS
unknownValue.toUpperCase()
//Error in TS
unknownValue.messages.hey(':)')
```

Aditional any type can be assigned to an unknown variable futhermore, unknown can not be assigned to any type i.e if we have a variable boolean we can not assign it an unknown value without a previous validation as the example below.

```typescript
let unknownValue: unknown

if (typeof unknownValue == 'boolean') {
  let booleanValue: boolean = unknownValue
}
```

### **Typescript assertions**

```typescript
const hello = load()
const trimmed = hello.trim()
```

The code above throws a compilation error because the function load is annotated to return an unknown value. However, we can avoid this error by telling TS that hello is a string, using the key word reserved `as` like this:

```typescript
const hello = load()
const trimmed = (hello as string).trim()
```

### **Typescript casting**

Casting as in another programming language is cast a variable type to another one. The assertions are not the right way to do it because if you have a code as below, in the `console.lot()` statement you will get a false in the runtime. That's because the type of the variable is different than number.

```typescript
let leet
leet = '1337'
const number = leet as number
console.log(number === 1337) //false
```

To cast a string to number is common use the symbol `+` like this

```typescript
let leet
leet = '1337'
const number = +leet
console.log(number === 1337) //true
```

### **Intersection types**

```typescript
type Point2D = {
  x: number
  y: number
}
type Point3D = {
  x: number
  y: number
  z: number
}
```

In the code above, the type `Point3D` has all the properties for `Point2D` plus one more, to avoid repeated code, TS allows to create `Point3D` using `Point2D` like this,

```typescript
type Point2D = {
  x: number
  y: number
}
type Point3D = Point2D & {
  z: number
}
```

### **Non null assertion**

```typescript
type Point = {
  x: number
  y: number
}
let point: Point
function initialize() {
  point = { x: 0, y: 0 }
}
initialize()
console.log(point.x, point.y)
```

The code above throws a compilation error because, TS can not infer the initialization for the variable point however, using the Non null assertion operator is possible to avoid the error, the code will be like this,

```typescript
type Point = {
  x: number
  y: number
}
let point: Point
function initialize() {
  point = { x: 0, y: 0 }
}
initialize()
console.log(point!.x, point!.y)
```

Also to avoid compile errors we can use the operator like in the code below. There, the error compilation will not apper however, if the variable is null, **we will get an error in the runtime**.

```typescript
return text!.concat(text!)
```

# Intermediate concepts

## Lexical context

First, basic concepts about JS execution.
All scripts in JS when they are executed the JS engine creates a **global execution environment**. This environment is stored as the `[[GlobalEnv]]` in the **realm** record, **realm record** store information about states, resource, etc. **Global execution environment** represents the overaching environment where the script will be executed. Additional, the JS engine instantiates the **call stack**, it's a **Last in First out** data structured, used to keep track running functions or processes. The first function pushed onto the call stack is `Global()` to set the `Global env`

```typescript
let group: string = 'Avengers'
function assemble(group: string) {
  return `${group} assemble!`
}
let phrase: string = assemble(group)
```

In the code above, when the engine hoist the variables, send to the memory the variables `group` `assemble` `phrase`, the last one will be initialized as undefined because, the function `assemble` has not be executed. After this process, JS engine proceeds to determine the value for `phrase` In doing so, it pushes the call to assemble() onto the global call stack, generating a **lexical execution environment** this one, is a new or local environment created within the global context.
**Lexical execution environment** is an object consisting of two parts,

- **Outer environment reference** it's a refence to the parent environment in which the lexical one was generated. In this case will be the global and for global, it's null.
- **environment record** it's an identifier (object), representing the **variable environment**. The **variable environment** is a representation of the lexical environment's local memory. The lexical environment stores variables as well as other information such as the famous **this**. The variable environment stores those variables defined on the scope of the function i.e defined within the given working code block.

## Strict Mode

In the file `tsconfig.json` is declared all the configurations for TS in the project. `strict mode` is configured there, with this configuration many properties for TS are applied in the project.

```typescript
function add(first, second) {
  return second + first
}
```

The syntax above is possible only with `strict:false` otherwise, the code has to be defined like this, here the `implict any` can be used. All the data must have their annotation.

```typescript
function add(first: number, second: number) {
  return second + first
}
```

In classes the strict mode avoid the declaration of properties without an initialization, the code below throws compilation errors by the properties declaration.

```typescript
class Point {
  x: number
  y: number

  move(x, y) {
    this.x += x
    this.y += y
  }
}
```

The correct way to define the class in strict mode will be,

```typescript
class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  move(x, y) {
    this.x += x
    this.y += y
  }
}
```
