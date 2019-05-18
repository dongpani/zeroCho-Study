var tetris = document.querySelector('#tetris');
var blockArr = [
    ['red', true, [
        [1, 1],
        [1, 1],
    ]],
    ['blue', true, [
        [0, 2, 0],
        [2, 2, 2],
    ]],
    ['orange', true, [
        [3, 3, 0],
        [0, 3, 3],
    ]],
    ['skyblue', true, [
        [0, 4, 4],
        [4, 4, 0],
    ]],    
    ['yellowgreen', true, [
        [5, 5, 5],
        [5, 0, 0],
    ]],    
    ['pink', true, [
        [6, 6, 6],
        [0, 0, 6],
    ]],
    ['yellow', true, [
        [7, 7, 7, 7],
    ]],
]

var blockDict = {

    0: ['white', false, [] ],

    // 움직이는 블록들
    1: ['red', true, [
        [1, 1],
        [1, 1],
    ]],
    2: ['blue', true, [
        [0, 1, 0],
        [1, 1, 1],
    ]],
    3: ['orange', true, [
        [1, 1, 0],
        [0, 1, 1],
    ]],
    4: ['skyblue', true, [
        [0, 1, 1],
        [1, 1, 0],
    ]],
    5: ['yellowgreen', true, [
        [1, 1, 1],
        [1, 0, 0],
    ]],
    6: ['pink', true, [
        [1, 1, 1],
        [0, 0, 1],
    ]],
    7: ['yellow', true, [
        [1, 1, 1, 1],
    ]],

    // 고정된 블록들
    10: ['red', false, []],
    20: ['blue', false, []],
    30: ['orange', false, []],
    40: ['skyblue', false, []],
    50: ['yellowgreen', false, []],
    60: ['pink', false, []],
    70: ['yellow', false, []],
}

var tetrisData = [];

// 행 20, 열 10 칸의 테이블을 만든다.
// createDocumentFragment() 는 메모리를 조작
function 칸만들기() { 
    var fragment = document.createDocumentFragment();
    for(var i=0; i < 20; i++) {
        var tr = document.createElement('tr');
        var arr = [];
        tetrisData.push(arr);
        fragment.appendChild(tr);
        for(var j=0; j < 10; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
            arr.push(0);
        }
    }
    tetris.appendChild(fragment);
}

// console.log(tetrisData);

function 화면그리기() {
    tetrisData.forEach(function(tr, i) {
        tr.forEach(function(td, j) {
            tetris.children[i].children[j].className = blockDict[td][0];
        });
    });
}

function 블록생성기() {
    var 블록 = blockArr[Math.floor(Math.random() * 7)][2]; // 아무거나 블록모양을 복사
    console.log(블록);
    블록.forEach(function(tr, i) {
        tr.forEach(function(td, j) {
            tetrisData[i][j] = td;
        });
    });
    
    화면그리기();
}

window.addEventListener('keyup', function(e) {
    console.log(e);

    // 조건이 하나에 변수에 담기는 경우에는 switch 문법이 보기 편하다.
    switch (e.code) {
        case 'ArrowRight' : // 오른쪽 이동
            break;
        case 'ArrowLeft' :  // 왼쪽 이동
            break;            
        case 'ArrowDown' :  // 아래로 이동
            break;
        default :
            break;
    }
});

window.addEventListener('keydown', function(e) {
    console.log(e);

    // 조건이 하나에 변수에 담기는 경우에는 switch 문법이 보기 편하다.
    switch (e.code) {
        case 'Space' :      // 내리기
            break;
        case 'ArrowUp' :    // 방향 전환
            break;
        default :
            break;
    }
});

칸만들기();
블록생성기();