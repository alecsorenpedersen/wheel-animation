import { render, screen } from '@testing-library/react';
import TextBox from './TextBox';

describe('TextBox', () => {
	it('should render the TextBox component', () => {
		render(<TextBox text='Example Text' />);

		const textBoxElement = screen.getByText('Example Text');
		expect(textBoxElement).toBeInTheDocument();
	});
});
