// 객체 자체를 복사하면 참조복사 되므로 객체 안의 값을 바꾸고 싶다면 원시 데이터를 바꿔야한다.

let obj = { a : 1, b : 2}

// 얕은 복사
// let obj2 = obj; 

let obj2 = {}

// 깊은 복사 (중요)
Object.keys(obj).forEach(function(key) {
        obj2[key] = obj[key]
});

console.log('obj', obj);
console.log('obj2', obj2);

obj2.a = 3;

console.log('값 변경 후 obj', obj);
console.log('값 변경 후 obj2', obj2);



