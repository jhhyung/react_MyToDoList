import React, {useState} from 'react'
import Layout from '../components/layout/Layout'
import Header from '../components/header/Header'
import Form from '../components/form/Form'
import List from '../components/list/List'
// 형제 컴포넌트간의 정보전달이 왜 안되고 setState를 왜 props속성으로 넘기는지(https://foamless.tistory.com/730)
// 이놈시키는 껍데기고
function TodoList() {
    // 형제컴포넌트들끼리의 정보 교환을 위해 공통된 부모 컴포넌트에서 넘겨줄 props 설정
    const [todos, setTodos] = useState([
        // 아이템들을 쌓아서 보여줄 거니까 얘네를 모을 곳이 필요함.. 그리고 아이템을 모으는데 제일 좋은 건 배열이다!
        // 근데 공교롭게도 들어오는 아이템들은 객체임ㅋㅋ존싫
        {
            id: 1,
            title: "REACT공부하기",
            body: "역시 어렵군요",
            isDone: false
        },
        {
            id: 2,
            title: "JS공부하기",
            body: "선행 필수!",
            isDone: true
        }
        // 초기값을 일단 이 새끼로 넣어봤다. 0726새벽이군
        // 초기값은 어차피 form에서 바뀌니까 예제로 넣어봤다. 0726 1030
    ])

    return (
        <Layout>
            <Header />
            {/* 그럼 이제 자식놈들에게 props랑 형제놈들끼리도 정보교환해야되니까 setTodos(함수)를 같이 넘겨! */}
            <Form todos={todos} setTodos={setTodos}/>
            <List todos={todos} setTodos={setTodos}/>
        </Layout>
    )
}
export default TodoList