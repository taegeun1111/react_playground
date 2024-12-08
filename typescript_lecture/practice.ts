type onlyTuple = readonly [number, string];

// 타입(type) 정의에는 as const 사용 불가능
// type onlyTuple2 = [number, string] as const;
const readOnlyTuple2 = [1,'2'] as const;


let readOnlyTuple: onlyTuple = [1, "2"];


