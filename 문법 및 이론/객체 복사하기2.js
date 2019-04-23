// Ojbect.keys 를 사용해 객체 깊은 복사를 해도, 객체 안에 또 객체가 들어가있으면 원시 복사가 안된다.

let obj = { a : 1, b : {a : 1, b : 2} }
let obj2 = {} // 자료형 복사할 객체

// 깊은 복사
Object.keys(obj).forEach(function(key) {
        obj2[key] = obj[key]
});

console.log('obj : ', obj.b['a']);
console.log('obj2 : ', obj2.b['a']);

obj2.b['a'] = 3;

console.log('값 변경 후 obj : ', obj.b['a']);
console.log('값 변경 후 obj2 : ', obj2.b['a']);

