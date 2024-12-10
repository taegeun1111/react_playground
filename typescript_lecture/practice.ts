type onlyTuple = readonly [number, string];

// 타입(type) 정의에는 as const 사용 불가능
// type onlyTuple2 = [number, string] as const;
const readOnlyTuple2 = [1, "2"] as const;

let readOnlyTuple: onlyTuple = [1, "2"];

const enum EDirection {
  UP = 1,
  DOWN = 2,
  LEFT = 3,
  RIGHT = 4,
}

const ODircetion = {
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
} as const;

type ODirection = (typeof ODircetion)[keyof typeof ODircetion];

const test1: ODirection = 1;
const test2: EDirection = ODircetion.LEFT;

const typeTest = {
  a: 1,
  b: 2,
  c: 3,
} as const;

type typeData = keyof typeof typeTest;
type test44 = (typeof typeTest)[keyof typeof typeTest];

type rrB = { hello: "world" } | { zero: "cho" };

// type Keys = "A" | "B" | "C";
type StringArray<T> = {
  [Keys in keyof T]: T[Keys];
};

interface TestT {
  D: number;
}

const test: StringArray<TestT> = {
  D: 3,
};
