// map() 함수 알아보기 : 크롬콘솔에서 실행해본 내역

const friends = ["kim","park","lee","jung"];
// undefined

//friends
//(4)["kim", "park", "lee", "jung"]

friends.map(current => {
    console.log(current);
    return 0;
})
/*
kim
park
lee
jung
[0, 0, 0, 0]
*/

/************************************************************************************************
 map()
 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고,
 그 함수의 return값을 모아서 배열로 반환해준다.
 (=> friends배열에서 모든 요소마다 console.log출력하고 0을 반환했고, 그 return값들을 모아서 배열로 반환해준 것)

 1. map()의 인자로 전달하는 함수는 배열의 원소각각을 대상으로 실행된다.
 2. 배열에 들어있는 요소 개수만큼 함수가 실행된다.
 3. 그 함수가 각각실행 후 반환한 값들이 모여 배열이 되고, 그 배열이 map()의 반환값이 된다.
 ************************************************************************************************/

// friends의 보든 요소에 하트(❤︎)를 붙이는 map() 만들기
friends.map(current => {
    return friends+"❤︎";
})
// ["kim,park,lee,jung❤︎", "kim,park,lee,jung❤︎", "kim,park,lee,jung❤︎", "kim,park,lee,jung❤︎"]