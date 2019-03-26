
// 실행 버튼을 눌렀을 때 각 input 태그의 값을 가져옴.
document.querySelector('#exec').addEventListener('click', function() {
    var hor = parseInt(document.querySelector('#hor').value); // 가로
    var ver = parseInt(document.querySelector('#ver').value); // 세로
    var mine = parseInt(document.querySelector('#mine').value);  // 지뢰

    console.log(`her=${hor}, ver=${ver}, mine=${mine}`);

    var dataset = [];

    var tbody = document.querySelector('#table tbody');

    // 세로에 입력한 숫자 만큼 반복.
    for(var i=0; i < ver; i++) {
        var arr = [];
        var tr = document.createElement('tr'); //
        dataset.push[arr];        

    }

});