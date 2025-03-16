import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'
describe('TermsAndConditions', () => {
  it('should render correct text and initial state', () => {
    render(<TermsAndConditions />)
    const heading = screen.getByRole('heading', { name: /Terms & Conditions/i })
    expect(heading).toBeInTheDocument()

    const cbx = screen.getByRole("checkbox");
    expect(cbx).toBeInTheDocument();
    expect(cbx).not.toBeChecked();

    const submitBtn = screen.getByRole("button", { name: /Submit/i });
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
  })
  it("should enable submit button when checkbox is checked", async () => {
    // ! ARRANGE
    render(<TermsAndConditions />);
    // ! ACT
    const cbx = screen.getByRole("checkbox");
    const submitBtn = screen.getByRole("button", { name: /Submit/i });
    const user = userEvent.setup();
    await user.click(cbx);
    // ! ASSERT
    expect(cbx).toBeChecked();
    expect(submitBtn).toBeEnabled();
  });
  it("should disable submit button when checkbox is unchecked", async () => {
    // ! ARRANGE
    render(<TermsAndConditions />);
    // ! ACT
    const cbx = screen.getByRole("checkbox");
    const submitBtn = screen.getByRole("button", { name: /Submit/i });
    const user = userEvent.setup();
    await user.click(cbx);
    await user.click(cbx);
    // ! ASSERT
    expect(cbx).not.toBeChecked();
    expect(submitBtn).toBeDisabled();
  });

})