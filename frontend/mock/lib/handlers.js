define(["require", "exports", "msw"], function (require, exports, msw_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handlers = void 0;
    exports.handlers = [
        // Handles a "Login" mutation
        msw_1.graphql.mutation('Login', (req, res, ctx) => {
            const { username } = req.variables;
            sessionStorage.setItem('is-authenticated', username);
            return res(ctx.data({
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
                return res(ctx.errors([
                    {
                        message: 'Not authenticated',
                        errorType: 'AuthenticationError',
                    },
                ]));
            }
            // When authenticated, respond with a query payload
            return res(ctx.data({
                user: {
                    username: authenticatedUser,
                    firstName: 'John',
                },
            }));
        }),
    ];
});
