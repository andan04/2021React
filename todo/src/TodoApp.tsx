import { networkInterfaces } from "os";
import React from "react";
import TodoItem from "./components/TodoItem";
import "./aaa.css";

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);

    this.state = {
      todoItems: [],
      newTodo: "",
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });  
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(this.state.newTodo !== '') // 빈 문자열 추가 못하게 함
    {
      const items = this.state.todoItems.concat(this.state.newTodo)

      this.setState({
        todoItems: items,
        newTodo: "",
      })
  
    }
  }
  delete = () => //입력 받은 인덱스에서 값 삭제
  {
    const idx = this.state.todoItems.length - 1;
    const inputIdx = prompt("지울 인덱스를 입력하세요")
    if(Number(inputIdx) <= idx) // 자료 갯수보다 큰 값 입력 시 다시 입력 받음
    {
      Number(inputIdx)
      this.state.todoItems.splice(Number(inputIdx), 1)
      const items = this.state.todoItems
      this.setState
      ({
        todoItems: items
          
      })
    }
    else
    {
      alert('인덱스 범위 내에서 입력하세요')
    }
  }

  render() {
    return (
      <div>
        <h1>TODO</h1>
        <label htmlFor="new-todo">뭘 해야하나요?</label><br /><br />
        {
          this.state.todoItems.map((item, idx) => (
            <TodoItem name={item} key={idx}/>
          ))
        }
        <form onSubmit={this.handleSubmit}>
          <br />
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br />
          <br />
          <button id = "add">Add #{this.state.todoItems.length + 1}</button>
        </form>
        <button onClick = {this.delete}>Delete</button>
      </div>
    )
  }
}

export default TodoApp;