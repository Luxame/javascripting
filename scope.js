var a = 1, b = 2, c = 3;

(function firstFunction(){
    var b = 5, c = 6;
console.log("a: "+a+", b: "+b+", c: "+c);
    (function secondFunction(){
        var b = 8;
console.log("a: "+a+", b: "+b+", c: "+c);
        (function thirdFunction(){
            var a = 7, c = 9;
console.log("a: "+a+", b: "+b+", c: "+c);
            (function fourthFunction(){
                var a = 1, c = 8;
console.log("a: "+a+", b: "+b+", c: "+c);
            })();
        })();
    })();
})();
// a: 1, b: 5, c: 6
// a: 1, b: 8, c: 6
// a: 7, b: 8, c: 9
// a: 1, b: 8, c: 8
// 區域變數、全域變數
