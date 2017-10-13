import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import User from './User';

/* Root query */
const QueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    ...User.queries
  }
});

/* Root mutation */
const MutationType = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    ...User.mutations
  }
});

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});
