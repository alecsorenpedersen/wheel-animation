module.exports = {
	displayName: 'Jest',
	roots: ['<rootDir>'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
	testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
	transformIgnorePatterns: ['node_modules/(?!(@testing-library/jest-dom))/'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.jsx?$': 'babel-jest',
	},
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
		'@adobe/css-tools': '<rootDir>/__mocks__/cssToolsMock.js',
	},
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	testEnvironment: 'jest-environment-jsdom',
	preset: 'ts-jest',
};
