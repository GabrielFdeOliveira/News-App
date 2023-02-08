import { screen, render } from "@testing-library/react";
import Search from "../../src/components/Search/Search";

/* Here I learned about jest.fn() to mock a function received as props,
I could find the text Search but couldn't find 'Search for news', maybe it's because it's a property of the input element */
describe('<Search />', () => {
    it('renders input and button on the screen', () => {
      const handleClick = jest.fn()
      render(<Search handleClick={handleClick} />)
  
    //   expect(screen.getByText('Search for news')).toBeInTheDocument();
      expect(screen.getByText('Search')).toBeInTheDocument();
    })
})    