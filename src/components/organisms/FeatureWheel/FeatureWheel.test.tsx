import { render, fireEvent } from '@testing-library/react';
import FeatureWheel from './FeatureWheel';

// Mocked icons for testing
jest.mock('../../../components/atoms/icons', () => ({
	NoiseCancelIcon: 'mocked-noise-cancel-icon',
	WaterproofIcon: 'mocked-waterproof-icon',
	GPSNavIcon: 'mocked-gps-nav-icon',
	CameraIcon: 'mocked-camera-icon',
}));

describe('FeatureWheel', () => {
	it('should render the FeatureWheel component correctly', () => {
		const { getByTestId } = render(
			<FeatureWheel activeIcon={[]} setActiveIcon={() => {}} />,
		);
		const featureWheelElement = getByTestId('feature-wheel');
		expect(featureWheelElement).toBeInTheDocument();
	});

	it('should render the feature cards with the correct text', () => {
		const { getByText } = render(
			<FeatureWheel activeIcon={[]} setActiveIcon={() => {}} />,
		);
		expect(getByText('Noise Canceling Technology')).toBeInTheDocument();
		expect(getByText('Waterproof Design')).toBeInTheDocument();
		expect(getByText('GPS Navigation System')).toBeInTheDocument();
		expect(getByText('High Resolution Camera')).toBeInTheDocument();
	});

	it('should set the active icon when a feature card is clicked', () => {
		const setActiveIconMock = jest.fn();
		const { getByText } = render(
			<FeatureWheel activeIcon={[]} setActiveIcon={setActiveIconMock} />,
		);

		fireEvent.click(getByText('Noise Canceling Technology'));
		expect(setActiveIconMock).toHaveBeenCalledWith(['NoiseCancelIcon']);

		fireEvent.click(getByText('Waterproof Design'));
		expect(setActiveIconMock).toHaveBeenCalledWith(['WaterproofIcon']);

		fireEvent.click(getByText('GPS Navigation System'));
		expect(setActiveIconMock).toHaveBeenCalledWith(['GPSNavIcon']);

		fireEvent.click(getByText('High Resolution Camera'));
		expect(setActiveIconMock).toHaveBeenCalledWith(['CameraIcon']);
	});
});
