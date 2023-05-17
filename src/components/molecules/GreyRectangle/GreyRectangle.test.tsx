import React from 'react';
import { render } from '@testing-library/react';

import GreyRectangle from './GreyRectangle';

describe('GreyRectangle', () => {
	it('should render greyboz without errors', () => {
		const { getByTestId } = render(
			<GreyRectangle icon={'symbol'} isActive={false} text={''} />,
		);
		expect(getByTestId('grey-box')).toBeInTheDocument();
	});
});
