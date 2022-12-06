import type {Config} from 'jest'

const config: Config = {
	testEnvironment: 'jsdom',
	verbose: true,
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	moduleNameMapper: {
		'^.+\\.(css|less|scss|sass)$': 'babel-jest',
		// '^.+\\.svg$': 'jest-svg-transformer',
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	transform: {
		'^.+\\.[jt]sx?$': 'ts-jest',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	// setupFilesAfterEnv: [
	// 	'<rootDir>/src/setupTests.ts',
	// ],
}

export default config