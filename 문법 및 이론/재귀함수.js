

// 1부터 5까지 출력 -> 재귀함수
function 재귀(num) {
    console.log(num);

    if(num === 5) {
        return;
    }
    재귀(num+1);
}

재귀(1);

// // 1부터 5까지 출력 -> for 문
for(i=1; i<=5; i++) {
    console.log(i);
}