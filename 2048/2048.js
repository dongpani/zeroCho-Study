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
    var 빈칸배열 = [];

    데이터.forEach(function(열데이터, i) {
        열데이터.forEach(function(행데이터, j) {
            if(!행데이터) {
                빈칸배열.push([i, j]);
            }
        });
    });

    var 랜덤칸 = 빈칸배열[Math.floor(Math.random() * 빈칸배열.length)];
    데이터[랜덤칸[0]][랜덤칸[1]] = 2;
    그리기();
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