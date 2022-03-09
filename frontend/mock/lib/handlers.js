"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlers = void 0;
// mock/handlers.ts
const msw_1 = require("msw");
exports.handlers = [
    // Handles a "Login" mutation
    msw_1.graphql.mutation('Login', (req, res, ctx) => {
        const { username } = req.variables;
        sessionStorage.setItem('is-authenticated', username);
        return res(ctx.delay(1500), ctx.status(200, 'Mocked status'), ctx.data({
            login: {
                username,
            },
        }));
    }),
    // Handles a "GetUserInfo" query
    msw_1.graphql.query('GetUserInfo', (req, res, ctx) => {
        const authenticatedUser = sessionStorage.getItem('is-authenticated');
        if (!authenticatedUser) {
            // When not authenticated, respond with an error
            return res(ctx.delay(1500), ctx.status(400, 'Mocked status'), ctx.errors([
                {
                    message: 'Not authenticated',
                    errorType: 'AuthenticationError',
                },
            ]));
        }
        // When authenticated, respond with a query payload
        return res(ctx.delay(1500), ctx.status(200, 'Mocked status'), ctx.data({
            user: {
                username: authenticatedUser,
                firstName: 'John',
            },
        }));
    }),
];
