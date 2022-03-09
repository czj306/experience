// const IS_TEST = process.env.NODE_ENV === 'test'
import { setupWorker } from 'msw'
import { handlers } from './handlers'

console.log('handlers', handlers);


// This configures a request mocking server with the given request handlers.
export const worker = setupWorker(...handlers)
// worker.start({
//     // 对于没有 mock 的接口直接通过，避免异常
//     onUnhandledRequest: 'bypass',
// })