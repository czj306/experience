define(["require", "exports", "msw", "./handlers"], function (require, exports, msw_1, handlers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.worker = void 0;
    // This configures a request mocking server with the given request handlers.
    exports.worker = (0, msw_1.setupWorker)(...handlers_1.handlers);
    exports.worker.start();
});
