import React, {useState, useRef} from "react"
import './style.css'
// 이놈은 알맹이,, TodoList에서 겉놈만 넘겨줬으니까 그 안을 채워주기 위해 또다른 useState를 써서 객체를 채워준
// input 객체가 다중일때 코드 짜는법(https://react.vlpt.us/basic/09-multiple-inputs.html)
// input창이 여러개면 useState를 여러개 쓰는 것보다 그냥 input에 name을 부여해서 하래
function Form({todos, setTodos}) {
    // 엄마로부터 받은 props를 비구조화 분해?할당?해서 요롷게 넣었따.
    // console.log(todos, setTodos)
    
    //코드 깔꼼하게 할려고 initialState하나 선언할게요~
    const initialState = {
        id: 0,
        title: "",
        body: "",
        isDone: false
    }
    const [inputTodo, setInputTodo] = useState(initialState)
    // 초기화 값!
    const nextId = useRef(3)
    //고유 id값을 설정해주기 위해!
    //todos.length만큼 id를 설정하면 나중에 오류남
    
    const onChangeHandler=(event)=>{
        // event.target은 이벤트가 발생한 input창을 가르킨다. 그리고 그 친구의 value값을 조회하면 input에 들어온 값이 무엇인지 알 수 있다!!!래
        // console.log(event.target.value) 
        const {value, name} = event.target //event.target에서 name과 value를 추출..원래는 event.target.name, event.target.value 2개임
        setInputTodo({...inputTodo, [name]: value, id: nextId.current})
        // []문법을 cpmputed property names라고 한대(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)
        // 그리고 여기 들어가면 전개연산자관련한 내용도 있음..
        // 중복된 키???가 다시 들어오면 뒤의 값으로 ...?덮어버린다?입력???머지??
        // 왜 [name]이라고 표현하는지..맨 아랫부분 보면 됨 아주 친절쓰 https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4
        //자바스크립트에서 오브젝트 리터럴안안에서 키값을 []처리하면 이 값을 동적으로 바꿀 수 있대..그냥 하나의 문법!
        nextId.current++
        // 함수가 실행될때마다 아이디도 하나씩 같이 늘어남
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault()
        // 기본 이벤트 새로고침 방지(from의 기능 중 submit을 하면 자동으로 페이지를 다시 불러오는 기능을 하는게 있는데 이걸 하면 정보가 다 날아감)
        setTodos([...todos, inputTodo])
        setInputTodo(initialState)
        // input창을 빈칸으로!
    }
   
    return (
        <form onSubmit={onSubmitHandler} className="form_container">
            <div className='input_container'>
                <label>제목</label>
                <input type='text' name="title" onChange={onChangeHandler} value={inputTodo.title} required/>
                {/* input태그의 value값도 설정해줘야 상태가 바뀌었을 때 인풋내용도 업데이트된다! */}
                <label>내용</label>
                <input type='text' name="body" onChange={onChangeHandler} value={inputTodo.body}/>
            </div>
            <button>추가하기</button>
        </form>
    )
}
export default Form
