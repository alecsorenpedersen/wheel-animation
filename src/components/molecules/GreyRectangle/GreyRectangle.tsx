import { GreyRectangleProps } from '../../../types';
import GreyBox from '../../../components/atoms/Box/Box';
import TextBox from '../../../components/atoms/Text/TextBox';
import IconWrapper from '../../../components/atoms/icons/IconWrapper';

const GreyRectangle = ({ text, isActive, icon }: GreyRectangleProps) => {
	return (
		<GreyBox>
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
		</GreyBox>
	);
};

export default GreyRectangle;
