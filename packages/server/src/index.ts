import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import fs from 'fs';
import path from 'path';
import resolver from './resolvers';
import { KnexDatasource } from './db/knex-datasource';
import knexConfig from './db/knexfile';

const startApolloServer = async (typeDefs: string, resolvers: { Query?: {}; Mutation?: {} }, dataSources) => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
    dataSources: () => dataSources,
  });
  await server.start();
  server.applyMiddleware({ app });
  httpServer.listen(4000, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
};

const typeDefs = fs.readFileSync(path.resolve(__dirname, './schema/index.graphql')).toString();
const dataSources = { db: new KnexDatasource(knexConfig) };
startApolloServer(typeDefs, resolver, dataSources);
