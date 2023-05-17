'use client';
import { gsap } from 'gsap';
import Wheel from '@/components/atoms/Wheel/Wheel';
import {
	CameraIcon,
	GPSNavIcon,
	NoiseCancelIcon,
	WaterproofIcon,
} from '@/components/atoms/icons/Icons';
import CircleWithTextRight from '@/components/molecules/CircleText/CircleTextRight';
import React, { useRef, useState } from 'react';

const noiseCopy = 'Noise Canceling Technology';
const cameraCopy = 'High Resolution Camera';
const gpsNav = 'GPS Navigation System';
const waterproofCopy = 'Waterproof Design';

type ButtonIdentifier =
	| 'NoiseCancelIcon'
	| 'WaterproofIcon'
	| 'GPSNavIcon'
	| 'CameraIcon';

const WheelOrganism = () => {
	const [activeIcon, setActiveIcon] = React.useState<Array<string>>([
		'NoiseCancelIcon',
		'WaterproofIcon',
		'GPSNavIcon',
		'CameraIcon',
	]);

	const handleClick = (buttonIdentifier: ButtonIdentifier) => {
		setActiveIcon([buttonIdentifier]);
	};
	React.useEffect(() => {
		console.log(activeIcon);
	}, [activeIcon]);
	return (
		<div
			style={{
				position: 'relative',
				width: '527px',
				height: '368px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				marginRight: '60px',
			}}>
			<Wheel />
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					display: 'grid',
					gridTemplateRows: '106px 106px 106px',
					gridTemplateColumns: '106px 106px 106px',
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					marginTop: '18px',
				}}>
				<div
					style={{
						gridRow: '1',
						gridColumn: '2',
						margin: '8px',
					}}>
					<CircleWithTextRight
						isActive={activeIcon.includes('NoiseCancelIcon')}
						text={noiseCopy}
						icon={NoiseCancelIcon}
						onClick={() => handleClick('NoiseCancelIcon')}
					/>
				</div>
				<div style={{ gridRow: '2', gridColumn: '3', margin: '8px' }}>
					<CircleWithTextRight
						isActive={activeIcon.includes('WaterproofIcon')}
						text={waterproofCopy}
						icon={WaterproofIcon}
						onClick={() => handleClick('WaterproofIcon')}
					/>
				</div>

				<div
					style={{
						gridRow: '3',
						gridColumn: '2',
						margin: '8px',
					}}>
					<CircleWithTextRight
						isActive={activeIcon.includes('GPSNavIcon')}
						text={gpsNav}
						icon={GPSNavIcon}
						onClick={() => handleClick('GPSNavIcon')}
					/>
				</div>
				<div style={{ gridRow: '2', gridColumn: '1', margin: '8px' }}>
					<CircleWithTextRight
						isActive={activeIcon.includes('CameraIcon')}
						text={cameraCopy}
						icon={CameraIcon}
						onClick={() => handleClick('CameraIcon')}
					/>
				</div>
			</div>
		</div>
	);
};
export default WheelOrganism;
