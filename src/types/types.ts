export interface AdvantagesCardProps {
	icon: React.ElementType;
	isActive: boolean;
	text: string;
	animatedText?: string | null;
	onClick: () => void;
	identifier: string;
}

export interface InfoBoxProps {
	isActive?: boolean;
	children: React.ReactNode;
	className?: string;
}

export interface IconWrapperProps {
	isActive: boolean;
	icon: React.ElementType;
	iconProps?: object;
	className?: string;
}

export interface TextBoxProps {
	text: string | null | undefined;
	animatedText?: string | null;
	className?: string;
	style?: React.CSSProperties;
}

export interface FeaturesCardProps {
	isActive: boolean;
	icon: React.ElementType;
	text: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}

export type AdvantagesListProps = {
	activeIcon: ButtonIdentifier[];
	setActiveIcon: (value: ButtonIdentifier[]) => void;
};

export type ButtonIdentifier =
	| 'NoiseCancelIcon'
	| 'WaterproofIcon'
	| 'GPSNavIcon'
	| 'CameraIcon';

export interface FeatureCardProps {
	identifier: ButtonIdentifier;
	text: string;
	icon: React.ElementType;
	position?: { gridRow: string; gridColumn: string };
}

export type FeatureWheelProps = {
	activeIcon: ButtonIdentifier[];
	setActiveIcon: (value: ButtonIdentifier[]) => void;
};
