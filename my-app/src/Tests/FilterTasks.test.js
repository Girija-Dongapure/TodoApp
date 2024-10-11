import { render, fireEvent } from '@testing-library/react';
import FilterTasks from '../Components/FilterTasks';

test('filters tasks by completed and pending', () => {
  const setFilter = jest.fn();
  const { getByText } = render(<FilterTasks setFilter={setFilter} />);
  
  fireEvent.click(getByText('Completed'));
  expect(setFilter).toHaveBeenCalledWith('Completed');
  
  fireEvent.click(getByText('Pending'));
  expect(setFilter).toHaveBeenCalledWith('Pending');
});
