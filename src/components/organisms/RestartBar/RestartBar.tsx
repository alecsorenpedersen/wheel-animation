const RestartBar = () => {
	return (
		<div
			className='w-full bg-gray-300 h-10 flex items-center justify-center'
			style={{
				position: 'fixed',
				bottom: 0,
				left: 0,
				background: ' #F3F3F3',
				height: '80px',
			}}>
			<span className='text-gray-700 text-lg'>Press R to Reset</span>
		</div>
	);
};

export default RestartBar;
