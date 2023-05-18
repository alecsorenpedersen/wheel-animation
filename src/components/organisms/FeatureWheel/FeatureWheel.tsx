'use client';

import Wheel from '../../../components/atoms/Wheel/Wheel';
import FeatureCard from '../../../components/molecules/FeaturesCard/FeatureCard';

import { ButtonIdentifier, FeatureWheelProps } from '@/types';
import { featureData } from './data';
import { containerStyle, wheelWrapperStyle } from './styles';

const FeatureWheel = ({ activeIcon, setActiveIcon }: FeatureWheelProps) => {
	const handleClick = (buttonIdentifier: ButtonIdentifier) => {
		setActiveIcon([buttonIdentifier]);
	};

	return (
		<div data-testid='feature-wheel' style={containerStyle}>
			<Wheel />
			<div style={wheelWrapperStyle}>
				{featureData.map(({ identifier, icon: Icon, text, position }) => (
					<div style={{ ...position, margin: '8px' }} key={identifier}>
						<FeatureCard
							isActive={activeIcon.includes(identifier)}
							text={text}
							icon={Icon}
							onClick={() => handleClick(identifier)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeatureWheel;
