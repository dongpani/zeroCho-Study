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

    console.log('데이터', 데이터);
    
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
var 시작좌표;
var 끝좌표;

// 마우스를 누를 때
window.addEventListener('mousedown', function(이벤트) {
    console.log('mousedown', 이벤트);
    드래그시작 = true;
    시작좌표 = [이벤트.clientX, 이벤트.clientY]; // 마우스를 누른 시점에 x, y 좌표를 가져옴.
    console.log(시작좌표);
});

// 마우스 움직일 때
window.addEventListener('mousemove', function(이벤트) {
    if(드래그시작) {
        console.log('mousemove', 이벤트);
    }
    
});

// 마우스를 뗄 떄
window.addEventListener('mouseup', function(이벤트) {
    console.log('mouseup', 이벤트);
    드래그시작 = false;
    끝좌표 = [이벤트.clientX, 이벤트.clientY]; // 마우스를 땐 시점의 좌표
    console.log(끝좌표);
});

