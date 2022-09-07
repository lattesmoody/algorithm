// [배열]
// 연관된 데이터를 연속적인 형태로 구성된 구조를 가진다.
// 배열에 포함된 원소는 순서대로 번호가 붙는다.

// 특징
// 고정된 크기를 가진다.
// O(1)
// 원소 삭제 시 해당 index에 빈자리 생긴다.

// 배열 요소 삭제
// 삭제 후 순서 맞추려면 O(n) 소요.

// 배열 요소 추가 
// 삭제와 동일하게 O(n) 소요.

// 추가, 삭제는 권장하지 않음.

// [배열 생성 방법]

// 1. 빈 Array 생성
let arr1 = []
console.log("1. ",arr1);

// 2. 미리 초기화 된 Array 생성
let arr2 = [1,2,3,4,5];
console.log("2. ",arr2);

// 3. 많은 값을 같은 값으로 초기화할 경우 fill 사용.
let arr3 = Array(10).fill(0);
console.log("3. ",arr3);

// 4. 특정 로직을 사용하여 초기화 할 경우 from 사용.
let arr4 = Array.from ({length:100}, (_,i) => i);
console.log("4. ", arr4);

// [배열 요소 추가, 삭제]


const Index = () => {
    return (
      <>
        <p>test</p>
      </>
    );
  };
  
  export default Index;
