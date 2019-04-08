
function d() {
    console.log('d');
}

function e() {
    console.log('e');
}

function a() {
    function b() {
        function c() {
            console.log('c');
        }
        c();
        console.log('b');
    }
    console.log('a');
    b();
}

d();
e();
a();