import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList';

describe('UserList', () => {
  it('should render list of users', () => {
    const users = [
      { id: 1, name: "Edawg" },
      { id: 2, name: "John" }
    ];
    render(<UserList
      users={users}
    />)
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
    const lis = screen.getAllByRole('listitem');
    expect(lis).toHaveLength(users.length);
    users.forEach(user => {
      const link = screen.getByText(user.name);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/users/${user.id}`);
    })

  })
  it('should render no users available when users is empty', () => {
    render(<UserList
      users={[]}
    />)
    expect(screen.getByText("No users available.")).toBeInTheDocument();
  })
})