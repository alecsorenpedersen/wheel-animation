// Import required modules
import WheelOrganism from '@/components/organisms/WheelOrganism/WheelOrganism';
import RectangleList from '@/components/organisms/RectangleList/RectangleList';

const MainPage = () => {
	return (
		<div className='flex flex-row items-center justify-center min-h-screen'>
			<div className='flex justify-center my-8'>
				<WheelOrganism />
				<RectangleList />
			</div>
		</div>
	);
};

export default MainPage;
