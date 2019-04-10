var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];
var 턴 = 'X';


/*
배열안에 배열 -> 2차원 배열 및 다차원 배열

var 칸들 = [];

       0             1              2
[ [td, td, td], [td, td, td], [td, td, td] ]

*/

var 비동기콜백 = function(이벤트) {
    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    var 승리 = false;

    // console.log('몇줄', 몇줄, '몇칸', 몇칸);
    // console.log('무엇인가?', 칸들[몇줄][몇칸]);

    // 칸이 비어있으면 X 라고 표시해라.
    if(칸들[몇줄][몇칸].textContent === '') {
        칸들[몇줄][몇칸].textContent = 턴;

        // 가로줄 검사
        if(칸들[몇줄][0].textContent === 턴 && 칸들[몇줄][1].textContent === 턴 && 칸들[몇줄][2].textContent === 턴) {
           승리 = true;
        }

        // 새로줄 검사
        if(칸들[0][몇칸].textContent === 턴 && 칸들[1][몇칸].textContent === 턴 && 칸들[2][몇칸].textContent === 턴) {
            승리 = true;
        }        

        // 대각선 검사 1
        if(칸들[0][0].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][2].textContent === 턴) {
            승리 = true;
        }

        // 대각선 검사 2
        if(칸들[2][0].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[0][2].textContent === 턴) {
            승리 = true;
        }

        // 승리했으면 모든 칸의 textContent 를 값을 초기화 하라.

        if(승리) {
            // console.log( 턴 + ' 님의 승리입니다.');
            alert(턴 + ' 님의 승리입니다.');

            // 턴을 초기화 한다.
            턴 = 'X';

            칸들.forEach(function (줄) {
                줄.forEach(function (칸) {
                    칸.textContent = '';
                });
            });

        } else {
            // 차례가 끝났으면, 다음턴으로 넘긴다.
            (턴 === 'X') ? 턴 = 'O' : 턴 = 'X';

            // 모든 칸을 조회하여 비어있는 칸을 찾는다.
            // 그 칸의 인덱스를 저장한다.
            // 저장한 index 를 랜덤으로 돌린다.
            // 랜덤으로 하나만 뽑아 'O' 를 찍어준다.

        }

    } else { 
        // console.log('빈칸이 아닙니다.');
        alert('빈칸이 아닙니다.');
    }

};

for(var i=1; i<=3; i++) {
    // 3 row 의 tr 태그를 생성한다.
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);

    for(var j=1; j<=3; j++) {
        var 칸 = document.createElement('td');
        칸들[i - 1].push(칸);
        칸.addEventListener('click', 비동기콜백);
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}

바디.appendChild(테이블);

// console.log('칸들', 칸들);