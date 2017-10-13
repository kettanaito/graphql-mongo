/**
 * Create a new User in the database.
 */
import { GraphQLString } from 'graphql';

const createUser = ({ type: UserType, Model: UserModel }) => ({
  type: UserType,
  args: {
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString }
  },
  resolve(prev, args) {
    return new UserModel(args).save();
  }
});

export default createUser;
