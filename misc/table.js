// var people = [
//   ["John", "Smith"],
//   ["Adam", "Waluyo"],
//   ["Emma", "Watson"],
// ];

// console.table(people);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// var john = new Person("Adam", "Waluyo");
// var rocky = new Person("Rocky", "Balboa");
// var hand = new Person("Hand", "Stark");

// console.table([john, rocky, hand]);

function interface(Ethernet, Name) {
  this.Ethernet = Ethernet;
  this.Name = Name;
}

var one = new interface("#0/e0", "Ether1");
var two = new interface("#1/e1", "Ether2");
var three = new interface("#2/e2", "Ether3");

console.table([one, two, three]);
