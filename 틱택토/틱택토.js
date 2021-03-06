var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];
var 턴 = 'X';
var 결과체크;
var 결과;


// 가로, 세로, 대각선 검사 함수
결과체크 = function(몇줄, 몇칸, 턴) {
    console.log('몇줄', 몇줄, '몇칸', 몇칸, '턴', 턴);

    var 승리 = false;

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


    if(승리) {
        setTimeout(() => {
            초기화();    
        }, 1000);
    }

    // console.log('칸들', 칸들);

    return 승리;

};

// 승리 하였을 때 데이터 및 텍스트 초기화
var 초기화 = function() {
    칸들.forEach(function (줄) {
        줄.forEach(function (칸) {
            칸.textContent = '';
        });
    });    
};


var 비동기콜백 = function(이벤트) {
    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);

    // console.log('몇줄', 몇줄, '몇칸', 몇칸);
    // console.log('무엇인가?', 칸들[몇줄][몇칸]);

    // 칸이 비어있으면 X 라고 표시해라.
    if(칸들[몇줄][몇칸].textContent === '') {
        칸들[몇줄][몇칸].textContent = 턴;

        // 승리했으면 모든 칸의 textContent 를 값을 초기화 하라.
        결과 = 결과체크(몇줄, 몇칸, 턴);
        // console.log('결과', 결과);


        var 후보칸 = [];

        칸들.forEach(function (줄) {
            줄.forEach(function (칸) {
                후보칸.push(칸);
            });
        });

        // filter 함수는 true 값만 리턴 해 주므로 공백이면 false 를 리턴하므로 앞에 ! 를 붙혀서 true 를 만든다.
        // '', 0, Nan, undefined, null, false
        후보칸 = 후보칸.filter(function(칸) {
                                   return !칸.textContent
                              });     

        if(결과) {
            // console.log( 턴 + ' 님의 승리입니다.');
            alert('나의 승리입니다.');
            // 턴을 초기화 한다.
            턴 = 'X';

        } else if(후보칸.length === 0) {
            alert('무승부 입니다');
            초기화();
        } else {

            // 모든 칸을 조회하여 비어있는 칸을 찾는다. (1초 뒤)
            setTimeout(function() {
              console.log('컴퓨터의 턴입니다.');  


                                    
              선택칸 = 후보칸[Math.floor(Math.random() * 후보칸.length)];

              선택칸.textContent = 'O';

              var 몇줄 = 줄들.indexOf(선택칸.parentNode);
              var 몇칸 = 칸들[몇줄].indexOf(선택칸);

              // console.log('몇줄', 몇줄, '몇칸', 몇칸, '턴', 턴);

              결과 = 결과체크(몇줄, 몇칸, 'O');

              if(결과) {
                alert('컴퓨너의 승리입니다.');
              }

              // 클릭이벤트의 몇줄, 몇칸만 체크함.

              // 컴퓨터가 승리했는지 체크

              // 턴을 넘긴다.
              턴 = 'X';

            }, 1000);

            
            // console.log('ㅇㅇㅇㅇ', 칸들[0][0].textContent);


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