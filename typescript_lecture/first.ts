// let a: string = "hello";
// a = 1234;

// const a: number = 5;
// const b: string = "";
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;
// const f: symbol = Symbol.for("abc");
// const g: any = 123;

/*
  1. 함수 타입핑
*/
// function add(x: number | undefined = 0, y: number): number {
//   return x + y;
// }

// add(undefined, 5);

// const add: (x: number, y: number) => number = (x, y) => {
//   return x + y;
// };

// const add = (x: number, y: number): number => {
//   return x + y;
// };

// interface Add {
//   (x: number, y: number): number;
// }

// const add: Add = (x, y) => x + y;

// type Add = (x: number, y: number) => number;
// const add: Add = (x, y) => x + y;

/*
  2. 배열, 객체
*/
// const arr: string[] = ["1", "2"];
// const arr2: Array<number> = [123, 456];
// const arr3: [number, number, string] = [3, 4, "tttt"]; // 튜플: 고정된 타입, 길이
// const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

/*
  3. 기타
    - as
    - !
*/
// let aa = 123;
// aa = "hello" as unknown as number;

// const head: Element | null = document.querySelector("#head");
// if (head instanceof Element) {
//   head.innerHTML = "hello world";
// }
// if (head) {
// head.innerHTML = "hello world";
// }

// const head = document.querySelector("#head")!;

// type World = "world" | "hell";
// type Greeting = `hello ${World}`;

// const c: Greeting = "hello hell";

// let tuple: [string, number] = ["1", 1];
// tuple[2] = 3;  // error
// tuple.push(3);

/*
  4. enum, typeof, keyof
*/

// const enum EDirection {
//   Up = 3,
//   Down = 4,
//   Left = 5,
//   Right = 6,
// }

// const ODirection = {
//   Up: 3,
//   Down: 4,
//   Left: 5,
//   Right: 6,
// } as const;
// type ODirection = (typeof ODirection)[keyof typeof ODirection];

// const a = EDirection.Left; // 4
// const b = ODirection.Left; // 5

// 변수들을 하나의 그룹으로 묶고 싶을 때

// const obj = { a: "123", b: "hello", c: "world" } as const;
// type ObjType = typeof obj;
// type key = keyof typeof obj; // type key = "a" | "b" | "c"
// type key = typeof obj[keyof typeof obj]; // type key = "123" | "hello" | "world"

/*
  5. type. interface
*/

// type A = { a: string };
// const a: A = { a: "3" };

// interface B {a: string;}
// const b: B = {a: "3"};

//간단하게 사용하고 싶으면 type, interface는 자바의 객체지향 기능들을 지원한다.

/*
  6. union, intersection
*/

// function add(x: string | number, y: string | number): string | number {
//   if (typeof x === "string" && typeof y === "string") {
//     return x + y;
//   } else if (typeof x === "number" && typeof y === "number") {
//     return x + y;
//   }

//   throw new Error("Parameters must be both strings or both numbers");
// }

// add(1, "2");

// 모든 속성이 다 있어야 한다.
// type A = { hello: "world" } & { zero: "cho" };
// const a: A = { hello: "world", zero: "cho" };

// 하나만 있어도 된다.
// type B = { hello: "world" } | { zero: "cho" };
// const b: B = { hello: "world", zero: "cho" };

// type Animal = { breath: true };
// type Mammal = Animal & { breed: true };
// type Human = Mammal & { think: true };

// 상속의 개념
// const hongGilDong: Human = { breath: true, breed: true, think: true };

// type A = string | number;
// type B = string;
// type C = string & number;

// function CK(): void {
//   return undefined;
// }

// const b = CK();

// function forEach(arr: number[], callback: (el: number) => undefined): void;

// interface A {
//   talk: () => void;
// }
// const a: A = {
//   talk() {
//     return 3;
//   },
// };

// const b: void
// const ab = a.talk();

// const b: number
// const b = a.talk() as unknown as number;

/*
  7. any, unknown
*/

//any은 타입 선언을 포기하기 때문에 더이상 오류가 발생하지 않음
// const b: any = a.talk();
// b.method();

//unknown을 선언하면 타입을 직접 지정해줘야 한다. 지금 당장 타입을 모를 때 사용
// const c: unknown = a.talk();
// (c as A).talk();

// try {
// } catch (error) {
//   (error as Error).message;
// }

/*
  8. 타입가드
*/

// function numOrStr(a: number | string) {
//   if (typeof a === "string") {
//     return a.split(",");
//   }
//   if (typeof a === "number") {
//     a.toFixed(1);
//   }
// }
// numOrStr("123");
// numOrStr(1);

// function numOrNumArray(a: number | number[]) {
//   // number[]
//   if (Array.isArray(a)) {
//     a.concat(4);
//     // number
//   } else {
//     a.toFixed(3);
//   }
// }

// numOrNumArray(123);
// numOrNumArray([1, 2, 3]);

// class A {
//   aaa() {}
// }

// class B {
//   bbb() {}
// }

// function aOrB(param: A | B) {
//   if (param instanceof A) {
//     param.aaa();
//   } else {
//     param.bbb();
//   }
// }

// type bB = {type: 'b', bbb : string};
// type cC = {type: 'c', ccc : string};
// type dD = {type: 'd', ddd : string};

// function typeCheck (param: bB|cC|dD){
//   if('bbb' in param){
//     param.type;
//   }else if('ccc' in param){
//     param.type
//   }else{
//     param.type
//   }
// }

/*
  9. is : 타입을 구분해주는 커스텀 함수
*/

// interface Cat {
//   meow: number;
// }
// interface Dog {
//   bow: number;
// }

// function catOrDog(a: Cat | Dog): a is Dog {
//   if ((a as Cat).meow) return false;
//   return true;
// }

// const cat: Cat | Dog = { meow: 3 };

// if (catOrDog(cat)) {
//   console.log(cat.meow);
// }

// if ("meow" in cat) {
//   console.log(cat.meow);
// }

/*
  10. readOnly
 */

// interface A {
//   readonly a: string;
//   b: string;
// }

// const aaaa: A = { a: "hello", b: "world" };
// aaaa.a = "123"; // 변경 불가

// type B = { [key: string]: string };
// const b: B = { "1": "123" };

/*
  11. 클래스의 새로운 기능들
*/

// class A {
//   a: string;
//   b: number;

//   constructor(a: string, b: number = 123) {
//     (this.a = "123"), (this.b = 123);
//   }

//   method() {}
// }

// const a = new A("123");

// type Aa = A;

/*
  12. 옵셔널, 제네릭
*/

// function add(x:string |number, y:string | number) : string |number {return x+y}

// function add(x: string, y: string): string {
//   return x + y;
// }

// function add(x: number, y: number): number {
//   return x + y;
// }

// 함수를 두 번 선언했기 때문에 에러가 발생

// function add<T extends string | number>(x: T, y: T): T {
//   return x + y;
// }

// add(1, 2);

// function extendsSample<T extends { a: string }>(x: T) {
//   return T;
// }

// extendsSample({ a: "1" });

// function extendsSample2<T extends any[]>(x: T) {
//   return T;
// }

// extendsSample2(["1", "2", 3]);

// function extendsSample3<T extends (...args: any) => any>(x: T) {
//   return T;
// }

// extendsSample3((x)=>console.log(x));

// function extendsSample4<T extends abstract new (...args: any) => any>(x: T) {
//   return T;
// }

// class A {}
// extendsSample4(A);

// 제네릭 타입 제한 방법
// <T extends {...}>
// <T extends any[]>
// <T extends (...args: any) => any>
// <T extends abstract new (...args: any) => any>

/*
  13. 함수 분석
*/

// interface Array<T> {
//   forEach(
//     callbackfn: (value: T, index: number, array: T[]) => void,
//     thisArg?: any
//   ): void;
//   map<U>(
//     callbackfn: (value: T, index: number, array: T[]) => U,
//     thisArg?: any
//   ): U[];
//   filter<S extends T>(
//     predicate: (value: T, index: number, array: T[]) => value is S,
//     thisArg?: any
//   ): S[];
//   filter(
//     predicate: (value: T, index: number, array: T[]) => unknown,
//     thisArg?: any
//   ): T[];
// }

// const a: Array<number> = [1, 2, 3];
// a.forEach((value) => {
//   console.log(value);
// });

// [1, 2, 3].forEach((item) => {
//   console.log(item);
// });

// ["1", "2", "3"].forEach((item) => {
//   console.log(item);
// });

// const filtered = ["1", 2, "3", 4, "5"].filter(
//   (value) => typeof value === "number"
// );

// interface Arr<T> {
//   forEach(callback: (item: T, index: number) => void): void;
//   map<S>(callback: (v: T, index: number) => S): S[];
//   filter<S extends T>(callback: (v: T) => v is S): S[];
// }

// const a: Arr<number> = [1, 2, 3];
// a.forEach((list, index) => {
//   console.log(list);
// });

// const b: Arr<string> = ["1", "2", "3"];
// b.forEach((list) => {
//   console.log(list);
// });

// const mapA: Arr<number | string> = [1, "2", 3];

// const ca = mapA.map((value) => Number(value) + 1); // [2, 3, 4]
// const cb = mapA.map((value) => value.toString()); // ['2', '3', '4']
// const cc = mapA.map((value, index) => Number(value) % 2 === 0); // [false, true, false]

// const da = mapA.filter((v): v is string => typeof v === "string");
// const predicate = (v: string | number): v is number => typeof v === "number";
// const db = mapA.filter(predicate);

/*
  14. 공변성, 반공변성
*/

// function formattedNumber(x: string | number): number {
//   return +x;
// }

// formattedNumber("1");

// type B = (x: string) => number | string;
// const testFormattedNumber: B = formattedNumber;

/*
  15. Partial, Pick, Omit
*/

interface Profile {
  name: string;
  age: string;
  married: boolean;
}

// value의 타입 얻어오는 방법
type Name = Profile["name"];

type P<T> = {
  [key in keyof T]?: T[key];
};

// [key in keyof T] : T에 있는 키값들만 사용할 수 있다.
// T[key]: value들은 T의 value를 사용할 수 있다.

const oneMan: Profile = {
  name: "철수",
  age: "20",
  married: true,
};

const oneGirl: P<Profile> = {
  name: "철수",
  age: "20",
};

// interface Profile {
//   name?: string;
//   age?: string;
//   married?: boolean;
// }

const twoGirl: Partial<Profile> = {
  name: "철수",
  age: "20",
};

const threeMan: Pick<Profile, "name" | "age"> = {
  name: "철수",
  age: "20",
};

const fourMan: Omit<Profile, "married"> = {
  name: "철수",
  age: "20",
};

type wer<T, S extends keyof T> = {
  [key in S]: T[key];
};

const threeGirl: wer<Profile, "name" | "age"> = {
  name: "철수",
  age: "20",
};

interface Whole {
  bite: boolean
}

interface Total extends Whole {
  meow: boolean
}

const totalData: Total = {
  bite: true,
  meow: false
}
