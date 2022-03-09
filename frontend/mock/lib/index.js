"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.worker = void 0;
// const IS_TEST = process.env.NODE_ENV === 'test'
const msw_1 = require("msw");
const handlers_1 = require("./handlers");
console.log('handlers', handlers_1.handlers);
// This configures a request mocking server with the given request handlers.
exports.worker = (0, msw_1.setupWorker)(...handlers_1.handlers);
exports.worker.start();
