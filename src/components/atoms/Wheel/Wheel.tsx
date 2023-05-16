import React from 'react';

const Wheel = () => {
	return (
		<div
			className='relative'
			style={{
				height: '256px',
				width: '256px',
				left: '132px',
				top: '17px',
			}}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 256 256'
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
				}}>
				<ellipse
					cx='128'
					cy='128'
					rx='70'
					ry='70'
					fill='rgba(243, 243, 243, 1)'
				/>
				<ellipse cx='128' cy='128' rx='50' ry='50' fill='#ffffff' />
			</svg>
		</div>
	);
};

export default Wheel;
