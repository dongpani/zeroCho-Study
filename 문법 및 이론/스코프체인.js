

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

