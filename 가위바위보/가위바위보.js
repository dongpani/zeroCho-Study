/*
setInterval 콜백함수 : 지정된 시간만큼 반복되서 호출.
*/

// 딕셔너리 
// 가위바위보 이미지의 위치 값을 객체 형태로 저장함.
// 가독성이 떨어짐.
// 변수명은 짧은게 좋은게 아니라, 사람이 알아볼 수 있는 것이 좋음 -> 길어도 알아볼 수 있는 것이면 상관없음.

let 컴퓨터가내는거 = 0;
// var left = 0;

const 이미지좌표 = {
    바위 : '0',
    가위 : '-142',
    보 : '-284'
}

let 컴퓨터의선택 = function(컴퓨터가내는거) {
    return Object.entries(이미지좌표).find(function(v) {
        return v[1] === 컴퓨터가내는거;
    })[0];
};

const 게임 = setInterval(function() {
    if(컴퓨터가내는거 === 이미지좌표.바위) {
        컴퓨터가내는거 = 이미지좌표.가위;
    } else if(컴퓨터가내는거 === 이미지좌표.가위) {
        컴퓨터가내는거 = 이미지좌표.보;
    } else {
        컴퓨터가내는거 = 이미지좌표.바위;
    }

    document.querySelector('#computer').style.background = 
    'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + 컴퓨터가내는거 + 'px, 0';
}, 500);


const 쇼부 = {
    가위 : "1",
    바위 : "0",
    보 : "-1"
}

// 버튼들을 반복하면서 클릭 이벤트를 추가한다.
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {

        let 내손 = this.textContent;

        // 이벤트 발생 시, 내가 내는거와 컴퓨터가 내는게 일치하면, 승리를 찍고, 셋인터벌을 멈춤.
        console.log(내손, 컴퓨터의선택(컴퓨터가내는거));

        // 

        // 이겼을 떄
        if([2, -1].includes(쇼부[내손] - 쇼부[컴퓨터의선택(컴퓨터가내는거)])) {
            console.log('이겨따!!!');
        } else if([1, -2].includes(쇼부[내손] - 쇼부[컴퓨터의선택(컴퓨터가내는거)])) {  // 졌을 떄
            console.log('졌다...졌다!!!!!');
        } else if(쇼부[내손] - 쇼부[컴퓨터의선택(컴퓨터가내는거)] === 0) {
            console.log('한번 더 하자!!');
        }

    });
});

// 반복을 멈춤.

document.querySelector('#stop').addEventListener('click', function() {
    // console.log('123123');
    clearInterval(게임);
});


document.querySelector('#replay').addEventListener('click', function() {
    // console.log('123123');
    window.location.reload();
});


