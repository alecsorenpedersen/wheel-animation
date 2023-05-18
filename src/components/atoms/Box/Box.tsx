import { InfoBoxProps } from '@/types';

interface BoxProps extends InfoBoxProps {
	isActive: boolean;
	testId?: string; // New prop for testId
}

const Box = ({ children, isActive, testId }: BoxProps) => {
	return (
		<div
			style={{
				width: '277px',
				height: '80px',
				padding: '24px 32px',
				gap: '16px',
				filter: isActive ? 'none' : 'blur(2px)',
				transition: 'filter 0.3s',
				background: ' #F3F3F3',
			}}
			className='bg-gray-200 rounded-lg flex flex-row items-center'
			data-testid={testId || 'grey-box'}>
			{children}
		</div>
	);
};

export default Box;
