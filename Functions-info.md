
# 📘 자바스크립트 함수 기본 정리

## ✅ 함수의 기본
**함수란?**  
자주 사용하는 동작을 묶어둔 코드 블록입니다.

```js
function sayHello() {
  console.log("안녕하세요!");
}

sayHello(); // 출력: 안녕하세요!
```

---

## 🧠 변수의 종류

- **지역 변수 (local):** 함수 내부에서 선언 → 함수 외부에선 접근 불가  
- **외부 변수 (outer):** 함수 외부에 선언 → 함수 내부에서 읽거나 수정 가능  
- **전역 변수 (global):** 어디서든 접근 가능하지만 **남용은 금물**

```js
let globalVar = "전역 변수";

function example() {
  let localVar = "지역 변수";
  console.log(globalVar); // 외부 변수 접근
  console.log(localVar);  // 지역 변수 접근
}

example();
// console.log(localVar); // ❌ 오류 발생
```

---

## 📦 매개변수 & 인수

- **매개변수 (parameter):** 함수 선언 시 사용하는 변수
- **인수 (argument):** 함수 호출 시 전달하는 값

```js
function greet(name) {
  console.log("안녕, " + name + "!");
}

greet("지현"); // 출력: 안녕, 지현!
```

**기본값 설정**

```js
function greet(name = "친구") {
  console.log("안녕, " + name + "!");
}

greet();        // 출력: 안녕, 친구!
greet("지현");  // 출력: 안녕, 지현!
```

---

## 🔁 반환 값 (return)

- `return` 값을 통해 함수 실행 결과 반환
- `return`만 쓰면 `undefined` 반환
- `return` 뒤에 줄바꿈 ❌ → 자동 세미콜론 삽입됨

```js
function add(a, b) {
  return a + b;
}

let result = add(3, 4);
console.log(result); // 출력: 7
```

**주의: 잘못된 줄바꿈**

```js
function wrongReturn() {
  return 
  1;
}

console.log(wrongReturn()); // 출력: undefined
```

---

## 🧾 함수 이름 규칙 (네이밍)

- 동사형, 의미가 명확한 이름 사용 권장
- 추천 접두사:
  - `show...` → 보여주기
  - `get...` → 반환
  - `calc...` → 계산
  - `create...` → 생성
  - `check...` → 조건 확인

```js
function getUserName() {
  return "지현";
}

function checkAdult(age) {
  return age >= 20;
}

console.log(getUserName());     // 출력: 지현
console.log(checkAdult(25));   // 출력: true
```

---

## 🔍 함수는 한 가지 일만!

- 함수는 하나의 명확한 역할만 수행
- 복잡하면 나눠서 작성

```js
function printName(name) {
  console.log("이름: " + name);
}

function getNameLength(name) {
  return name.length;
}

const user = "지현";
printName(user); // 출력: 이름: 지현
console.log(getNameLength(user)); // 출력: 2
```

---

> 📎 정리는 계속됩니다! 필요시 예제를 더 추가하거나 확장 가능합니다.
