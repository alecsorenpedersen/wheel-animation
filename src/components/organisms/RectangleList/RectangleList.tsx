import GreyRectangle from '../../molecules/GreyRectangle/GreyRectangle';
import { copyData } from './data';

const rectangleListStyle = {
	width: '389px',
	height: '368px',
	order: 1,
	flexGrow: 0,
};

const RectangleList = () => (
	<div
		style={rectangleListStyle}
		className='flex flex-col items-start gap-4 p-0'>
		{copyData.map(({ text, icon }) => (
			<GreyRectangle key={text} text={text} isActive={false} icon={icon} />
		))}
	</div>
);

export default RectangleList;
