import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import RootSchema from './RootSchema';

/* Configure the database connection */
const dbUrl = 'mongodb://test:test@ds119355.mlab.com:19355/graphql-mongo-test';
const dbConnectionOptions = {
  useMongoClient: true
};

mongoose.Promise = Promise;
mongoose.connect(dbUrl, dbConnectionOptions).then(() => {
  const server = express();

  server.use('/', expressGraphQL({
    schema: RootSchema,
    graphiql: true
  }));

  server.listen('8040', () => {
    console.log('\nServer connection established.\n')
  });
}).catch(error => console.error(error));

