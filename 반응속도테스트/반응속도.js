var 스크린 = document.querySelector('#screen');

var 시작시간;
var 끝시간;
var 기록 = [];
var 타임;

스크린.addEventListener('click', function(e) {

    // 현지 시작전이라면 대기상태로 변경
    if(스크린.classList.contains('waiting')) {
        스크린.classList.remove('waiting');
        스크린.classList.add('ready');
        스크린.textContent = '초록색이 되면 클릭하세요.';

        타임 = setTimeout(function() {
            시작시간 = new Date();
            스크린.click();
        }, Math.floor(Math.random() * 1000) + 2000);
            

    } else if(스크린.classList.contains('ready')) {

        if(!시작시간) {
            
            clearTimeout(타임);

            스크린.classList.remove('ready');
            스크린.classList.add('waiting');
            스크린.textContent = '부정 클릭입니다. 다시 시작하세요.';
        } else {
            스크린.classList.remove('ready');
            스크린.classList.add('now');
            스크린.textContent = '클릭하세요.';            
        }     

    } else if (스크린.classList.contains('now')) {
        끝시간 = new Date();

        let 시간차이 = 끝시간-시작시간;
        기록.push(시간차이);

        스크린.classList.remove('now');
        스크린.classList.add('waiting');
        스크린.textContent = '클릭해서 시작하세요';

        시작시간 = '';

    }
}); 