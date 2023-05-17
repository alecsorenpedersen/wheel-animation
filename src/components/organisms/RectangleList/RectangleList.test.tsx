import React from 'react';
import { render } from '@testing-library/react';
import RectangleList from './RectangleList';
import GreyRectangle from '../../molecules/GreyRectangle/GreyRectangle';

jest.mock('../../molecules/GreyRectangle/GreyRectangle');

describe('RectangleList', () => {
	const copyData = [
		{
			text: 'Capture stunning, detailed photos and videos',
			icon: 'ShutterIcon',
		},
		{
			text: 'Immerse yourself in pure, uninterrupted sound',
			icon: 'SoundIcon',
		},
		{
			text: 'Use the device worry-free in various environments',
			icon: 'DeviceIcon',
		},
		{
			text: 'Easily find your way to any destination',
			icon: 'TravelIcon',
		},
	];

	const rectangleListStyle = {
		width: '389px',
		height: '368px',
		order: 1,
		flexGrow: 0,
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders the correct number of GreyRectangle components', () => {
		render(<RectangleList />);
		expect(GreyRectangle).toHaveBeenCalledTimes(copyData.length);
	});
});
