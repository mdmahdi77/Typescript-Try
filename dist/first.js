"use strict";
let age = 50;
let club = "Barcelona";
const isFamous = true;
age = 60;
club = "Real Madrid";
age = 80;
club = "Manchester City";
function add(num1, num2) {
    return num1 + num2;
}
add(4, 5);
add("ben", "stock");
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let result = fullName("ben", "stock");
let multiply2;
multiply2 = (x, y) => x * y;
const multiply = (x, y) => (x * y);
console.log(multiply(25, 6));
// array er jonno
let numbers = [45, 56, 45, 34, 45];
console.log(numbers.push(33));
const friends = ["abdul", "jeff", "ben", "stock"];
let megaFriend = " ";
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaFriend.length) {
        megaFriend = friend;
    }
}
console.log("largest friend:", megaFriend);
//object er niyom
let player = {
    club: "Barcelona",
    salary: 4555555
};
const messi = {
    club: "Barcelona",
    name: "messi",
    salary: 45000000,
    wife: "some one",
    isPlaying: true
};
const Ronaldo = {
    club: "Juventas",
    name: "Ronaldo",
    salary: 45000000,
    isPlaying: true
};
function getBonus(player, friends) {
    return player.salary * 0.1;
}
const poorPlayer = { age: 30, salary: 4599999 };
getBonus(messi, ["marcos", "hafiz"]);
//clss er iyom
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name;
    }
}
const sam = new Person("samuel", "david");
console.log("name", sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'ben';
//  sam.fatherName = 'ber carsone' //fatheName change hobe na readOnly thakar karone
