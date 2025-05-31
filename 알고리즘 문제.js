function solution(numbers, n) {
    let sum = 0;
    for (i = 0; i < numbers.length - 1; i++) {
        sum = numbers[1] * 2 - numbers[i + 1];
        if (sum > n)
            return sum;
    }
    return 0;
}




// 함수를 만들고
// sum의 변수값을 지정
// 반복문을 사용해서 불러옴
// 원소의 배열
// 원소의 배열 *2
// 현재 원소의 배열 다음을 빼고
// 그 값이 n 보다 큰지 확인
// 클 경우 리턴 아닐 경우 다음 배열을 확인
// 끝까지 확인해도 n 보다 커지는 값이 존재하지 않으면 0을 리턴