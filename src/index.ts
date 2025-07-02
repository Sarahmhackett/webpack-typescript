import Dog from "./Dog.js";
import ShelterDog from "./ShelterDog.js";
import { add, multiply, divide } from "./utils.js";

const Homer = new Dog("Homer", "Labrador", 5);
Homer.bark();

console.log(add(4, 5));
console.log(multiply(10, 2));
console.log(divide(20, 2));

const Ralph = new ShelterDog("Ralph", "Labrador", 5, "Dogs Trust");
