import { render, fireEvent } from '@testing-library/react';
import TaskList from '../Components/TaskList';

test('toggles task completion', () => {
  const toggleTaskCompletion = jest.fn();
  const tasks = [{ id: 1, text: 'Task 1', completed: false }];
  
  const { getByRole } = render(
    <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
  );
  
  fireEvent.click(getByRole('checkbox'));
  
  expect(toggleTaskCompletion).toHaveBeenCalledWith(1);
});

test('deletes a task', () => {
  const deleteTask = jest.fn();
  const tasks = [{ id: 1, text: 'Task 1', completed: false }];
  
  const { getByText } = render(
    <TaskList tasks={tasks} deleteTask={deleteTask} />
  );
  
  fireEvent.click(getByText('Delete'));
  
  expect(deleteTask).toHaveBeenCalledWith(1);
});
