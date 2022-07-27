import React from "react"
import './style.css'
import Todo from '../todo/Todo'
//이번에 받은 todos라는 껍데기에는 form에서 setTodos를 통해 그곳에서 업데이트된 setState가 들어있지..요?

function List({todos, setTodos}) {
    // console.log(todos) //찍어보면 todos라는 배열 안에 {}객체가 들어있다. 그 객체의 속성은 id, title, body, idDone이 있음
    // 삭제버튼 기능을 여기서 만들어서 Todo에게 보내준다 왜?
    // 대은님은 여기서 버튼 기능함수를 만들어서 넘기라고 했는데,,, 그냥 todos랑 setTodos랑 같이 넘기면 안되나?해볼래
        //해볼려고 했는데 아주 복잡따꾸리하구만 그냥 여기서 해서 함수만 넘겨보겠습니다...
    const onDeleteHandler = (selectedId) => {
        const remainedTodos = todos.filter((todo)=>{
            return todo.id !== selectedId
        })
        setTodos(remainedTodos)
    }
    console.log(todos)
    const onCompleteHandler = (selectedId) =>{
        const newTodos = todos.map((todo)=>{
            //안쓰는코드 나중에 내가 보면서 기억 더듬을 코드..return todo.isDone === false ? true : false; //이렇게 하면 내가 지금 불변성을 깨는건가? props의 내용을 바꾸려고 해서?? 그런가봄....
            //콘솔에 todos를 찍으면 배열이 들어오는데, 그중에서 내가 클릭한 애에 대해서 이벤트가 일어나야되니까
            if (todo.id === selectedId) {
                return {...todo, isDone: !todo.isDone}
                // todo를 하나씩 열거해주고, 거기서 id가 맞는 곳의 isDone의 값을 true를 false로,, false를 true로 바꿔줌
            } else {
                return {...todo}
            }
        })
        setTodos(newTodos)
    }
    return (
        <div className="list_container">
            <h1>Working.. 🔥</h1>
            <div className="list_wrapper">
                {todos.map((todo)=>{
                    // todos배열에서 하나씩 나온 요소(객체)이름을 todo라고 부르는 거..
                    if(todo.isDone === false) {
                        return <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHandler={onDeleteHandler} onCompleteHandler={onCompleteHandler}/>
                        }
                    }
                )}
            </div>
            <h1>Done..! 🎉</h1>
            <div className="list_wrapper">
                {todos.map((todo)=>{
                        if(todo.isDone === true) {
                            return <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHandler={onDeleteHandler} onCompleteHandler={onCompleteHandler}/>
                            }
                        }
                    )}
            </div>
        </div>
    )
}
export default List