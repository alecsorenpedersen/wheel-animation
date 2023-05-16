interface InfoBoxProps {
	isActive?: boolean;
	children: React.ReactNode;
}

const Box = ({ children }: InfoBoxProps) => {
	return (
		<div
			className={`flex flex-row items-center p-6 gap-4 w-64 h-20 bg-gray-200 rounded`}>
			{children}
		</div>
	);
};

export default Box;
