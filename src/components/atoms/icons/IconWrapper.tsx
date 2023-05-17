import { IconWrapperProps } from '@/types';

const IconWrapper = ({
	isActive,
	icon: IconComponent,
	iconProps,
	className,
}: IconWrapperProps) => {
	return (
		<div
			style={{ width: '90px', height: '90px' }}
			className={className}
			data-testid='icon-wrapper'>
			<IconComponent {...iconProps} />
		</div>
	);
};

export default IconWrapper;
