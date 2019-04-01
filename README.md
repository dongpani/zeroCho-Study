# zeroCho-Study
- 제로초님 강좌기반 자바스크립트 기초 스터디
- 유튜브 강좌

## VSCode 깃허브 레파지토리 복사하기.
1. ctrl + shift + p
2. git clone
3. repository url 입력 후 폴더 지정.
4. 스테이징 -> 커밋 -> Push


- 비동기
JS 에서 비동기란, 코드가 모두 처리되지 않은 상태에서 다음 코드를 실행하는 것을 말한다.
비동기함수를 만났을 때, 그 과정이 끝날 때까지 기다리는 것아니라 바로 다음 함수를 실행한다.

## JS 중급 - 지뢰찾기 (키워드 : 스코프, 클로저)
1. 데이터와 화면을 일치시키는게 중요. 이것이 개발하는데 굉장한 피로감을 주므로, 좋은 효율성을 위해 JS 프레임워크들이 등장하게 된 것이다.
2. e.currentTarget : 클릭이벤트의 위치를 반환함.
3. currentTarget 와 target 의 차이
    - currentTarget : 이벤트리스너를 발생시킨 대상.
    - target : 실제 이벤트가 발생한 대상.

4. 스코프와 스코프 체인
- **스코프**란 함수, 변수, 객체의 접근 제한을 블록 단위({...}) 로 제한을 두는 것이다.

```
const x = '스타벅스';

const scope = function() {
    var x = '할리스';
    console.log(x);
}

scope();        // 할리스
console.log(x); // 스타벅스
console.log(scope.x); // undefined    
```

만약, scope 함수안에 var 라는 변수선언문이 없다면, 할리스가 아닌 "스타벅스"를 호출하게 된다. <br>
함수안에서 var, const, let 을 사용하는 순간 그 변수의 범위는 사용한 함수 블록안으로 제한된다.

5. 스코프 체인
- **스코프 체인**이란 찾고자하는 변수가 해당 블록안에 없을 시 바로 위의 함수로 올라가 탐색하는 것을 말한다.

```
const x = '스타벅스';
const y = '빽다방';

const scope = function() {
    const x = '할리스';

    function chain() {
        console.log(x);
    }

    chain();
    console.log(y);
}

scope(); // 할리스, 뺵다방
console.log(scope.x);  // undefined
```

위 처럼 찾고자하는 변수가 자신의 블록에 없으면 자신을 감싼 함수에서 그 변수를 찾는다. <br>
'스코프 체인'은 내부에서 외부로 접근은 가능하지만, 외부에서 내부변수로는 접근이 불가능하다.
