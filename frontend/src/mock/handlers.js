// mock/handlers.ts
import { graphql, rest } from 'msw'
export const handlers = [
  // Handles a "Login" mutation
  graphql.mutation('https://github.com/octocat', (req, res, ctx) => {
    const { username } = req.variables
    sessionStorage.setItem('is-authenticated', username)
    return res(
      ctx.delay(1500),
      ctx.status(200, 'Mocked status'),
      ctx.data({
        login: {
          username,
        },
      }),
    )
  }),
  // Handles a "GetUserInfo" query
  graphql.query('GetUserInfo', (req, res, ctx) => {
    const authenticatedUser = sessionStorage.getItem('is-authenticated')
    if (!authenticatedUser) {
      // When not authenticated, respond with an error
      return res(
        ctx.delay(1500),
        ctx.status(400, 'Mocked status'),
        ctx.errors([
          {
            message: 'Not authenticated',
            errorType: 'AuthenticationError',
          },
        ]),
      )
    }
    // When authenticated, respond with a query payload
    return res(
      ctx.delay(1500),
      ctx.status(200, 'Mocked status'),
      ctx.data({
        user: {
          username: authenticatedUser,
          firstName: 'John',
        },
      }),
    )
  }),
]

export const defaultHandlers = [
  rest.get('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.post('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.patch('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.put('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.delete('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
]