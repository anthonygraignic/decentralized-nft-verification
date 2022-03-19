module.exports = {
	//https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.js$': 'ts-jest',
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
	},
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	moduleNameMapper: {
		'^\\$lib(.*)$': '<rootDir>/src/lib$1',
		'^\\$app(.*)$': [
			'<rootDir>/.svelte-kit/dev/runtime/app$1',
			'<rootDir>/.svelte-kit/build/runtime/app$1'
		]
	},
	collectCoverageFrom: ['src/**/*.{ts,tsx,svelte,js,jsx}'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};
