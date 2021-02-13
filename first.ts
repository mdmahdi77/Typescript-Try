let age: number = 50;
let club: string = "Barcelona";
const isFamous: boolean = true;


age = 60;
club = "Real Madrid"

age = 80;
club = "Manchester City"

function add(num1: any, num2: number | string){
    return num1 + num2
}
add(4, 5)
add("ben", "stock")


function fullName (firstName: string, lastName: string): string{
    return firstName + " " + lastName
}
let result = fullName("ben", "stock")



let multiply2: (x: number, y: number) => number

multiply2 = (x, y) => x * y

const multiply = (x: number, y:number): number => (x * y);
console.log(multiply(25, 6));


// array er jonno

let numbers: number[] = [45, 56, 45, 34, 45];
console.log(numbers.push(33))

const friends: string[] = ["abdul", "jeff", "ben", "stock"]
let megaFriend: string = " ";
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if(friend.length > megaFriend.length){
        megaFriend = friend
    }
}

console.log("largest friend:", megaFriend)

//object er niyom

let player: {
    club: string,
    salary: number
} = {
    club : "Barcelona",
    salary: 4555555
}



interface Player {
    club: string,
    name: string,
    salary: number,
    wife?: string,   // question deyyar karon hocce j wife thakteu pare na thakteu pare
    isPlaying: boolean
}

const messi: Player = {
    club: "Barcelona",
    name: "messi",
    salary: 45000000,
    wife: "some one",
    isPlaying: true
}
const Ronaldo: Player = {
    club: "Juventas",
    name: "Ronaldo",
    salary: 45000000,
    isPlaying: true
}


function getBonus (player: Player, friends: string[]){
    return player.salary * 0.1;
}
 const poorPlayer = {age: 30, salary: 4599999}

 getBonus(messi, ["marcos", "hafiz"])

//clss er iyom
 class Person {
     name: string;
     private _partner: string;
     readonly fatherName: string;   // readonly thakle name change kora jabe na
     constructor(name: string, father: string){
         this.name = name;
         this._partner = name;
         this.fatherName = father
     }
     getName(): string{
         return this.name
     }
 }

 const sam = new Person ("samuel", "david");
 console.log("name", sam.name, sam.fatherName);
 const samName: string = sam.getName();
 sam.name = 'ben'
//  sam.fatherName = 'ber carsone' //fatheName change hobe na readOnly thakar karone