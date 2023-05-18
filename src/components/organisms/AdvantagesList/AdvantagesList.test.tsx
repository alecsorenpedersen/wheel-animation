import { render, fireEvent } from '@testing-library/react';
import AdvantagesList from './AdvantagesList';
import { ButtonIdentifier } from '@/types';

jest.mock('../../molecules/AdvantagesCard/AdvantagesCard', () => {
	const MockAdvantagesCard = ({
		text,
		isActive,
		onClick,
	}: {
		text: string;
		isActive: boolean;
		onClick: () => void;
	}) => (
		<div onClick={onClick} data-testid={text}>
			{text}-{isActive ? 'active' : 'inactive'}
		</div>
	);
	return MockAdvantagesCard;
});

describe('AdvantagesList', () => {
	const setActiveIconMock = jest.fn();

	let activeIcon: ButtonIdentifier[];

	beforeEach(() => {
		activeIcon = ['CameraIcon'];
	});

	it('renders without crashing', () => {
		render(
			<AdvantagesList
				activeIcon={activeIcon}
				setActiveIcon={setActiveIconMock}
			/>,
		);
	});
	it('adds icon to active state on icon click when not already active', () => {
		setActiveIconMock.mockClear();
		activeIcon = [];

		const { getByTestId } = render(
			<AdvantagesList
				activeIcon={activeIcon}
				setActiveIcon={setActiveIconMock}
			/>,
		);

		const firstCardText = 'Capture stunning, detailed photos and videos';
		const firstCard = getByTestId(firstCardText);

		fireEvent.click(firstCard);

		expect(setActiveIconMock).toHaveBeenCalledWith(['CameraIcon']);
	});

	it('removes icon from active state on icon click when already active', () => {
		setActiveIconMock.mockClear();
		activeIcon = ['CameraIcon'];
		const { getByTestId } = render(
			<AdvantagesList
				activeIcon={activeIcon}
				setActiveIcon={setActiveIconMock}
			/>,
		);

		const firstCardText = 'Capture stunning, detailed photos and videos';
		const firstCard = getByTestId(firstCardText);

		fireEvent.click(firstCard);

		expect(setActiveIconMock).toHaveBeenCalledWith([]);
	});
});
