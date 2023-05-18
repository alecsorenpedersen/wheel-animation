import { useState, useEffect } from 'react';
import { AdvantagesCardProps } from '../../../types';
import Box from '../../atoms/Box/Box';
import TextBox from '../../atoms/TextBox/TextBox';
import { IconWrapper } from '../../atoms/icons';

const AdvantagesCard = ({
	text,
	isActive,
	icon,
	onClick,
	animatedText,
}: AdvantagesCardProps) => {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		if (isActive && !animate) {
			setAnimate(true);
		} else if (!isActive && animate) {
			setAnimate(false);
		}
	}, [isActive]);

	return (
		<Box isActive={isActive}>
			<IconWrapper
				isActive={isActive}
				icon={icon}
				className={`rounded-full flex items-center justify-center`}
			/>
			<TextBox
				style={{
					width: '165px',
					height: '30px',
				}}
				text={text}
			/>
			<TextBox
				style={{
					width: '165px',
					height: '30px',
					marginLeft: '50px',
					opacity: animate ? 1 : 0,
					transform: animate ? 'translateX(0)' : 'translateX(-100%)',
					transition: 'opacity 0.5s, transform 0.5s',
				}}
				text={animatedText}
			/>
		</Box>
	);
};

export default AdvantagesCard;
