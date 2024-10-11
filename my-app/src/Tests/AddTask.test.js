import { render, fireEvent } from '@testing-library/react';
import AddTask from '../Components/AddTask';

test('adds a task when the form is submitted', () => {
  const addTask = jest.fn();
  const { getByPlaceholderText, getByText } = render(<AddTask addTask={addTask} />);
  
  fireEvent.change(getByPlaceholderText('Add a task'), { target: { value: 'New Task' } });
  fireEvent.click(getByText('Add'));
  
  expect(addTask).toHaveBeenCalledWith('New Task');
});
