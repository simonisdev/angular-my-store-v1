const username: string = 'simonisdev';
const sum = (a: number, b: number) => {
  return a + b;
}

sum(1,2);

class Person {
  // private age: number;
  // lastName: string;

  constructor(private age: number, public lastName: string) {
    // this.age = age;
    // this.lastName = lastName;
  }
}

const simon = new Person(15, 'Agredo');
// simon.age;
