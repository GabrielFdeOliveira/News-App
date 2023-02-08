import { render, screen } from "@testing-library/react";
import Card from '../../src/components/Card/Card';

/*I have just learned that when a component has props we need to mock that data otherwise the test fails.*/
describe('<Card />', () => {
    it('should be on the screen', () => {
const news = [{
        image: 'https://image.jpg',
        title: 'Title',        
        description: 'Description',        
        url: 'https://url.com'
    }];
    render(<Card news={news} />);
    
    screen.debug()

    expect(screen.getByText('Read More')).toBeInTheDocument();
    });
  });
  