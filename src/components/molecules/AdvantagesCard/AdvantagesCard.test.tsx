import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdvantagesCard from './AdvantagesCard';

// Setup function for cleaner tests
const setup = (props = {}) => {
	return render(
		<AdvantagesCard
			isActive={false}
			onClick={function (): void {
				throw new Error('Function not implemented.');
			}}
			text='Test text'
			animatedText='Animated text'
			icon={() => <div />}
			{...props}
		/>,
	);
};

describe('AdvantagesCard', () => {
	beforeAll(() => {
		jest.useFakeTimers();
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	it('renders without crashing', () => {
		const { getByText } = setup();
		expect(getByText('Test text')).toBeInTheDocument();
	});

	it('does not show the animated text when not active', () => {
		const { getByText } = setup({ isActive: false });
		expect(getByText('Animated text')).toHaveStyle('opacity: 0');
		expect(getByText('Animated text')).toHaveStyle(
			'transform: translateX(-100%)',
		);
	});

	it('shows the animated text when active', () => {
		const { getByText } = setup({ isActive: true });
		jest.advanceTimersByTime(500);
		expect(getByText('Animated text')).toHaveStyle('opacity: 1');
		expect(getByText('Animated text')).toHaveStyle('transform: translateX(0)');
	});
});
