
function 함수(매개변수) {
    매개변수.a = 10;
    console.log(매개변수);
}

var 인자 = {a : 5};
함수(인자); // 함수의 매개변수를 객체를 넘김
console.log(인자);

