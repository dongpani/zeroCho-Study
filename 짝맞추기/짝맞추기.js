var 가로 = 4;
var 세로 = 3;
var 색깔후보 = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
var 색깔 = [];

// 색깔후보군의 index 를 하나씩 잘라서 색깔 배열에 넣는다.
for(var i=0; 색깔후보.length > 0; i++) {
  색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random() * 색깔후보.length), 1));  
}

function 카드세팅(가로, 세로) {

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
        c.classList.toggle('flipped');
      });
    })(card);

    document.body.appendChild(card);

  }
}

카드세팅(가로, 세로);