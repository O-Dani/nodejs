var arr =['A','B','C','D'];//배열 생성

console.log(arr[1]);//B 자리수는 0부터 시작하므로 1번째 자리에 있는 값을 출력

arr[2] = 3;//C를 3으로 바꿈

console.log(arr);

console.log(arr.length);//4 이므로 배열의 길이를 알려줌 배열은 1부터 시작하므로 0부터 시작하므로 4개의 요소가 있음

arr.push('E');//배열에 E를 추가

console.log(arr);