import React from 'react';
import TextBox from '../../../components/atoms/Text/TextBox';
import IconWrapper from '../../../components/atoms/icons/IconWrapper';

interface CircleWithTextProps {
	isActive: boolean;
	icon: React.ElementType;
	text: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}

const buttonStyle: React.CSSProperties = {
	position: 'absolute',
	width: '206px',
	height: '90px',
	padding: '0px',
	gap: '16px',
};

const circleStyle: React.CSSProperties = {
	width: '100px',
	height: '30px',
	textAlign: 'left',
};

const CircleWithTextRight = ({
	text,
	icon: Icon,
	isActive,
	style,
	onClick,
}: CircleWithTextProps) => {
	const circleClassName = `rounded-full flex items-center justify-center ${
		isActive ? 'bg-orange-500' : 'bg-gray-500'
	}`;

	return (
		<button
			style={buttonStyle}
			className='flex flex-row items-center'
			onClick={onClick}>
			<IconWrapper
				isActive={isActive}
				icon={Icon}
				className={circleClassName}
				data-testid='icon-wrapper'
			/>
			<TextBox style={circleStyle} text={text} data-testid='text-box' />
		</button>
	);
};

export default CircleWithTextRight;
