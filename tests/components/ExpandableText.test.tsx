import { render, screen } from "@testing-library/react"
import ExpandableText from "../../src/components/ExpandableText"
import userEvent from "@testing-library/user-event"

describe('ExpandableText', () => {
  const text = "test"
  const limit = 3
  const truncatedText = text.substring(0, limit) + '...'


  const renderComponent = () => {

    render(<ExpandableText
      limit={limit}
      text={text}
    />)
    return {
      button: screen.getByRole('button'),
    }
  }
  it('should truncate text if limit greater than text length', () => {
    // ! ARRANGE
    const { button } = renderComponent()
    // ! ACT
    expect(screen.getByText(truncatedText)).toBeInTheDocument()
    // ! ASSERT
    expect(button).toHaveTextContent('Show More')
  })
  it('should expand text when show more button is clicked', async () => {
    const { button } = renderComponent()
    // ! ACT
    expect(screen.getByText(truncatedText)).toBeInTheDocument()
    // ! ASSERT
    expect(button).toHaveTextContent('Show More')
    const user = userEvent.setup()
    await user.click(button)
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(button).toHaveTextContent('Show Less')
  })
  it('should collapse text when show less button is clicked', async () => {
    const { button } = renderComponent()
    // ! ACT
    expect(screen.getByText(truncatedText)).toBeInTheDocument()
    expect(button).toHaveTextContent('Show More')
    const user = userEvent.setup()

    // ! ASSERT
    await user.click(button)
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(button).toHaveTextContent('Show Less')
    await user.click(button)
    expect(screen.getByText(truncatedText)).toBeInTheDocument()
    expect(button).toHaveTextContent('Show More')
  })
})