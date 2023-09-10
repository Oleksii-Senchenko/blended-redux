import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { addTodo, filteredToDos } from 'redux/todosSlice';
import { useDispatch, useSelector } from 'react-redux';

export function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  // state = {
  //   todos: [],
  // };

  // componentDidMount() {
  //   const todos = JSON.parse(localStorage.getItem('todos'));

  //   if (todos) {
  //     this.setState(() => ({ todos }));
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   const { todos } = this.state;

  //   if (prevState.todos !== todos) {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }
  // }
  // const [todos, setTodods] = useState(() => {
  //   return JSON.parse(localStorage.getItem('todos')) || [];
  // });

  // useEffect(() => {
  //   // const todos = JSON.parse(localStorage.getItem('todos'));
  //   // console.log(todos);
  //   if (todos) {
  //     setTodods(todos);
  //   }
  // }, [todos]);

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  const transitionTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };
    // setTodods(todos => [...todos, todo]);
    dispatch(addTodo(todo));
  };

  const handleSubmit = data => {
    transitionTodo(data);
  };

  const deleteTodo = id => {
    dispatch(filteredToDos(id));

    // setTodods(filteredToDos);
    // this.setState(prevState => ({
    //   todos: prevState.todos.filter(todo => todo.id !== id),
    // }));
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    onClick={deleteTodo}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
