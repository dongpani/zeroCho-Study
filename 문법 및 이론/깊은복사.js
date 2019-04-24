

let obj = { a : 1, b : {a : 1, b : 2} }
let obj2 = {} // 자료형 복사할 객체

// 깊은 복사
obj2 = JSON.parse(JSON.stringify(obj));

console.log('obj : ', obj.b.a);
console.log('obj2 : ', obj2.b.a);

obj2.b.a = 3;

console.log('값 변경 후 obj : ', obj.b.a);
console.log('값 변경 후 obj2 : ', obj2.b.a);

