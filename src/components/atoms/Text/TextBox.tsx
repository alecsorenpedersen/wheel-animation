import { TextBoxProps } from '@/types';

const TextBox = ({ text, style }: TextBoxProps) => {
	return (
		<p
			style={{
				...style,
				fontFamily: 'Montserrat',
				fontStyle: 'normal',
				fontWeight: 500,
				fontSize: '12px',
				lineHeight: '15px',
				color: '#000000',
				flex: 'none',
				order: 1,
				flexGrow: 0,
			}}>
			{text}
		</p>
	);
};

export default TextBox;
