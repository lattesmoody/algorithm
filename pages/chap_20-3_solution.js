const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;
/*
[문제 유형]
1. 가장 짧은 구간을 찾는다 
=> 일차원 배열에서 구간에 대한 탐색
=> 투포인터 알고리즘 적용 가능 여부 고민

[풀이]
1. 투포인터로 접근 목적
: 진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매

*/

// [구현 단계] 코드 이해 불가. 재복습 필요.
function solution(gems) {
  let answer = [0, gems.length];
  let start = 0;
  let end = 0;

  const gemKinds = new Set(gems).size;
  const collect = new Map(); // 보석을 담아둘 변수
  // 맵 객체 관련 설명 사이트
  // https://maxkim-j.github.io/posts/js-map
  collect.set(gems[0], 1);
  //console.log(collect);
  while (start < gems.length && end < gems.length) {
    // 모든 보석 구매 가능할 경우
    if (collect.size === gemKinds) {
      // 구간 갱신 조건문
      if (end - start < answer[1] - answer[0]) {
        answer = [start + 1, end + 1];
      }
      // get() 함수를 사용하면 첫 번째 value만 반환.

      collect.set(gems[start], collect.get(gems[start]) - 1);
      if (collect.get(gems[start]) === 0) {
        // 만약 0이 됐다면 목록에서 제거된다.
        collect.delete(gems[start]);
      }
      start += 1; // 첫 번째 포인터 증가
    }
    // 모든 보석 구매 불가능할 경우
    else {
      end += 1; // 두 번째 포인터 증가
      collect.set(gems[end], 1 + (collect.get(gems[end]) || 0)); // 보석을 추가한다.
    }
  }
  return answer;
}

//const gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];
//console.log(solution(gems));
