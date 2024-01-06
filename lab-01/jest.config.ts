import nextJest from 'next/jest.js'
import type { Config } from 'jest'

const createJestConfig = nextJest({
  dir: './src',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(config)
