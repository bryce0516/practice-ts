// import {testMakePerson} from './utils/makePerson'



let Max_AGE= 100

interface IPerson {
  name: string
  age?: number
}

class Person implements IPerson {
  constructor(public name: string, public age: number){

  }
}

function makeRandomNumber(max:number = Max_AGE):number {
  return Math.ceil((Math.random()*max))
}

const makePerson = (name: string, age:number = makeRandomNumber()) => ({name, age})

const testMakePerson = (): void => {
  let jane: IPerson = makePerson('Jane')
  let jack: IPerson = makePerson('Jack')
  console.log(jane, jack)
}


class Polygon implements IPerson{
  constructor(public name: string){
    this.name = "polygon"
  }
}

class Square extends Polygon {
  constructor() {
    super()
  }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype)

console.log(Object.getPrototypeOf(Square.prototype) === Square.prototype )
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype)

let newIns = new Square()

console.log(newIns.name)

testMakePerson()