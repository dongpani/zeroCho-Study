/*

스코프는 함수 단위.

*/

const scope = function () {
    const a = 1;
    const b = 'B';
    console.log(a);

    const scope2 = function() {
        const a = 2;
        console.log(a);
        console.log(b);
    };

    scope2();

};

scope();

