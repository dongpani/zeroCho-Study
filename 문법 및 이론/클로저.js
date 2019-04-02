
// 스코프는 함수 기준으로 정해짐

// 오류나는 코드 => 반복문안에 비동기 함수를 사용할 수 없다.

// for(var i=0; i<100; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i*1000);
// }

// 스코프 문제 해결
for(var i=0; i<100; i++) {
    function 클로저(j) {
        setTimeout(function() {
            console.log(j);
        }, j * 1000);
    }
    클로저(i);
}

// 보통은 이렇게 사용함 -> 즉시 실행 함수
for(var i=0; i<100; i++) {
    (function 클로저(j) {
        setTimeout(function() {
            console.log(j);
        }, j * 1000);
    })(i);
}