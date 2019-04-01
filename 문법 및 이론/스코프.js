/*

스코프 : 함수의 블럭 단위로 제한

*/

const x = '스타벅스';

const scope = function() {
    var x = '할리스';
    console.log(x);
}

scope();        // 할리스
console.log(x); // 스타벅스
console.log(scope.x); // undefined