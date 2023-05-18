import {
	CameraIcon,
	GPSNavIcon,
	NoiseCancelIcon,
	WaterproofIcon,
} from '../../../components/atoms/icons';
import { ButtonIdentifier, FeatureCardProps } from '@/types';

export const featureData: FeatureCardProps[] = [
	{
		identifier: 'NoiseCancelIcon' as ButtonIdentifier,
		icon: NoiseCancelIcon,
		text: 'Noise Canceling Technology',
		position: { gridRow: '1', gridColumn: '2' },
	},
	{
		identifier: 'WaterproofIcon' as ButtonIdentifier,
		icon: WaterproofIcon,
		text: 'Waterproof Design',
		position: { gridRow: '2', gridColumn: '3' },
	},
	{
		identifier: 'GPSNavIcon' as ButtonIdentifier,
		icon: GPSNavIcon,
		text: 'GPS Navigation System',
		position: { gridRow: '3', gridColumn: '2' },
	},
	{
		identifier: 'CameraIcon' as ButtonIdentifier,
		icon: CameraIcon,
		text: 'High Resolution Camera',
		position: { gridRow: '2', gridColumn: '1' },
	},
];
