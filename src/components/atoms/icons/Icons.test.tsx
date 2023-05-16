import React from 'react';
import { render } from '@testing-library/react';
import {
	CameraIcon,
	GPSNavIcon,
	NoiseCancelIcon,
	ShutterIcon,
	SoundIcon,
	DeviceIcon,
	TravelIcon,
} from './Icons';

describe('Icons', () => {
	it('should render CameraIcon without errors', () => {
		const { getByTestId } = render(<CameraIcon />);
		expect(getByTestId('camera-icon')).toBeInTheDocument();
	});

	it('should render GPSNavIcon without errors', () => {
		const { getByTestId } = render(<GPSNavIcon />);
		expect(getByTestId('gps-nav-icon')).toBeInTheDocument();
	});

	it('should render NoiseCancelIcon without errors', () => {
		const { getByTestId } = render(<NoiseCancelIcon />);
		expect(getByTestId('noise-cancel-icon')).toBeInTheDocument();
	});

	it('should render ShutterIcon without errors', () => {
		const { getByTestId } = render(<ShutterIcon />);
		expect(getByTestId('shutter-icon')).toBeInTheDocument();
	});

	it('should render SoundIcon without errors', () => {
		const { getByTestId } = render(<SoundIcon />);
		expect(getByTestId('sound-icon')).toBeInTheDocument();
	});

	it('should render DeviceIcon without errors', () => {
		const { getByTestId } = render(<DeviceIcon />);
		expect(getByTestId('device-icon')).toBeInTheDocument();
	});

	it('should render TravelIcon without errors', () => {
		const { getByTestId } = render(<TravelIcon />);
		expect(getByTestId('travel-icon')).toBeInTheDocument();
	});

	it('should render WaterproofIcon without errors', () => {
		const { getByTestId } = render(<TravelIcon />);
		expect(getByTestId('waterproof-icon')).toBeInTheDocument();
	});
});
