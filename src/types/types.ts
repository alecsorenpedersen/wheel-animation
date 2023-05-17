export interface GreyRectangleProps {
	icon: React.ElementType;
	isActive: boolean;
	text: string;
}

export interface InfoBoxProps {
	isActive?: boolean;
	children: React.ReactNode;
}

export interface IconWrapperProps {
	isActive: boolean;
	icon: React.ElementType;
	iconProps?: object;
	className?: string;
}

export interface TextBoxProps {
	text: string;
	className?: string;
	style?: React.CSSProperties;
}
