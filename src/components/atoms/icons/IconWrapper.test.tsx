import React from 'react';
import { render } from '@testing-library/react';
import IconWrapper from './IconWrapper';

describe('IconWrapper', () => {
	it('should render the IconWrapper component with className prop', () => {
		const className = 'custom-icon-wrapper';
		const { getByTestId } = render(
			<IconWrapper className={className} isActive={false} icon={'symbol'} />,
		);
		const iconWrapperElement = getByTestId('icon-wrapper');
		expect(iconWrapperElement.classList).toContain(className);
	});
});
