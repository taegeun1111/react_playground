// let a: string = "hello";
// a = 1234;

const a: number = 5;
const b: string = "";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for("abc");
const g: any = 123;

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
let aa = 123;
aa = "hello" as unknown as number;

const head: Element | null = document.querySelector("#head");
// if (head instanceof Element) {
//   head.innerHTML = "hello world";
// }
if (head) {
  head.innerHTML = "hello world";
}

// const head = document.querySelector("#head")!;
