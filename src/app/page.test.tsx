import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
	it('renders without crashing', () => {
		render(<Home />);

		// Check for existence of one of the elements on the page
		const linkElement = screen.getByText(/Get started by editing/i);
		expect(linkElement).toBeInTheDocument();
	});
});
