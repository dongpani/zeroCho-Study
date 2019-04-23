var 가로 = 4;
var 세로 = 3;
var 색깔들 = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
var 색깔후보 = 색깔들.slice(); // 객체참조복사가 되므로, slice 메서드로 참조관계 해제
var 색깔 = [];
var 클릭플래그 = true;
var 클릭카드 = [];
var 완성카드  = [];
var 시작시간;

// 색깔후보군의 index 를 하나씩 잘라서 색깔 배열에 넣는다.
var 셔플 = function() {
  for(var i=0; 색깔후보.length > 0; i++) {
    색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random() * 색깔후보.length), 1));  
  }
};

function 카드세팅(가로, 세로) {
  클릭플래그 = false;

  for(var i=0; i < 가로*세로; i++) {
    var card = document.createElement('div');
    card.className = 'card';
    var cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    var cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    var cardBack = document.createElement('div');
    cardBack.style.backgroundColor = 색깔[i];
    cardBack.className = 'card-back';

    // html 요소에 추가
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);


      // 클로저 문제로 즉시 실행 함수를 사용하여, 비동기함수를 감싼다.
    (function(c) {
      card.addEventListener('click', function() {
        if(클릭플래그 && !완성카드.includes(c)) {
          c.classList.toggle('flipped');
          클릭카드.push(c);
          if(클릭카드.length === 2) {
              if(클릭카드[0].querySelector('.card-back').style.backgroundColor === 클릭카드[1].querySelector('.card-back').style.backgroundColor) {
                완성카드.push(클릭카드[0]);
                완성카드.push(클릭카드[1]);
                클릭카드 = [];
                  
                // 카드를 모두 뒤집었을 때
                if(완성카드.length === 12) {
                    var 끝시간 = new Date();
                    alert('축하합니다.' + (끝시간-시작시간) / 1000 + '초 걸렸습니다.' );
                    document.querySelector("#wrapper").innerHTML = '';
                    색깔후보 = 색깔들.slice();
                    완성카드 = [];
                    카드세팅(가로, 세로);
                    시작시간;
                    셔플();
                }

              } else {
                클릭플래그 = false;
                setTimeout(function() {
                  클릭카드[0].classList.remove('flipped');
                  클릭카드[1].classList.remove('flipped');
                  클릭플래그 = true;
                  클릭카드 = [];
                }, 1000);                
              }
          }
        }
      });
    })(card);
    document.querySelector("#wrapper").appendChild(card);
  }

  // 순서대로 카드 열기.
  document.querySelectorAll('.card').forEach(function(card, index) {
    setTimeout(function() {
      card.classList.add('flipped');
    }, 1000+100 * index);
  });

  // 카드 닫기
  setTimeout(function() {
    document.querySelectorAll('.card').forEach(function(card, index) {
      card.classList.remove('flipped');
    });  
    클릭플래그 = true;
    시작시간 = new Date();
  }, 5000);

}

셔플();
카드세팅(가로, 세로);