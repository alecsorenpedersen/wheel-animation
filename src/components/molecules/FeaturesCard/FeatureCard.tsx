import TextBox from '../../atoms/TextBox/TextBox';
import IconWrapper from '../../atoms/icons/IconWrapper';
import { FeaturesCardProps } from '@/types';
import { buttonStyle, circleStyle } from './styles';

const FeatureCard = ({
	text,
	icon: Icon,
	isActive,
	style,
	onClick,
}: FeaturesCardProps) => {
	const circleClassName = `rounded-full flex items-center justify-center ${
		isActive ? 'bg-orange-500' : 'bg-gray-500'
	} transform transition-transform duration-200 ease-in-out hover:translate-y-[-10px] hover:shadow-lg`;

	return (
		<button
			style={buttonStyle}
			className='flex flex-row items-center'
			onClick={onClick}
			data-testid='feature-card'>
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

export default FeatureCard;
