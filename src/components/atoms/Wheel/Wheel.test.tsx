import { render, screen } from '@testing-library/react';
import Wheel from './Wheel';

describe('Wheel', () => {
	it('should render the Wheel component', () => {
		render(<Wheel />);

		const wheelElement = screen.getByTestId('wheel');
		expect(wheelElement).toBeInTheDocument();
	});
});
