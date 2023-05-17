import { InfoBoxProps } from '@/types';

const GreyBox = ({ children }: InfoBoxProps) => {
	return (
		<div
			style={{
				width: '277px',
				height: '80px',
				padding: '24px 32px',
				gap: '16px',
			}}
			className='bg-gray-200 rounded-lg flex flex-row items-center'
			data-testid='grey-box'>
			{children}
		</div>
	);
};

export default GreyBox;
