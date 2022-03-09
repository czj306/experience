// const IS_TEST = process.env.NODE_ENV === 'test'
import { setupWorker } from 'msw'
import { handlers } from './handlers'

console.log('handlers', handlers);


// This configures a request mocking server with the given request handlers.
export const worker = setupWorker(...handlers)
worker.start()