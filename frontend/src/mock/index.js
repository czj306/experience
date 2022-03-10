// const IS_TEST = process.env.NODE_ENV === 'test'
import { setupWorker } from 'msw'
import { handlers, defaultHandlers } from './handlers'

// This configures a request mocking server with the given request handlers.
export const worker = setupWorker(...handlers, ...defaultHandlers)