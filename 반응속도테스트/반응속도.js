var 스크린 = document.querySelector('#screen');

스크린.addEventListener('click', function(e) {
    var 시작시간;

    // 현지 시작전이라면 대기상태로 변경
    if(스크린.classList.contains('waiting')) {
        스크린.classList.remove('waiting');
        스크린.classList.add('ready');
        스크린.textContent = '초록색이 되면 클릭하세요.';

        // 비동기 잖아..
        setTimeout(function() {
            시작시간 = new Date();
            스크린.click();
        }, Math.floor(Math.random() * 1000) + 2000);

    } else if(스크린.classList.contains('ready')) {
        스크린.classList.remove('ready');
        스크린.classList.add('now');
        스크린.textContent = '클릭하세요.';
    } else if (스크린.classList.contains('now')) {
        var 끝시간 = new Date();

        console.log('시작시간', 시작시간, '끝시간', 끝시간);
        console.log('반응속도', 끝시간 - 시작시간, 'ms');

        스크린.classList.remove('now');
        스크린.classList.add('waiting');
        스크린.textContent = '클릭해서 시작하세요';
    }
}); 