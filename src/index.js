const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

const options = {
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }
}

server.start(options, ({ port }) => console.log(`Server is running on http://localhost:${port}`))
