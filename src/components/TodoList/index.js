import { Button, Col, Input, Row, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, changeStatusTodo } from '../../store/actions';
import { todosRemainingSelector } from '../../store/selectors';
import Todo from '../Todo';

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todosRemainingSelector);
  const [enteredInput, setEnteredInput] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('Medium');

  const handleEnteredChange = e => {
    setEnteredInput(e.target.value);
  };

  const handleSelectedChange = prioriry => {
    setSelectedPriority(prioriry);
  };

  const handleAddTodoClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: enteredInput,
        priority: selectedPriority,
        completed: false,
      })
    );
    setEnteredInput('');
    setSelectedPriority('Medium');
  };

  const handleChangeStatus = id => {
    dispatch(changeStatusTodo(id));
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => (
          <Todo
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
            id={todo.id}
            key={todo.id}
            onChangeStatus={handleChangeStatus}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={enteredInput} onChange={handleEnteredChange} />
          <Select
            defaultValue="Medium"
            value={selectedPriority}
            onChange={handleSelectedChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodoClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
