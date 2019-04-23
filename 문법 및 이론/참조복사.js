
/**
 * 일반 자료형 참조 복사.
 * 
 */

// string
let 문자 = '나는 문자입니다.';
let 문자복사 = 문자;
console.log('문자 = ', 문자);
console.log('문자복사 = ', 문자복사);

// 값 변경
문자복사 = '문자값을 변경했습니다.';
console.log('문자 = ', 문자);
console.log('문자복사 = ', 문자복사);

// number
let 숫자 = '나는 숫자입니다.';
let 숫자복사 = 숫자;
console.log('숫자 = ', 숫자);
console.log('숫자복사 = ', 숫자복사);

// 값 변경
숫자복사 = '숫자값을 변경했습니다.';
console.log('숫자 = ', 숫자);
console.log('숫자복사 = ', 숫자복사);

// bool (생략)

/**
 * 객체 자료형 참조 복사
 * 
 */

 // 객체 자료형 선언
 let obj = {
     'name':'땅콩',
     'age':'23'
 }

 console.log(obj);
 // 참조복사 시작
let copyObj = obj;
console.log(copyObj);

// 인스턴스에서 값 변경
copyObj.name = '빈'
copyObj.age = 30

console.log(copyObj);
console.log(obj);

