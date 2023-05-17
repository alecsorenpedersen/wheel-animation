import { render, fireEvent } from '@testing-library/react';
import CircleWithTextRight from './CircleTextRight';

describe('CircleWithTextRight', () => {
	const mockOnClick = jest.fn();

	const defaultProps = {
		text: 'Test Text',
		icon: () => <div>Test Icon</div>,
		isActive: false,
		style: {},
		onClick: mockOnClick,
	};

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('renders the component correctly', () => {
		const { getByText, getByTestId } = render(
			<CircleWithTextRight {...defaultProps} />,
		);

		const textElement = getByText('Test Text');
		const iconElement = getByTestId('icon-wrapper');

		expect(textElement).toBeInTheDocument();
		expect(iconElement).toBeInTheDocument();
		expect(iconElement).toHaveClass('bg-gray-500');

		fireEvent.click(iconElement);

		expect(mockOnClick).toHaveBeenCalled();
	});

	it('renders the component as active', () => {
		const { getByTestId } = render(
			<CircleWithTextRight {...defaultProps} isActive={true} />,
		);

		const iconElement = getByTestId('icon-wrapper');

		expect(iconElement).toHaveClass('bg-orange-500');
	});
});
