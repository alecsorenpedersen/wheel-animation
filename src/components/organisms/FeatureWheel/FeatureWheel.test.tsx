import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureWheel from './FeatureWheel';

// This setup function helps to reduce the repetitive code and make tests cleaner.
const setup = (props = {}) => {
	const setActiveIconMock = jest.fn();
	const utils = render(
		<FeatureWheel
			activeIcon={[]}
			setActiveIcon={setActiveIconMock}
			{...props}
		/>,
	);
	const featureCards = utils.getAllByTestId('feature-card');

	return {
		setActiveIconMock,
		featureCards,
		...utils,
	};
};

describe('FeatureWheel', () => {
	it('renders without crashing', () => {
		const { getByTestId } = setup();
		expect(getByTestId('feature-wheel')).toBeInTheDocument();
	});
});
