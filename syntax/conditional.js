var args = process.argv;
console.log(args[2]); //2 왜냐 0은 로컬위치,1은 실행파일명
console.log('A');
console.log('B');
if(args[2] === '1'){
    console.log('C1');
}
else{
    console.log('C2');
}
console.log('D');