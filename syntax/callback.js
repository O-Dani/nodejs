//어려운 주제

/*function a(){
    console.log('A');
};
*/
//둘다 똑같은 함수
var a = function (){
    console.log('A');
};

a(); //A

function slowfunc(callback){
    callback;

}

slowfunc(a); //A