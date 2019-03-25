/*

foreach 는 배열의 요소에 값이 없을 때 조회되지 않는다.
while 문과 for 문의 사용처는 반복 횟수가 고정됨에 따라 정해진다.
while : 반복문의 횟수가 애매할 때,   for : 반복문의 횟수가 고정일 때
map() 메서드 : 배열에 요소에 1:1 로 매칭시킨다.

*/

// 후보군 배열에 값을 집어 넣어라. ~ 45까지.
// 45개의 빈배열을 만들고, 그 안에 빈값을 채워.
// 다음 그 요소에 순서대로 1 ~ 45 까지 값을 채워주는 것이야.
var 후보군 = Array(45).fill().map(function(요소, 인덱스) {
    return 인덱스 + 1;
});

// 셔플이라는 변수에 배열을 선언해
var 셔플 = [];

// 반복문을 돌건데 후보군이 0 보다 클 때니까 무조건 도는 것이야.
// 강제로 끊어주지 않으면 크롬 마비됨.
 while(후보군.length > 0) {
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
}

var 보너스 = 셔플[셔플.length - 1];

// console.log('보너스', 보너스);

var 당첨숫자들 = 셔플.splice(0, 6).sort(function(c, p) {
    return c-p;
});

// console.log('당첨숫자들', 당첨숫자들);

// 4. 숫자에 따라서 공 색깔을 바꿈.
// 5. 선택자를 querySelector 로 바꿈.

var 콜백공통 = function(숫자) {
    var 공 = document.createElement('div'); // div 태그를 생성
    공.textContent = 당첨숫자들[숫자]; // 숫자 하나씩 div 태그안에 넣음.
    // 공.style.color = 'white';
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center';
    공.style.marginRight = '5px';

    var 색깔용 = 당첨숫자들[숫자];
    console.log('색깔용', 색깔용);
    console.log(typeof 색깔용);

    if(색깔용 <= 10) {
        공.style.backgroundColor = 'red';
    } else if(색깔용 >= 11 && 색깔용 <= 20) {
        공.style.backgroundColor = 'blue';
    } else if(색깔용 >= 21 && 색깔용 <= 30) {
        공.style.backgroundColor = 'green';
    } else {
        공.style.backgroundColor = 'yellow';
    }

    // var lottoId = document.getElementById('로또판'); // html 에서 로또판이라는 id 속성을 가져옴.
    var lottoId = document.querySelector('#로또판');
    lottoId.appendChild(공);  // 로또판 하위 태그로 당첨된 숫자들이 담긴 div 태그를 넣음.      
};


// 1. 당첨 된 숫자들이 1초 간격으로 노출됨.
// 2. 숫자들에 CSS 를 적용. 
setTimeout(function 비동기콜백() { 
    콜백공통(0);
}, 1000);

setTimeout(function 비동기콜백() { 
    콜백공통(1);
}, 2000);

setTimeout(function 비동기콜백() { 
    콜백공통(2);     
}, 3000);

setTimeout(function 비동기콜백() { 
    콜백공통(3);
}, 4000);

setTimeout(function 비동기콜백() { 
    콜백공통(4);
}, 5000);

setTimeout(function 비동기콜백() { 
    콜백공통(5);
}, 6000);

// 3. 콜백함수 날코딩을 공통 함수로 묶음.

// 4. 숫자에 따라서 공 색깔을 바꿈.

// 5. 선택자를 querySelector 로 바꿈.

// 당첨된 숫자들, 6번을 반복
/*
for(i = 0; i < 당첨숫자들.length; i++) {
    var 공 = document.createElement('div'); // div 태그를 생성
    공.textContent = 당첨숫자들[i]; // 숫자 하나씩 div 태그안에 넣음.
    var lottoId = document.getElementById('로또판'); // html 에서 로또판이라는 id 속성을 가져옴.
    lottoId.appendChild(공);  // 로또판 하위 태그로 당첨된 숫자들이 담긴 div 태그를 넣음. 
}
*/

setTimeout(function 비동기콜백() { 
    var 보너스공 = document.createElement('div');
    보너스공.textContent = 보너스;
    보너스공.style.color = 'white';
    보너스공.style.display = 'inline-block';
    보너스공.style.border = '1px solid black';
    보너스공.style.borderRadius = '10px';
    보너스공.style.width = '20px';
    보너스공.style.height = '20px';
    보너스공.style.textAlign = 'center';
    보너스공.style.backgroundColor = 'blue';    
    // var lottoClass = document.getElementsByClassName('보너스')[0];
    var lottoClass = document.querySelector('.보너스');
    lottoClass.appendChild(보너스공);
}, 8000);


/*
var 보너스공 = document.createElement('div');
보너스공.textContent = 보너스;
var lottoClass = document.getElementsByClassName('보너스')[0];
lottoClass.appendChild(보너스공);
*/


