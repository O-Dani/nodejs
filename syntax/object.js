// array (list), object (dictionnaire)

var f =function(){
    console.log(1+1);
    console.log(1+2);
};

console.log(f); //f가 출럭
f();//f를 호출하면 실행됨

var a = [f];
a[0]();

var o = {
    func:f
}
o.func();