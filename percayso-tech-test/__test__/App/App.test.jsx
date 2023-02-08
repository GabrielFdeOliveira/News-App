import { render, screen } from '@testing-library/react'
import App from '../../src/components/App/App'

/* I have followed a tutorial to config jest, babel and the mock files, it's all working as it should but I don't really understand what those configs are doing. I also understand that my tests are shallow, I'd like to test if the fetch requests are being fired and if the response is what I expect it to be but my knowledge is not there yet. */

describe('<App/>', () => {
    it('should display the heading', () => {
        render(<App/>)

        screen.debug()
        
        expect(screen.getByRole('heading', {name: 'GNews API tech test'}))
        .toBeInTheDocument()
    });
})