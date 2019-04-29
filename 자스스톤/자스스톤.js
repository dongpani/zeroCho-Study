// 화면
var 상대영웅 = document.getElementById('rival-hero');
var 내영웅 = document.getElementById('my-hero');
var 상대덱 = document.getElementById('rival-deck');
var 내덱 = document.getElementById('my-deck');
var 상대필드 = document.getElementById('rival-cards');
var 내필드 = document.getElementById('my-cards');
var 상대코스트 = document.getElementById('rival-cost');
var 내코스트 = document.getElementById('my-cost');
var 턴버튼 = document.getElementById('turn-btn');

// 데이터
var 상대덱data = [];
var 내덱data = [];
var 상대영웅data;
var 내영웅data;
var 상대필드data = [];
var 내필드data = [];
var 턴 = true;   // true : 나 / false : 상대


function 카드돔연결(데이터, 돔, 영웅) {
    var 카드 = document.querySelector('.card-hidden .card').cloneNode(true);
    카드.querySelector('.card-cost').textContent = 데이터.cost;
    카드.querySelector('.card-att').textContent = 데이터.att;
    카드.querySelector('.card-hp').textContent = 데이터.hp;

    if(영웅) {
        카드.querySelector('.card-cost').style.display = 'none';
        var 이름 = document.createElement('div');
        이름.textContent = '영웅';
        카드.appendChild(이름);
    }
    
    카드.addEventListener('click', function(e) {
        if(턴) {
            if(!데이터.mine || 데이터.field) {
                return;
            }
            var 현재코스트 = Number(내코스트.textContent);
            if(현재코스트 < 데이터.cost) {
                alert('I have no money !');
                return;
            }
            var idx = 내덱data.indexOf(데이터);
            내덱data.splice(idx, 1);
            내필드data.push(데이터);
            내덱.innerHTML = '';
            내필드.innerHTML = '';
            내필드data.forEach(function(data) {
                카드돔연결(data, 내필드);    
            });
            내덱data.forEach(function(data) {
                카드돔연결(data, 내덱);
            });
            데이터.field = true;
            내코스트.textContent = 현재코스트 - 데이터.cost;
            내덱생성(1);
            
        } else {
            if(데이터.mine) {
                return;
            }
            var 현재코스트 = Number(상대코스트.textContent);
            if(현재코스트 < 데이터.cost) {
                return;
            }
            var idx = 상대덱data.indexOf(데이터);
            상대덱data.splice(idx, 1);
            상대필드data.push(데이터);
            상대덱.innerHTML = '';
            상대필드.innerHTML = '';
            상대필드data.forEach(function(data) {
                카드돔연결(data, 상대필드);    
            });
            상대덱data.forEach(function(data) {
                카드돔연결(data, 상대덱);
            });          
            상대코스트.textContent = 현재코스트 - 데이터.cost;
            상대덱생성(1);
        }
    });
    
    돔.appendChild(카드);
}

function 상대덱생성(개수) {
    for(var i=0; i < 개수; i++) {
        상대덱data.push(카드공장());
    }

    상대덱.innerHTML = '';
    상대덱data.forEach(function(data) {
        카드돔연결(data, 상대덱);
    });  
}

function 내덱생성(개수) {
    for(var i=0; i < 개수; i++) {
        내덱data.push(카드공장(false, true));
    }

    내덱.innerHTML = '';
    내덱data.forEach(function(data) {
        카드돔연결(data, 내덱);
    });      
    
}

function 내영웅생성() {
    내영웅data = 카드공장(true, true);
    카드돔연결(내영웅data, 내영웅, true); 
}

function 상대영웅생성() {
    상대영웅data = 카드공장(true);
    카드돔연결(상대영웅data, 상대영웅, true); 

}

// 생성자 함수
function Card(영웅, 내카드) {
    if(영웅) {
        this.att =  Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
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
}

턴버튼.addEventListener('click', function() {
    console.log(턴);
    턴 = !턴;
});

초기세팅();