class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName =
      firstName + " " + middleInitial + " " + lastName
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

const greeter = (person: Student) => {
  return "Hello, " + person.fullName;
}

const user = new Student("Ada", "W", "Niya")

console.log(user)

const a: string | number = 'foo';
const b: string | number = 100;

const f1 = (arg: string | number) => {
  if(typeof arg === 'string') {
    console.log("string!!!")
    console.log(arg)
  } else {
    console.log("not string ...")
  }
}

f1(a)
f1(b)

const f2 = (x: string, ...y: number[]) => {
  console.log(x);
  const sum = y.reduce(
      ((acc: number, val: number) => acc + val), 10)
  console.log(sum)
}

f2("hoge", 1, 2, 3)

interface MyFoo {
  method: (x: string) => void;
}

class Foo50 {
  method(x: string): void {
    console.log(x)
  }
}

const foo50: MyFoo = new Foo50();
console.log(foo50.method("heyho"))

interface Foo63<S, T> {
  foo: S,
  bar: T
}

const obj68: Foo63<number, string> = {
  foo: 5,
  bar: "hoge"
}

console.log("---obj68---")
console.log(obj68)

/*--------------------*/

function func76<T>(x: T): void {
  console.log("type of x is " + typeof x)
  console.log("x is " + x)
}

/*--------------------*/

const func87 = <S>(x: S): void => {
  console.log("type of x is " + typeof x)
  console.log("x is " + x)
}

func87<string>("100")
