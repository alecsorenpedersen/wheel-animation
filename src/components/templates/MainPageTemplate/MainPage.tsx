'use client';
import { useEffect, useState } from 'react';
import FeatureWheel from '../../../components/organisms/FeatureWheel/FeatureWheel';
import AdvantagesList from '../../../components/organisms/AdvantagesList/AdvantagesList';
import { ButtonIdentifier } from '../../../types';
import RestartBar from '../../../components/organisms/RestartBar/RestartBar';

const MainPage = () => {
	const [activeIcon, setActiveIcon] = useState<ButtonIdentifier[]>([
		'NoiseCancelIcon',
		'WaterproofIcon',
		'GPSNavIcon',
		'CameraIcon',
	]);

	useEffect(() => {
		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === 'r' || event.key === 'R') {
				setActiveIcon([
					'NoiseCancelIcon',
					'WaterproofIcon',
					'GPSNavIcon',
					'CameraIcon',
				]);
			}
		};
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	}, []);

	return (
		<div className='flex flex-row items-center justify-center min-h-screen'>
			<div className='flex justify-center my-8'>
				<FeatureWheel activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
				<AdvantagesList activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
				<RestartBar />
			</div>
		</div>
	);
};

export default MainPage;
