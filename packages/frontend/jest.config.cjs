module.exports = {
	// Has to use Babel to support ESM with TS and not setup experimental settings
	//https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
	testEnvironment: 'node',
	preset: 'ts-jest/presets/default-esm',
	extensionsToTreatAsEsm: ['.ts'],
	globals: {
		'ts-jest': {
			babelConfig: true,
			useESM: true
		}
	},
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
	collectCoverageFrom: ['src/**/*.{ts,svelte,js}'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};
