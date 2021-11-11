// import "../TodoApp.css";
import { useEffect, useReducer, createContext } from "react";
import todosList from "../todo.json";
//import TodoItem from "./components/TodoItem";
import TodoList from "./TodoList";
import Footer from "./TodoFooter";
import { Route } from "react-router-dom";
import React from "react";

export const TodosContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        userInput: action.payload,
      };
    case "ADD_TODO":
      return {
        userInput: "",

        todos: [
          ...state.todos,
          {
            title: action.payload,
            id: Date.now(),
            completed: false,
          },
        ],
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          let newTodo = { ...todo };
          if (newTodo.id === action.payload) {
            newTodo.completed = !newTodo.completed;
          }
          return newTodo;
        }),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "CLEAR_COMPLETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };

    default:
      return state;
  }
}

function TodoApp() {
  //const [todos, setTodos] = useState(todosList);
  //const [userInput, setUserInput] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    todos: todosList,
    userInput: "",
  });

  function handleChange(event) {
    //setUserInput(event.target.value);
    dispatch({ type: "UPDATE_INPUT", payload: event.target.value });
  }

  function handleKeydown(event) {
    if (event.key === "Enter") {
      dispatch({ type: "ADD_TODO", payload: state.userInput });
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  //function toggleComplete(event, todoId) {
  //
  //}
  //
  //function deleteTodo(event, todoId) {
  //
  //}

  function clearComplete(event) {
    dispatch({ type: "CLEAR_COMPLETE" });
  }

  return (
    <React.Fragment>
      <TodosContext.Provider value={dispatch}>
        <Route exact path="/SEres/OtherProjects/TodoApp">
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={(event) => handleChange(event)}
                value={state.userInput}
              />
            </header>
            <TodoList
              todos={state.todos}
              //toggleComplete={toggleComplete}
              //deleteTodo={deleteTodo}
            />
            <Footer
              clearComplete={clearComplete}
              itemsLeft={
                state.todos.filter((todo) => {
                  if (todo.completed === true) {
                    return false;
                  }
                  return true;
                }).length
              }
            />
          </section>
        </Route>
        <Route exact path="/SEres/OtherProjects/TodoApp/active">
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={(event) => handleChange(event)}
                value={state.userInput}
              />
            </header>
            <TodoList
              todos={state.todos.filter((todo) => {
                if (todo.completed === true) {
                  return false;
                }
                return true;
              })}
              //toggleComplete={toggleComplete}
              //deleteTodo={deleteTodo}
            />
            <Footer
              clearComplete={clearComplete}
              itemsLeft={
                state.todos.filter((todo) => {
                  if (todo.completed === true) {
                    return false;
                  }
                  return true;
                }).length
              }
            />
          </section>
        </Route>
        <Route exact path="/SEres/OtherProjects/TodoApp/completed">
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={(event) => handleChange(event)}
                value={state.userInput}
              />
            </header>
            <TodoList
              todos={state.todos.filter((todo) => {
                if (todo.completed === true) {
                  return true;
                }
                return false;
              })}
              //toggleComplete={toggleComplete}
              //deleteTodo={deleteTodo}
            />
            <Footer
              clearComplete={clearComplete}
              itemsLeft={
                state.todos.filter((todo) => {
                  if (todo.completed === true) {
                    return false;
                  }
                  return true;
                }).length
              }
            />
          </section>
        </Route>
      </TodosContext.Provider>
    </React.Fragment>
  );
}

export default TodoApp;
