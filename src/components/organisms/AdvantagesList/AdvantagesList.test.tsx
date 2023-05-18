import React from 'react';
import { render } from '@testing-library/react';
import AdvantagesCard from '../../molecules/AdvantagesCard/AdvantagesCard';
import AdvantagesList from './AdvantagesList';

jest.mock('../../molecules/AdvantagesCard/AdvantagesCard');

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
});
