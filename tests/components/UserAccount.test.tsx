import UserAccount from "../../src/components/UserAccount";
import { render, screen } from '@testing-library/react'

describe('UserAccount', () => {
  it("should render heading and username", () => {
    render(<UserAccount
      user={{
        id: 1,
        name: "Edawg",
        isAdmin: false
      }}
    />)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("User Profile");
    const strong = screen.getByText("Name:");
    expect(strong).toBeInTheDocument();
    const username = screen.getByText("Edawg");
    expect(username).toBeInTheDocument();
  }
  )
  it("should not render edit button when user is not admin", () => {
    render(<UserAccount
      user={{
        id: 1,
        name: "Edawg",
        isAdmin: false
      }}
    />)
    // ! kal onge expect element gaada di dom, pakai queryByRole, kalo ada pakai getByRole
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
    const username = screen.getByText("Edawg");
    expect(username).toBeInTheDocument();
  })
  it("should render edit button when user is admin", () => {
    render(<UserAccount
      user={{
        id: 1,
        name: "Edawg",
        isAdmin: true
      }}
    />)
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Edit");
    const username = screen.getByText("Edawg");
    expect(username).toBeInTheDocument();
  }
  )
})
