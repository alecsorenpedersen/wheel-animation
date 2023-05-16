interface ButtonProps {
	isActive: boolean;
	children: React.ReactNode;
}

const Button = ({ isActive, children }: ButtonProps) => {
	return (
		<button
			className={`w-90 h-90 rounded-full flex items-center justify-center ${
				isActive ? 'bg-orange-500' : 'bg-gray-500'
			}`}>
			{children}
		</button>
	);
};

export default Button;
