// Simple Types
// Main primitives = boolean ,number , string
// Less common primitives = bigint , symbol

// Type Assignment 1. Explicit 2.Implicit

//1.Explicit
let myStr:string = "palm";
//name = 25; error
let num:number = 1;
let bool:boolean = true;

let str1:string = "palm";
console.log(str1);
console.log(typeof(str1));

//2.Implicit
let nickname = "palm";

// Special Types = any , unknown , never , undefined , null

let array:unknown = []; //unknown ใช้ใส่ไปก่อน ค่อยมากำหนด type ทีหลังได้
array = {};
//let nev:never = "Palm"; ***ใส่อะไรก็ขึ้น error
let und:undefined = undefined;
let nu:null = null;

//Typecript Arrays

let ary1:number[] = [1,2,3];
ary1.push(10);
console.log("ary1 = ", ary1);

let ary2:any = ["name" ,100];
console.log("ary2 = ", ary2);

let ary3: readonly string[] = ["Palm"];
// ary3.push("Palm2") ***ary3 readonly แก้ไขไม่ได้

//Define our tuple

let Tuple: [number , string , boolean] = [1,"am",true];
let [mynum , mystr , mybool] = Tuple;
console.log("Tuple is = " ,Tuple);
console.log(`[mynum , mystr , mybool] = [${mynum} , ${mystr} , ${mybool}]`);

//Typecript Object Types

const people: {
  name:string,
  age:number,
  department:string,

} = {
  name: "Palm",
  age: 23,
  department: "Full-stack Dev",
}

//Typescript Enums

enum Employee { //enum กำหนดค่าเริ่มต้นให้เอง
  Id,//0
  FirstName,//1
  LastName,//2
  age,//3
  Position,//4
}
console.log(Employee);

enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log("Status = ",StatusCode.Success);

enum MovieLists {
  drama = "Whale",
  sci_fi = "star war",
  comedy = "switch family",
  horror = "the conjuring",
  action = "Ip man",
}
console.log("drama =",MovieLists.drama)

//Type Aliases

type EmpNum = number;
type EmpName = string;

const myAge: EmpNum = 23;

type Age = {
  name: EmpName,
  age: EmpNum,
}

const emp: Age = {
  name: "palm",
  age: 23,
}

//Typescript Interfaces

interface Rectangle {
  height: number,
  width: number,
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const rectangle: ColoredRectangle = {
  height: 20,
  width: 40,
  color: "black"
}

//Union Types

function statusCode(code:string | number ) {
  console.log(`My status Code = ${code}`);
}
statusCode(404);
statusCode("Not Found");

//Functions

function getTime(): number {
  return new Date().getTime();
}

function printHelloWorld(): void {
  console.log("Hello World");
}

function plus(num1:number , num2:number) {
  return num1+num2;
}
console.log(`plus(num1,num2) = `, plus(2,4));

function restparam(a:number , b:number , ...z: number[]) {
  console.log("a = ",a);
  console.log("b = ",b);
  console.log("z = ",z);
  console.log("length of z = ",z.length); 
}
restparam(1,2,3,4,5);

//Typescript Casting คือการ Overwrite type ข้อมูล
//as

let y: unknown = "hello";
let z: unknown = 1;
console.log((<string>y).length);
console.log(<number>z);

//Typescript Classes

class Person {
  private name: string;

  public constructor(name:string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Palm");
console.log(person.getName());

//Typescript Generics

function identity<T>(value: T):T {
  return value;
}
const result = identity<number>(100);
const resultStr = identity<string>("Palm");
console.log(result,typeof(result));
console.log(resultStr,typeof(resultStr))
