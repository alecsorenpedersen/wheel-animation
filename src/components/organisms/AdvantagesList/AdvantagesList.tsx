import { AdvantagesListProps, ButtonIdentifier } from '@/types';
import AdvantagesCard from '../../molecules/AdvantagesCard/AdvantagesCard';
import { copyData } from './data';
import { rectangleListStyle } from './styles';

const AdvantagesList = ({ activeIcon, setActiveIcon }: AdvantagesListProps) => {
	const handleIconClick = (icon: ButtonIdentifier) => {
		if (activeIcon.includes(icon)) {
			setActiveIcon(activeIcon.filter((item) => item !== icon));
		} else {
			setActiveIcon([...activeIcon, icon]);
		}
	};

	return (
		<div
			style={rectangleListStyle}
			className='flex flex-col items-start gap-4 p-0'
			data-testid='advantages-list'>
			{copyData.map(({ text, icon: Icon, identifier, animatedText }) => (
				<AdvantagesCard
					key={identifier}
					text={text}
					animatedText={animatedText}
					isActive={activeIcon.includes(identifier)}
					icon={Icon}
					onClick={() => handleIconClick(identifier)}
				/>
			))}
		</div>
	);
};

export default AdvantagesList;
