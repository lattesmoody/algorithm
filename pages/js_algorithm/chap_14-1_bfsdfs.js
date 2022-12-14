const Index = () => {
    return (
      <>
        <p>test</p>
      </>
    );
  };
  
  export default Index;

  /*
  [너비 우선 탐색]
  : 그래프 탐색 알고리즘.
  같은 깊이에 해당하는 정점부터 탐색하는 알고리즘.

  [BFS의 특징] 02:15
  1. Queue를 이용하여 구현할 수 있다. 
  2. 시작 지점에서 가까운 정점부터 탐색한다.
  3. V(vertex)가 정점의 수, E(edge)가 간선의 수 
  4. 시간복잡도 O(V+E)

  [깊이 우선 탐색]
  :
  최대한 깊은 정점부터 탐색하는 알고리즘.

  [DFS] (원리 반복해서 볼 것.)
  1. Stack으로 구현
  2. 시작 정점에서 깊은 것부터 찾음.
  3. V가 정점의 수, E가 간선의 수 
  4. 시간복잡도 : O(V+E)

  */