export default class Dog {
  constructor(public name: string, public breed: string, public age: number) {}

  bark() {
    console.log(`${this.name} is barking`);
  }
}
