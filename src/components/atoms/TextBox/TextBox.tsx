import { forwardRef, Ref, HTMLAttributes } from 'react';
import { TextBoxProps } from '@/types';

const TextBox = forwardRef<HTMLParagraphElement, TextBoxProps>(
	({ text, style }, ref: React.Ref<HTMLParagraphElement>) => {
		return (
			<p
				ref={ref}
				style={{
					...style,
					fontFamily: 'Montserrat',
					fontStyle: 'normal',
					fontWeight: 500,
					fontSize: '12px',
					color: '#000000',
					flex: 'none',
					order: 1,
					flexGrow: 0,
				}}>
				{text}
			</p>
		);
	},
);

TextBox.displayName = 'TextBox';

export default TextBox;
