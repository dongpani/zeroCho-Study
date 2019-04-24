
// console.log(typeof fn);

var 프로토타입 = {
    type : '카드',
    attack: function() {},
    defend: function() {}
};

function 카드공장(name, att, hp) {
    var 카드 = Object.create(프로토타입);  // 객체 참조 복사가 이루어짐.
    카드.name = name;
    카드.att = att;
    카드.hp = hp;
}


