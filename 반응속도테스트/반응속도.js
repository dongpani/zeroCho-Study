var 스크린 = document.querySelector('#screen');

스크린.addEventListener('click', function(e) {

    // 현지 시작전이라면 대기상태로 변경
    if(스크린.classList.contains('waiting')) {
        스크린.classList.remove('waiting');
        스크린.classList.add('ready');
    } 
    

}); 