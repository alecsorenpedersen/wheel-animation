import { containerStyle, wheelStyle, innerCircleStyle } from './styles';

const Wheel = () => {
	return (
		<div style={containerStyle} data-testid='wheel-container'>
			<div
				style={wheelStyle}
				className='bg-gray-200 rounded-full flex items-center justify-center'
				data-testid='wheel'>
				<div
					style={innerCircleStyle}
					className='bg-white rounded-full'
					data-testid='inner-circle'></div>
			</div>
		</div>
	);
};

export default Wheel;
