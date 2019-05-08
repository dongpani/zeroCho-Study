var 테이블 = document.getElementById('table'); 
var 데이터 = [];

// 기본 표 그리기
function 초기화() {

    var fragment = document.createDocumentFragment();
    [1, 2, 3, 4].forEach(function() {
        // console.log('열', 열);
        var 열데이터 = [];
        데이터.push(열데이터);
        var tr = document.createElement('tr');
        [1, 2, 3, 4].forEach(function() {
            열데이터.push(0);
            var td = document.createElement('td');
            tr.appendChild(td);
        });
        fragment.appendChild(tr);
    });
    테이블.appendChild(fragment);
}

function 랜덤생성() {
    var 빈칸배열 = []; // 빈 배열 생성.

    //  console.log(데이터); // [ [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0] ]
    //                               

    데이터.forEach(function(열데이터, i) { // 행
        열데이터.forEach(function(행데이터, j) { // 열
            if(!행데이터) { // 
                빈칸배열.push([i, j]);
            }
        });
    });
    
    var 랜덤칸 = 빈칸배열[Math.floor(Math.random() * 빈칸배열.length)];
    // console.log('랜덤칸', 랜덤칸);

    데이터[랜덤칸[0]][랜덤칸[1]] = 2;
    그리기(); // 그리기 실행
}

function 그리기() {
    데이터.forEach(function(열데이터, i) {
        열데이터.forEach(function(행데이터, j) {
            if(행데이터 > 0) { // 숫자가 0 이 아닐 떄만
                테이블.children[i].children[j].textContent = 행데이터;
            } else {
                테이블.children[i].children[j].textContent = '';
            }
        });
    });
}

초기화();
랜덤생성();
그리기();

var 드래그시작 = false; // 마우스가 클릭할 때만 움직임을 감지하게끔
var 드래그중 = false;
var 시작좌표;
var 끝좌표;

// 마우스를 누를 때
window.addEventListener('mousedown', function(이벤트) {
    드래그시작 = true;
    시작좌표 = [이벤트.clientX, 이벤트.clientY]; // 마우스를 누른 시점에 x, y 좌표를 가져옴.
    // console.log(시작좌표);
});

// 마우스 움직일 때
window.addEventListener('mousemove', function(이벤트) {
    if(드래그시작) {
        드래그중 = true;
    }
    
});

// 마우스를 뗄 때
window.addEventListener('mouseup', function(이벤트) {
    끝좌표 = [이벤트.clientX, 이벤트.clientY]; // 마우스를 땐 시점의 좌표
    x차이 = 끝좌표[0] - 시작좌표[0]; // 끝 x  빼기 시작 x
    y차이 = 끝좌표[1] - 시작좌표[1]; // 끝 y  빼기 시작 y

    console.log('x차이', x차이, 'y차이', y차이) ;


    // Math.abs 함수는 무조건 양수만 반환
    if(드래그중) {
        var 방향;
        if(x차이 < 0 && Math.abs(x차이) / Math.abs(y차이) > 1) {
            방향 = '왼쪽';
        } else if (x차이 > 0 && Math.abs(x차이) / Math.abs(y차이) > 1) {
            방향 = '오른쪽';
        } else if(y차이 > 0 && Math.abs(x차이) / Math.abs(y차이) < 1) {
            방향 = '아래';
        } else if(y차이 < 0 && Math.abs(x차이) / Math.abs(y차이) < 1) {
            방향 = '위';
        }
    }

    드래그시작 = false;
    드래그중 = false;
    
    console.log(방향);

    // 드래그 방향에 따라 숫자 이동하기
    switch (방향) {
        case '왼쪽':
            var 새데이터 = [
                [],
                [],
                [],
                []
            ];
            데이터.forEach(function(열데이터, i) {
                열데이터.forEach(function(행데이터, j) {
                    if(행데이터) {
                        새데이터[i].unshift(행데이터);
                    }
                });
            });
            
            // console.log('새데이터', 새데이터);
            
            // 왼쪽으로 드래그
            [1, 2, 3, 4].forEach(function(행데이터, i) {
                [1, 2, 3, 4].forEach(function(열데이터, j) {
                    데이터[i][j] = 새데이터[i][j] || 0; 
                });
            });

            break;

        case '오른쪽':
            var 새데이터 = [
                [],
                [],
                [],
                []
            ];
            데이터.forEach(function(열데이터, i) {
                열데이터.forEach(function(행데이터, j) {
                    if(행데이터) {
                        새데이터[i].unshift(행데이터);
                    }
                });
            });
            
            // console.log('새데이터', 새데이터);
            
            // 오른쪽으로 드래그
            [1, 2, 3, 4].forEach(function(행데이터, i) {
                [1, 2, 3, 4].forEach(function(열데이터, j) {
                    데이터[i][3-j] = 새데이터[i][j] || 0; 
                });
            });

            break;
        case '위':
            var 새데이터 = [
                [],
                [],
                [],
                []
            ];
           데이터.forEach(function(열데이터, i) {
                열데이터.forEach(function(행데이터, j) {
                    if(행데이터) {
                        새데이터[j].unshift(행데이터);
                    }
                });
            });
            
            console.log('새데이터', 새데이터);
            
            // 맨위로 올림
            [1, 2, 3, 4].forEach(function(행데이터, i) {
                [1, 2, 3, 4].forEach(function(열데이터, j) {
                    데이터[j][i] = 새데이터[i][j] || 0;
                });
            });

            break;
        case '아래':
            var 새데이터 = [
                [],
                [],
                [],
                []
            ];
            데이터.forEach(function(열데이터, i) {
                열데이터.forEach(function(행데이터, j) {
                    if(행데이터) {
                        새데이터[j].unshift(행데이터);
                    }
                });
            });
            
            console.log('새데이터', 새데이터);
            
            // 맨아래로 내림
            [1, 2, 3, 4].forEach(function(행데이터, i) {
                [1, 2, 3, 4].forEach(function(열데이터, j) {
                    데이터[3-j][i] = 새데이터[i][j] || 0; // 값이 없으면 0
                });
            });
            break;
    }

    그리기();
    랜덤생성();

});

