# ✔️ My Todo List만들기
---
![](https://velog.velcdn.com/images/jhhyung/post/feb5c66d-6152-4bb2-a841-0e553b9ea18a/image.png)
항해99 3주차 [React 입문주차] 개인과제로 처음 React를 사용하여 프로젝트를 만들었습니다!😆

---
### 📌구현기능
- Todo 추가하기
  - 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working..🔥 에 새로운 Todo가 추가되고 input창 초기화
- Todo 상태에 따른 위치 배치
  - Todo를 완료하기 전이면, Working..🔥 라인에, 완료면 Done..!🎉 라인에 위치
  - 완료하기 전의 버튼 내용은 [완료], 완료 후에는 [취소]로 상태를 변경할 수 있게 구현
---
### 📌Trouble Shooting
- ID에 같은 값이 중복되어 들어가는 오류 발생
  - `useRef` 훅을 사용하여 각 Todo블럭마다 고유 ID값을 생성했는데, `input`의 제목과 내용이 비어있는 상태로 [추가하기] 버튼을 클릭하여 Todo 생성시 해당 블럭들의 ID가 모두 초기값인 `0`으로 들어가는 현상을 발견했다.
  - `useState` 훅은 새로 변한 값이 있을 때의 내용을 반환하는 훅으로 초기값이 이미 `0`인 상황에서 아무 내용도 넣지 않고 [추가하기]버튼을 눌러 그냥 초기값이 계속해서 들어갔던 것..
  
➡️ 제목의 `input` 태그에 `required`를 추가하여 사용자가 빈칸을 추가하지 못하도록 하여 ID중복 현상을 방지
---
#### 💪큰 힘이 되어준 팀원들의 github
✨[임주영] (https://github.com/JJOOYYONG/react_hm_1.git)
✨[이호진] (https://github.com/hojncode/React_1.git) 