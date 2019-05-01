
// 딕셔너리

var 상대 = {
    영웅 : document.getElementById('rival-hero'),
    덱 : document.getElementById('rival-deck'),
    필드 : document.getElementById('rival-cards'),
    코스트 : document.getElementById('rival-cost'),
    덱data : [],
    영웅data : [],
    필드data : [],
    선택카드 : null,
    선택카드data : null,
}

var 나 = {
    영웅 : document.getElementById('my-hero'),
    덱 : document.getElementById('my-deck'),
    필드 : document.getElementById('my-cards'),
    코스트 : document.getElementById('my-cost'),
    덱data : [],
    영웅data : [],
    필드data : [],
    선택카드 : null,
    선택카드data : null,
}

function 덱에서필드로(데이터, 내턴) {
    var 객체 = 내턴 ? 나 : 상대;  // 삼항연산자

    var 현재코스트 = Number(객체.코스트.textContent);
    if(현재코스트 < 데이터.cost) {
        alert('I have no money !');
        return 'end';
    }
    var idx = 객체.덱data.indexOf(데이터);  
    console.log('idx', idx);
    객체.덱data.splice(idx, 1);
    객체.필드data.push(데이터);
    객체.덱.innerHTML = '';
    객체.필드.innerHTML = '';
    객체.필드data.forEach(function(data) {
        카드돔연결(data, 객체.필드);    
    });
    객체.덱data.forEach(function(data) {
        카드돔연결(data, 객체.덱);
    });
    데이터.field = true;
    객체.코스트.textContent = 현재코스트 - 데이터.cost;
}

// 데이터
var 턴버튼 = document.getElementById('turn-btn');
var 턴 = true;   // true : 나 / false : 상대

function 필드다시그리기(객체) {
    객체.필드.innerHTML = ''; 
    객체.필드data.forEach(function(data) {
        카드돔연결(data, 객체.필드);
    });
}

function 덱다시그리기(객체) {
    객체.덱.innerHTML = '';
    객체.덱data.forEach(function(data) {
        카드돔연결(data, 객체.덱);
    });
}

function 화면다시그리기(내화면) {
    var 객체 = 내화면 ? 나 : 상대;

    객체.덱.innerHTML = '';
    객체.필드.innerHTML = '';
    객체.영웅.innerHTML = '';

    객체.필드data.forEach(function(data) {
        카드돔연결(data, 객체.필드);
    });
    
    객체.덱data.forEach(function(data) {
        카드돔연결(data, 객체.덱);
    });    

    카드돔연결(객체.영웅data, 객체.영웅, true);
}


function 턴액션수행(카드, 데이터, 내턴) {

    var 아군 = 내턴 ? 나 : 상대;
    var 적군 = 내턴 ? 상대 : 나;

    if(카드.classList.contains('card-turnover')) { // 턴오버된 카드가 클릭이 안되게 처리
        return;
    }

    var 적군카드 = 내턴 ? !데이터.mine : 데이터.mine;
    if(적군카드 && 아군.선택카드) { // 내 덱에 있는 카드로 상대를 공격
      데이터.hp = 데이터.hp - 아군.선택카드data.att;
    
      if(데이터.hp <= 0) { // 카드가 죽었을 때
        var 인덱스 = 적군.필드data.indexOf(데이터); 
        if(인덱스 > -1) { // 쫄병이 죽었을 때
            적군.필드data.splice(인덱스, 1);
        } else { // 영웅이 죽었 을때
            alert('승리하셨습니다.');
            초기세팅();
        }
      }

      화면다시그리기(!내턴);
      아군.선택카드.classList.remove('card-selected');
      아군.선택카드.classList.add('card-turnover');
      아군.선택카드 = null;
      아군.선택카드data = null;
      return;
    } else if(적군카드) { // 
       return;
    }

    if(데이터.field) {  // 필드에 있는 카드를 눌렀을 때
        console.log('요기요2');
        카드.parentNode.querySelectorAll('.card').forEach(function(card) {
            card.classList.remove('card-selected');
        });
        카드.classList.add('card-selected');
        아군.선택카드 = 카드;
        아군.선택카드data = 데이터;

    } else {  // 덱에있는 카드들 (5장) 을 필드로 옮김.
        if (덱에서필드로(데이터, 내턴) !== 'end') {
            내턴 ? 내덱생성(1) : 상대덱생성(1);
        };                
    }
}


function 카드돔연결(데이터, 돔, 영웅) {
    var 카드 = document.querySelector('.card-hidden .card').cloneNode(true);
    카드.querySelector('.card-cost').textContent = 데이터.cost;
    카드.querySelector('.card-att').textContent = 데이터.att;
    카드.querySelector('.card-hp').textContent = 데이터.hp;

    // console.log('-------------');
    // console.log(데이터.cost);
    // console.log(데이터.att);
    // console.log(데이터.hp);
    // console.log('-------------');

    if(영웅) { // 영웅이면 영웅이라는 텍스트를 출력
        카드.querySelector('.card-cost').style.display = 'none';
        var 이름 = document.createElement('div');
        이름.textContent = '영웅';
        카드.appendChild(이름);
    }
    
    // 비동기 함수
    카드.addEventListener('click', function() {
        턴액션수행(카드, 데이터, 턴);
    });
    
    돔.appendChild(카드);
}

function 상대덱생성(개수) {
    for(var i=0; i < 개수; i++) {
        상대.덱data.push(카드공장());
    }

    //console.log('상대.덱data', 상대.덱data);

    상대.덱.innerHTML = ''; // 상대 덱 영역 -> 초기화
    상대.덱data.forEach(function(data) {
        카드돔연결(data, 상대.덱);
    });  
}

function 내덱생성(개수) {
    for(var i=0; i < 개수; i++) {
        나.덱data.push(카드공장(false, true));
    }

    //console.log('나.덱data', 나.덱data);

    나.덱.innerHTML = '';
    나.덱data.forEach(function(data) {
        카드돔연결(data, 나.덱);
    });
    
}

function 내영웅생성() {
    나.영웅data = 카드공장(true, true);
    카드돔연결(나.영웅data, 나.영웅, true); 
}

function 상대영웅생성() {
    상대.영웅data = 카드공장(true);
    카드돔연결(상대.영웅data, 상대.영웅, true); 

}

// 생성자 함수
function Card(영웅, 내카드) {
    if(영웅) {
        this.att =  Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.field = true;
    } else {
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
    }

    if(내카드) {
        this.mine = true;
    }
}

function 카드공장(영웅, 내카드) {
    return new Card(영웅, 내카드);
}

function 초기세팅() {
    상대덱생성(5);
    내덱생성(5);
    내영웅생성();
    상대영웅생성();
    화면다시그리기(true);
    화면다시그리기(false);
}

턴버튼.addEventListener('click', function() {
    // 턴을 넘겼 을 때 턴오버 된 카드들을 다 풀어준다.
    var 객체 = 턴 ? 나 : 상대;
    document.getElementById('rival').classList.toggle('turn');
    document.getElementById('my').classList.toggle('turn');    
    // 필드에 있는 카드, 영웅 태그들을 날려버림.

    // 필드에 카드 다시 그림.
    객체.필드.innerHTML = ''; 
    객체.필드data.forEach(function(data) {
        카드돔연결(data, 객체.필드);
    });

    // 필드에 영웅을 다시그림
    객체.영웅.innerHTML = '';
    카드돔연결(객체.영웅data, 객체.영웅, true);

    턴 = !턴; // 턴 넘김

    if(턴) {
        나.코스트.textContent = 10;
    } else {
        상대.코스트.textContent = 10;
    }
});

초기세팅();
