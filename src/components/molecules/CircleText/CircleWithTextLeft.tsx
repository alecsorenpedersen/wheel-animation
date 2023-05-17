import TextBox from '@/components/atoms/Text/TextBox';
import IconWrapper from '@/components/atoms/icons/IconWrapper';
import React from 'react';

interface CircleWithTextProps {
	isActive: boolean;
	icon: React.ElementType;
	text: string;
	style?: React.CSSProperties;
}

const CircleWithTextLeft = ({
	text,
	icon,
	isActive,
	style,
}: CircleWithTextProps) => {
	return (
		<button
			style={{
				width: '206px',
				height: '90px',
				padding: '0px',
			}}
			className='flex flex-row-reverse items-center'>
			<IconWrapper
				isActive={isActive}
				icon={icon}
				className={`rounded-full flex items-center justify-center ${
					isActive ? 'bg-orange-500' : 'bg-gray-500'
				}`}
			/>
			<TextBox
				style={{
					width: '165px',
					height: '30px',
					fontFamily: 'Montserrat',
					fontStyle: 'normal',
					fontWeight: 500,
					fontSize: '12px',
					lineHeight: '15px',
					color: '#000000',
					flex: 'none',
					order: 1,
					flexGrow: 1,
					textAlign: 'right',
				}}
				text={text}
			/>
		</button>
	);
};

export default CircleWithTextLeft;
