function Wheel() {
	return (
		<div
			style={{
				position: 'relative',
				width: '527px',
				height: '368px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<div
				style={{
					position: 'absolute',
					width: '256px',
					height: '256px',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
				className='bg-gray-200 rounded-full flex items-center justify-center'>
				<div
					style={{ width: '162px', height: '162px' }}
					className='bg-white rounded-full'></div>
			</div>
		</div>
	);
}
export default Wheel;
