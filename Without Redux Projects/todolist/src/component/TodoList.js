import {useState, useEffect} from 'react';
import Header from "./Header";
import  Main  from "./Main";
import Footer from "./Footer";


function TodoList() {

    const [todo, setTodo] = useState([]);
    const [status, setStatus]= useState('');
    const [filteredTodos, setFilteredTodos]= useState([]);

    useEffect(() => {
      const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todo.filter(item => item.completed === true))
          break;
        case 'active':
          setFilteredTodos(todo.filter(item => item.completed === false))
          break;
        default:
          setFilteredTodos(todo)
          break;
      }
    }
  
      filterHandler()
    }, [todo, status])

  return (
    <div>
        <div className="todoapp" >
          
        <Header addTodo={setTodo} todo={todo}/>
        <Main filteredTodos={filteredTodos} todol={todo} deleteTodo={setTodo} status={status}/>
        <Footer todoCount={todo} setTodo={setTodo} status={status} setStatus={setStatus} />
      </div>

      <footer className="info">
	      <p>Click to edit a todo</p>
	      <p>Created by <a href="https://github.com/Vinexy">Ahmet Fatih Çopur</a></p>
	      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  )
}

export default TodoList