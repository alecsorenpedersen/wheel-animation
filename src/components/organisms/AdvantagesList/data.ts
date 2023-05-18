import { ButtonIdentifier } from '@/types';
import {
	DeviceIcon,
	ShutterIcon,
	SoundIcon,
	TravelIcon,
} from '../../atoms/icons';

export const copyData = [
	{
		text: 'Capture stunning, detailed photos and videos',
		animatedText: 'Preserve Memories Create lasting Impressions',
		icon: ShutterIcon,
		identifier: 'CameraIcon' as ButtonIdentifier,
	},
	{
		text: 'Immerse yourself in pure, uninterrupted sound',
		animatedText: 'Block out background noise Enhance your productivity',
		icon: SoundIcon,
		identifier: 'NoiseCancelIcon' as ButtonIdentifier,
	},
	{
		text: 'Use the device worry-free in various environments',
		animatedText: 'Withstand water exposire Provisding peace of mind',
		icon: DeviceIcon,
		identifier: 'WaterproofIcon' as ButtonIdentifier,
	},
	{
		text: 'Easily find your way to any destination',
		animatedText: 'Seamlessly Navigate Save time, reduce stress',
		icon: TravelIcon,
		identifier: 'GPSNavIcon' as ButtonIdentifier,
	},
];
