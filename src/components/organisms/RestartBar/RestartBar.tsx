const RestartBar = () => {
	return (
		<div
			className='w-full bg-gray-300 h-10 flex items-center justify-center'
			style={{
				position: 'fixed',
				bottom: 0,
				left: 0,
				background: ' rgb(243, 243, 243)',
				height: '80px',
			}}
			data-testid='restart-bar'>
			<span className='text-gray-700 text-lg'>Press R to Reset</span>
		</div>
	);
};

export default RestartBar;
