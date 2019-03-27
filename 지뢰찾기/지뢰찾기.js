
// 실행 버튼을 눌렀을 때 각 input 태그의 값을 가져옴.
document.querySelector('#exec').addEventListener('click', function() {
    var hor = parseInt(document.querySelector('#hor').value); // 가로
    var ver = parseInt(document.querySelector('#ver').value); // 세로
    var mine = parseInt(document.querySelector('#mine').value);  // 지뢰


    var 후보군 = Array(hor*ver).fill().map(function(요소, 인덱스) {
        return 인덱스 + 1;
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

//    console.log(`her=${hor}, ver=${ver}, mine=${mine}`);

    var dataset = [];

    var tbody = document.querySelector('#table tbody');

    // 세로에 입력한 숫자 만큼 반복.
    // 이차원 배열
    for(var i=0; i < ver; i++) { // 세로 10개
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push[arr];
        // console.log('dataset', dataset);
        for(var j=0; j < hor; j++) { // 가로 10개
            arr.push(1);
            var td = document.createElement('td');
            tr.append(td);
            // td.textContent = 1;
        }
        tbody.appendChild(tr);
    }

    // 지뢰 심기 => 20개
    for(var k=0; k<셔플.length; k++) {
        var 세로 = Math.floor(셔플[k] / 10);
        var 가로 = 셔플[k] % 10;
        console.log(세로, 가로);
        tbody.children[세로].children[가로].textContent = 'X';

        // console.log(dataset[세로][가로]);
    }

    console.log(dataset);
});