var 가로 = 4;
var 세로 = 3;

function 카드세팅(가로, 세로) {

  for(var i=0; i < 가로*세로; i++) {
    var card = document.createElement('div');
    card.className = 'card';
    var cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    var cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    var cardBack = document.createElement('div');
    cardBack.className = 'card-back';

    // html 요소에 추가
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    document.body.appendChild(card);    
  }
}

카드세팅(가로, 세로);