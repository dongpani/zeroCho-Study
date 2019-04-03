
var dataset = [];
var tbody = document.querySelector('#table tbody');

// 실행 버튼을 눌렀을 때 각 input 태그의 값을 가져옴.
document.querySelector('#exec').addEventListener('click', function() {

// 화면, 데이터 초기화    
tbody.innerHTML = '';
dataset = [];

    var hor = parseInt(document.querySelector('#hor').value);    // 가로
    var ver = parseInt(document.querySelector('#ver').value);    // 세로
    var mine = parseInt(document.querySelector('#mine').value);  // 지뢰

    // console.log(`her=${hor}, ver=${ver}, mine=${mine}`);

    var 후보군 = Array(hor*ver).fill().map(function(요소, 인덱스) {
        return 인덱스;
    });

    console.log('후보군', 후보군);
    
    // 셔플이라는 변수에 배열을 선언해
    var 셔플 = [];
    
    // 반복문을 돌건데 후보군이 0 보다 클 때니까 무조건 도는 것이야.
    // 강제로 끊어주지 않으면 크롬 마비됨.
     while(후보군.length > 80) {
        var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
        셔플.push(이동값);
    }

    console.log('셔플', 셔플);

    for(var i=0; i < ver; i++) { // 세로 10개
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for(var j=0; j<hor; j++) { // 가로 10개
            arr.push(1);
            var td = document.createElement('td');
            // 마우스 오른쪽 버튼을 클릭했을 때
            td.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = 부모tr.parentNode;
                // var 부모tbody = e.currentTarget.parentNode.parentNode;
                console.log('부모tr=', 부모tr, '부모tbody', 부모tbody);

                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);

                console.log('줄칸', dataset[줄][칸]);
                
                // console.log(칸, 줄);
                if(e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X') {
                    e.currentTarget.textContent ='!';
                } else if(e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = '?';
                } else if(e.currentTarget.textContent === '?') {
                    if (dataset[줄][칸] === 'X') {
                        e.currentTarget.textContent = 'X';
                    } else {
                        e.currentTarget.textContent = '';
                    }
                }
            });

            td.addEventListener('click', function(e) {
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);

                // 클릭한 칸에 배경색 변경 추가
                e.currentTarget.classList.add('opened');
                
                if(dataset[줄][칸] === 'X') {
                    e.currentTarget.textContent = '펑';
                } else {
                    // 둘러싼 지뢰찾기 : 8개
                    var 주변 = [
                                dataset[줄][칸-1], dataset[줄][칸+1] // 왼쪽, 오른쪽
                               ];

                    if(dataset[줄-1]) {  // 위에 왼쪽, 바로 위쪽, 위에 오른쪽
                        console.log('위');
                        주변 = 주변.concat(dataset[줄-1][칸-1], dataset[줄-1][칸], dataset[줄-1][칸+1]);
                    }
                    
                    if(dataset[줄+1]) {  // 밑에 왼쪽, 바로 밑쪽, 밑에 오른쪽
                        주변 = 주변.concat(dataset[줄+1][칸-1], dataset[줄+1][칸], dataset[줄+1][칸+1]);
                    }

                    var 주변지뢰개수 = 주변.filter(function(v) {
                                           return v === 'X'; 
                                      }).length;

                    // console.log('주변칸', 주변칸);
                    e.currentTarget.textContent = 주변지뢰개수;

                    // 주변에 지뢰가 없으면 한번에 오픈
                    if(주변지뢰개수 === 0) {
                        console.log('칸이 읎다.');
                    }

                }
            });
            tr.append(td);
            // td.textContent = 1;
        }
        tbody.appendChild(tr);
    }

    // 지뢰심기 
    for(var k=0; k<셔플.length; k++) {
        var 세로 = Math.floor(셔플[k] / 10);
        var 가로 = 셔플[k] % 10;

        console.log('세로', 세로, '가로', 가로);
        tbody.children[세로].children[가로].textContent = 'X';
        dataset[세로][가로] = 'X';
    }
    console.log(dataset);
});