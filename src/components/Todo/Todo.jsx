import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { changeTextTodo } from 'redux/todosSlice';

export const Todo = ({ text, counter, onClick, id }) => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(changeTextTodo({id, text: e.currentTarget.elements.text.value}))
  }
  
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => onClick(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <form onSubmit={onSubmit}>
            <input type="text" name='text' />
         </form>
      </TodoWrapper>
    </>
  );
};
