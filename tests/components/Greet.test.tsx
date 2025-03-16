import { render, screen } from '@testing-library/react'
import Greet from "../../src/components/Greet";
import UserAccount from '../../src/components/UserAccount';
import UserList from '../../src/components/UserList';
describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    const name = "Edawg";
    render(<Greet
      name={name}
    />
    )
    // screen.debug();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(`Hello ${name}`);
  });
  it("should render login button when name is not provided", () => {
    render(<Greet
    />
    )
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Login");
  });
});
