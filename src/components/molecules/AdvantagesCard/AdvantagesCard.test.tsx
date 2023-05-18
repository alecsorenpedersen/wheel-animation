import { render, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdvantagesCard from './AdvantagesCard';

afterEach(cleanup);

const mockIcon = () => <div>Icon</div>;

describe('AdvantagesCard', () => {
	beforeAll(() => {
		jest.useFakeTimers();
	});

	it('renders without crashing', () => {
		const { container } = render(
			<AdvantagesCard
				text='Test text'
				animatedText='Animated text'
				icon={mockIcon}
				onClick={() => {}}
				isActive={false}
				identifier={''}
			/>,
		);
		expect(container.firstChild).not.toBe(null);
	});

	it('renders the static text correctly', () => {
		const { getByText } = render(
			<AdvantagesCard
				text='Test text'
				animatedText='Animated text'
				icon={mockIcon}
				onClick={() => {}}
				isActive={false}
				identifier={''}
			/>,
		);
		expect(getByText('Test text')).toBeInTheDocument();
	});

	it('renders the animated text with correct initial opacity', () => {
		const { getByText } = render(
			<AdvantagesCard
				text='Test text'
				animatedText='Animated text'
				icon={mockIcon}
				onClick={() => {}}
				isActive={false}
				identifier={''}
			/>,
		);
		const animatedText = getByText('Animated text');
		expect(animatedText).toBeInTheDocument();
		expect(animatedText.style.opacity).toBe('0');
	});

	it('changes the animated text opacity when isActive prop changes', () => {
		const { getByText, rerender } = render(
			<AdvantagesCard
				text='Test text'
				animatedText='Animated text'
				icon={mockIcon}
				onClick={() => {}}
				isActive={false}
				identifier={''}
			/>,
		);
		const animatedText = getByText('Animated text');
		expect(animatedText.style.opacity).toBe('0');
		rerender(
			<AdvantagesCard
				text='Test text'
				animatedText='Animated text'
				icon={mockIcon}
				onClick={() => {}}
				isActive={true}
				identifier={''}
			/>,
		);
		act(() => {
			// to account for the delay using setTimeout
			jest.advanceTimersByTime(500);
		});
		expect(animatedText.style.opacity).toBe('1');
	});

	afterAll(() => {
		jest.useRealTimers();
	});
});
