import { render, screen } from '@testing-library/react';
import RestartBar from './RestartBar';

describe('RestartBar', () => {
	it('should render the RestartBar component', () => {
		render(<RestartBar />);

		const restartBarElement = screen.getByTestId('restart-bar');
		expect(restartBarElement).toBeInTheDocument();
	});

	it('should display the correct text', () => {
		render(<RestartBar />);

		const textElement = screen.getByText('Press R to Reset');
		expect(textElement).toBeInTheDocument();
	});

	it('should have the correct styling', () => {
		render(<RestartBar />);

		const restartBarElement = screen.getByTestId('restart-bar');
		const { style } = restartBarElement;

		expect(style.position).toBe('fixed');
		expect(style.bottom).toBe('0px');
		expect(style.left).toBe('0px');
		expect(style.background).toBe('rgb(243, 243, 243)');
		expect(style.height).toBe('80px');
	});
});
