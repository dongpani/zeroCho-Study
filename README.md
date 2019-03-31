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
1. 데이터와 화면을 일치시키는게 중요. 이 것이 개발하는데 굉장한 피로감을 주므로, 좋은 효율성을 위해 JS 프레임워크들이 등장하게 된 것이다.
2. e.currentTarget : 클릭이벤트의 위치를 반환함.

```
var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
```



